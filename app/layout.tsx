import "@/styles/globals.css"
import { Inter } from "next/font/google"

export const metadata = {
  title: "PeerDesk",
  description:
    "PeerDesk is a collaborative platform for new UXers to learn and practice their skills.",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
