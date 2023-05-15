"use client"

import * as React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormSubmit,
  ErrorMessage,
} from "@/components/ui/form"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ResetPasswordFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function ResetPasswordForm({
  className,
  ...props
}: ResetPasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false)
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false)

  const handleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  async function onSubmit(data: FormData) {
    setIsLoading(true)
    console.log(data)
    setIsLoading(false)
  }

  return (
    <div className={cn("grid gap-4", className)} {...props}>
      {!isSuccess ? (
        <>
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">
              Reset your password
            </h1>
            <p className="text-sm">
              Enter your email and the new password you'd like to use to access
              your account.
            </p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-3">
              <div className="grid gap-1">
                <FormField name="email">
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <FormControl asChild>
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                      {...register("email")}
                    />
                  </FormControl>
                  {errors?.email && (
                    <ErrorMessage>{errors?.email.message}</ErrorMessage>
                  )}
                </FormField>
              </div>
              <div className="grid gap-1">
                <FormField name="password">
                  <div className="flex items-center justify-between my-1">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <button
                      className="pr-1 text-xs"
                      onClick={handleShowPassword}
                      type="button"
                    >
                      {isPasswordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                  <FormControl asChild>
                    <Input
                      id="password"
                      placeholder="********"
                      type={isPasswordVisible ? "text" : "password"}
                      autoCapitalize="none"
                      autoCorrect="off"
                      disabled={isLoading}
                      {...register("password")}
                    />
                  </FormControl>
                  {errors?.password && (
                    <ErrorMessage>{errors?.password?.message}</ErrorMessage>
                  )}
                </FormField>
              </div>
              <FormSubmit
                className={cn(buttonVariants({ size: "lg" }), "mt-2 w-full")}
              >
                {isLoading && (
                  <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
                )}
                Update password
              </FormSubmit>
            </div>
          </Form>
          <p className="px-8 text-xs text-center">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="underline underline-offset-4 hover:text-primary-500"
            >
              Sign Up
            </Link>{" "}
            .
          </p>
        </>
      ) : (
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-8 h-8 mb-2 border rounded-full border-primary-200 bg-primary-50">
              <Icons.check className="w-5 h-5 text-primary-400" />
            </div>
          </div>
          <p className="font-semibold">Password reset successfully</p>
          <p className="text-sm">
            Your password has been reset successfully. Click the link below to
            log in.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary-500">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "link", size: "sm" }),
                "mt-2 px-0 hover:text-primary-600"
              )}
            >
              Log in to your account
            </Link>
            <Icons.arrowRight className="w-5 h-5 mt-2" />
          </div>
        </div>
      )}
    </div>
  )
}
