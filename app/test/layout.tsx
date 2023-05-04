import { notFound } from "next/navigation"

import { getCurrentUser } from "@/lib/session"

interface TestLayoutProps {
  children: React.ReactNode
}

export default async function TestLayout({ children }: TestLayoutProps) {
  // const user = await getCurrentUser()
  // console.log(user)

  // if (!user) {
  //   return notFound()
  // }

  return <div className="min-h-screen">{children}</div>
}
