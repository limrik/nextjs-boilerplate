"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Layout({ children }) {
  const pathname = usePathname()

  return (
    <div className="w-full bg-grey flex flex-col p-8">
      <nav className="flex flex-row gap-6">
        <Link
          href="/pages/page1"
          className={`homepage-link ${
            pathname === "/pages/page1" || "/pages" ? "selected" : ""
          }`}
        >
          Page 1
        </Link>
        <Link
          href="/pages/page2"
          className={`homepage-link ${
            pathname === "/pages/page2" ? "selected" : ""
          }`}
        >
          Page 2
        </Link>
      </nav>

      <main className="border rounded-md border-black/30 h-[80vh] w-full">
        {children}
      </main>
    </div>
  )
}
