"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Calendar, BarChart2 } from 'lucide-react'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="font-bold text-lg">Recreational Activity Club</div>
        <nav className="flex items-center space-x-4">
          <NavItem href="/" icon={Home} text="Dashboard" active={pathname === '/'} />
          <NavItem href="/members" icon={Users} text="Members" active={pathname === '/members'} />
          <NavItem href="/events" icon={Calendar} text="Events" active={pathname === '/events'} />
          <NavItem href="/reports" icon={BarChart2} text="Reports" active={pathname === '/reports'} />
        </nav>
      </div>
    </header>
  )
}

function NavItem({ href, icon: Icon, text, active = false }: { href: string; icon: React.ElementType; text: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
        active ? "text-primary" : "text-muted-foreground"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{text}</span>
    </Link>
  )
}

