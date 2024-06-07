"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Layout({ children }) {
  const pathname = usePathname()

  return (
    <div className="w-full bg-grey flex flex-col p-8">
      <nav className="flex flex-row gap-6">
        <Link
          href="/pages/form"
          className={`homepage-link ${
            pathname === ("/pages/form" || "/pages") ? "selected" : ""
          }`}
        >
          Form
        </Link>
        <Link
          href="/pages/media"
          className={`homepage-link ${
            pathname === "/pages/media" ? "selected" : ""
          }`}
        >
          Media
        </Link>
      </nav>

      <main className="border rounded-md border-black/30 h-[80vh] w-full overflow-hidden">
        {children}
      </main>
    </div>
  )
}
