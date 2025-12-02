import Link from "next/link"
import { Chrome } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-4 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Chrome className="h-6 w-6 text-primary" />
          <span className="text-lg">Infinity2Chrome</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            首页
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            关于
          </Link>
        </nav>
      </div>
    </header>
  )
}
