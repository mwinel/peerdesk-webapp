import "@/styles/globals.css"
import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "PeerDesk",
  description:
    "PeerDesk is a collaborative platform for new UXers to learn and practice their skills.",
}

const montserrat = Montserrat({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn("text-gray-900 antialiased", montserrat.className)}
    >
      <head />
      <body>
        {children}
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  )
}
