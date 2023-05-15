import { Metadata } from "next"

import { ResetPasswordForm } from "@/components/forms/reset-password-form"

export const metadata: Metadata = {
  title: "Reset your password",
  description:
    "Enter your email and the new password you'd like to use to access your account.",
}

export default function ResetPasswordPage() {
  return (
    <div className="container flex flex-col items-center justify-center w-screen h-screen">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <ResetPasswordForm />
      </div>
    </div>
  )
}
