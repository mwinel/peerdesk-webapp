import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

type UserId = string
type UserFirstName = string | unknown
type UserLastName = string | unknown


declare module "next-auth/jwt" {
  interface JWT {
    id: UserId
  }
}

declare module "next-auth" {
  interface Session {
    user: any
  }
}
