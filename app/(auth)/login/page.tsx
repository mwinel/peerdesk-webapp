import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/forms/user-auth-form"
import Logo from "@/public/logo.jpeg"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function LoginPage() {
  return (
    <div className="container flex flex-col items-center justify-center w-screen h-screen">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "link" }),
          "absolute left-4 top-4 hidden hover:text-primary-500 md:left-8 md:top-8 lg:flex"
        )}
      >
        <>
          <Icons.chevronLeft className="w-4 h-4 mr-2" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex items-center justify-center">
            <Image src={Logo} alt="logo" width={130} height={100} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            Welcome back
          </h1>
          <p className="px-8 text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-sm text-center">
          <Link
            href="/password-reset"
            className="underline underline-offset-4 hover:text-primary-500"
          >
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  )
}
