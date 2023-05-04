import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"
import { UserAvatar } from "@/components/user-avatar"
import { SignOut } from "./signout"

export const metadata = {
  title: "Test page",
  description: "For testing purposes only.",
}

export default async function TestPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <div className="container mx-auto my-10">
      <div className="flex items-center justify-between">
        <h1>Test Page</h1>
        <SignOut />
      </div>
      <h2 className="font-semibold">Profile details</h2>
      <div className="py-2">
        <UserAvatar
          user={{
            name: user?.name,
            image: user.avatar,
          }}
        />
      </div>
      <table className="auto">
        <tbody className="text-sm">
          <tr>
            <td className="pr-6 font-semibold">Name:</td>
            <td>{user?.name}</td>
          </tr>
          <tr>
            <td className="pr-6 font-semibold">Email:</td>
            <td>{user?.email}</td>
          </tr>
          <tr>
            <td className="pr-6 font-semibold">First name:</td>
            <td>{user?.firstName}</td>
          </tr>
          <tr>
            <td className="pr-6 font-semibold">Last name:</td>
            <td>{user?.lastName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
