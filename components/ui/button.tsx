import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-gray-100",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-600",
        primary: "bg-primary-500 text-white hover:bg-primary-600",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "bg-transparent border border-neutral-100 hover:bg-neutral-50",
        subtle: "bg-gray-100 hover:bg-gray-200",
        ghost:
          "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        md: "h-10 px-6 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
