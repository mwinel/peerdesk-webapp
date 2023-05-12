import Link from "next/link"

import { VerifyEmailButton } from "@/components/verify-email-button"

export const metadata = {
  title: "Verify email",
  description: "Verify your email.",
}

export default function VerifyEmailPage() {
  return (
    <div className="container flex flex-col items-center justify-center w-screen h-screen">
      <div className="py-10 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">
              Verify your email address
            </h1>
            <p className="text-sm">
              You’ve entered <b>name@example.com</b> as the email address for
              your account. Please verify this email address by clicking the
              button below.
            </p>
          </div>
          <VerifyEmailButton />
          <p className="px-8 text-xs text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary-500"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
