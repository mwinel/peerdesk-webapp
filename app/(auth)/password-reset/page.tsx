import { Metadata } from "next"

import { PasswordResetForm } from "@/components/forms/password-reset-form"

export const metadata: Metadata = {
  title: "Password reset",
  description:
    " Enter your email and we'll send you a link to reset your password.",
}

export default function PasswordResetPage() {
  return (
    <div className="container flex flex-col items-center justify-center w-screen h-screen">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <PasswordResetForm />
      </div>
    </div>
  )
}
