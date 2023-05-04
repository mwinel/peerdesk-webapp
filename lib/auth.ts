import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import LinkedInProvider from "next-auth/providers/linkedin"

import { login } from "@/services/auth"
import { createUser, getUserByEmail } from "@/services/users"
import { generatePassword } from "./utils"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET as string,
    }),
    LinkedInProvider({
      clientId: process.env.NEXTAUTH_LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_LINKEDIN_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      // Trick to make the credentials provider work with the JWT session.
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          const data = await login(credentials)
          if (data.accessToken) {
            return data
          }
          return null
        } catch (error) {
          throw new Error(error.message)
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) return true
      return false
    },

    async jwt({ token, account, user, profile }: any) {
      if (account?.provider === "credentials" && user) {
        const dbUser = await getUserByEmail(user.email)

        if (dbUser.statusCode === 200) {
          const { email, firstName, lastName, role, avatar } = dbUser.data

          Object.assign(token, {
            email,
            name: `${firstName} ${lastName}`,
            firstName,
            lastName,
            role,
            avatar,
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
          })
        }
      }

      if (account?.provider === "google" && user) {
        const dbUser = await getUserByEmail(profile.email)

        if (dbUser.statusCode === 200) {
          const { email, firstName, lastName, role, avatar } = dbUser.data

          Object.assign(token, {
            email,
            name: `${firstName} ${lastName}`,
            firstName,
            lastName,
            role,
            avatar,
            accessToken: account.id_token,
          })
        } else {
          // save user to db
          const createdUser = await createUser({
            email: profile.email,
            password: generatePassword(10),
            firstName: profile.given_name,
            lastName: profile.family_name,
            avatar: profile.picture,
          })

          const { email, firstName, lastName, role, avatar } = createdUser.data

          Object.assign(token, {
            email,
            name: `${firstName} ${lastName}`,
            firstName,
            lastName,
            role,
            avatar,
            accessToken: account.id_token,
          })
        }
      }

      if (account?.provider === "linkedin" && user) {
        console.log(account)
        const dbUser = await getUserByEmail(user.email)

        if (dbUser.statusCode === 200) {
          const { email, firstName, lastName, role, avatar } = dbUser.data

          Object.assign(token, {
            email,
            name: `${firstName} ${lastName}`,
            firstName,
            lastName,
            role,
            avatar,
            accessToken: account.access_token,
          })
        } else {
          // save user to db
          const createdUser = await createUser({
            email: user.email,
            password: generatePassword(10),
            firstName: profile.localizedFirstName,
            lastName: profile.localizedLastName,
            avatar: user.image,
          })

          const { email, firstName, lastName, role, avatar } = createdUser.data

          Object.assign(token, {
            email,
            name: `${firstName} ${lastName}`,
            firstName,
            lastName,
            role,
            avatar,
            accessToken: account.access_token,
          })
        }
      }

      return { ...token, ...user }
    },

    async session({ session, token }: any) {
      const { email, name, firstName, lastName, role, avatar } = token

      session.user = {
        email,
        name,
        firstName,
        lastName,
        role,
        avatar,
        isLoggedIn: true,
      }

      return { ...session }
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}
