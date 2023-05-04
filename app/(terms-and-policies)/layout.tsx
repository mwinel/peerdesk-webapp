interface TestLayoutProps {
  children: React.ReactNode
}

export default function TestLayout({ children }: TestLayoutProps) {
  return <div className="min-h-screen">{children}</div>
}
