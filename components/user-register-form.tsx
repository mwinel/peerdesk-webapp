"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { userRegisterSchema } from "@/lib/validations/user"
import { createUser } from "@/services/users"
import { Icons } from "@/components/icons"
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  ErrorMessage,
  FormSubmit,
} from "@/components/ui/form"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userRegisterSchema>

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userRegisterSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)
  const [isLinkedinLoading, setIsLinkedinLoading] =
    React.useState<boolean>(false)
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false)
  const router = useRouter()

  const handleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  async function onSubmit(data: FormData) {
    try {
      setIsLoading(true)
      const response = await createUser(data)
      const { statusCode, message } = response
      setIsLoading(false)

      if (!response.ok && statusCode === 500) {
        return toast({
          title: "Something went wrong.",
          description: `Ooops! ${message}. Please try again.`,
          variant: "destructive",
        })
      }
      toast({
        title: "Verify your email",
        description:
          "We sent you a verification link. Be sure to check your spam too.",
      })
      router.push("/login")
    } catch (error) {
      setIsLoading(false)
      return toast({
        title: "Something went wrong.",
        description: "Your create account request failed. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* Google auth button */}
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGoogleLoading(true)
          signIn("google")
        }}
        // onClick={googleAuthHandler}
        disabled={isLoading || isGoogleLoading || isLinkedinLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Icons.google className="w-4 h-4 mr-2" />
        )}{" "}
        Continue with Google
      </button>
      {/* Linkedin auth button */}
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsLinkedinLoading(true)
          signIn("linkedin")
        }}
        disabled={isLoading || isGoogleLoading || isLinkedinLoading}
      >
        {isLinkedinLoading ? (
          <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <span className="w-5 h-5 mr-2">
            <Icons.linkedin />
          </span>
        )}{" "}
        Continue with Linkedin
      </button>
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-neutral-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-white">Or continue with</span>
        </div>
      </div>
      {/* Credentials signup form */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <FormField name="email">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <FormControl asChild>
                <Input
                  id="email"
                  placeholder="johndoe@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={isLoading || isGoogleLoading || isLinkedinLoading}
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
                  disabled={isLoading || isGoogleLoading || isLinkedinLoading}
                  {...register("password")}
                />
              </FormControl>
              {errors?.password && (
                <ErrorMessage>{errors?.password.message}</ErrorMessage>
              )}
            </FormField>
          </div>
          <FormSubmit className={cn(buttonVariants(), "mt-1 w-full")}>
            {isLoading && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
            Create account
          </FormSubmit>
        </div>
      </Form>
    </div>
  )
}
