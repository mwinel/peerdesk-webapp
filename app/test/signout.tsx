"use client"

import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

export function SignOut() {
  return (
    <Button
      variant="link"
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}/login`,
        })
      }
    >
      Log out
    </Button>
  )
}
