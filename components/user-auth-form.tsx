"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
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
} from "@/components/ui/form"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false)
  const [isLinkedinLoading, setIsLinkedinLoading] =
    React.useState<boolean>(false)
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn("credentials", {
      email: data.email.toLowerCase(),
      password: data.password,
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/test", // double check this for a wild card.
    })

    console.log(signInResult)

    setIsLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: "Invalid credentials",
        description: "Invalid email/password. Please try again.",
        variant: "destructive",
      })
    }

    toast({
      title: "Login successfull",
      description: "Your login was successful.",
    })

    router.push("/test")
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
        disabled={isLoading || isGoogleLoading || isLinkedinLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Icons.google className="w-4 h-4 mr-2" />
        )}{" "}
        Sign in with Google
      </button>
      {/* Linkedin auth button */}
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => signIn("linkedin")}
        disabled={isLoading || isGoogleLoading || isLinkedinLoading}
      >
        {isLinkedinLoading ? (
          <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <span className="w-5 h-5 mr-2">
            <Icons.linkedin />
          </span>
        )}{" "}
        Sign in with Linkedin
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
      {/* Credentials auth form */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <FormField name="firstName">
              <FormLabel htmlFor="firstName">Email address</FormLabel>
              <FormControl asChild>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading || isGoogleLoading || isLinkedinLoading}
                  {...register("email")}
                />
              </FormControl>
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
                  placeholder="*********"
                  type={isPasswordVisible ? "text" : "password"}
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={isLoading || isGoogleLoading || isLinkedinLoading}
                  {...register("password")}
                />
              </FormControl>
            </FormField>
          </div>
          <FormSubmit className={cn(buttonVariants(), "mt-1 w-full")}>
            {isLoading && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
            Log in
          </FormSubmit>
        </div>
      </Form>
    </div>
  )
}
