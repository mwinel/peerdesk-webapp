import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container min-h-screen my-10">
      <div className="flex items-center justify-between">
        <h1>Landing page</h1>
        <Link
          href="/register"
          className={cn(buttonVariants({ variant: "link" }))}
        >
          Get started
        </Link>
      </div>
    </main>
  )
}
