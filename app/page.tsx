import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants, Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/user-avatar"

const user = {
  name: "John Doe",
  image: "https://i.pravatar.cc/300",
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
        Get Started
      </Link>
      <Button variant="default" size="sm">
        Hello there
      </Button>
      <Button variant="destructive" size="md">
        Hello there
      </Button>
      <Button variant="outline" size="sm">
        Hello there
      </Button>
      <Button variant="subtle" size="lg">
        Hello there
      </Button>
      <Button variant="ghost" size="md">
        Hello there
      </Button>
      <Button variant="link" size="sm">
        Hello there
      </Button>

      <UserAvatar
        user={{ name: user.name || null, image: user.image || null }}
        className="w-8 h-8"
      />
    </main>
  )
}
