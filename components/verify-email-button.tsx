"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { buttonVariants, ButtonProps } from "@/components/ui/button"

interface VerifyEmailProps extends ButtonProps {}

export function VerifyEmailButton({ ...props }: VerifyEmailProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  return (
    <button className={cn(buttonVariants({ size: "lg" }), "w-full")}>
      {isLoading && <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />}
      Verify email
    </button>
  )
}
