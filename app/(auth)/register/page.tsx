import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserRegisterForm } from "@/components/forms/user-register-form"
import Logo from "@/public/logo.jpeg"

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
}

export default function RegisterPage() {
  return (
    <div className="container grid flex-col items-center justify-center w-screen h-screen lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: "link" }),
          "absolute right-4 top-4 hidden hover:text-primary-500 md:right-8 md:top-8 lg:block"
        )}
      >
        Login
      </Link>
      <div className="hidden h-full bg-neutral-100 lg:block" />
      <div className="py-10 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex items-center justify-center">
              <Image src={Logo} alt="logo" width={130} height={100} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">
              Get started today
            </h1>
            <p className="text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="underline underline-offset-4 hover:text-primary-500"
              >
                Log in
              </Link>
            </p>
          </div>
          <UserRegisterForm />
          <p className="px-8 text-xs text-center">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              target="_blank"
              className="underline underline-offset-4 hover:text-primary-500"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              target="_blank"
              className="underline underline-offset-4 hover:text-primary-500"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
