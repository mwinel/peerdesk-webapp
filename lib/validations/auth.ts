import * as z from "zod"

export const userAuthSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must atleast contain 8 characters." })
    .max(25, { message: "Password must not be longer than 25 characters." }),
})

export const passwordResetSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
})
