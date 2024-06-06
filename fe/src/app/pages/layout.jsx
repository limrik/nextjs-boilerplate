import Link from "next/link"

export default function Layout({ children }) {
  return (
    <div className="w-full bg-grey flex flex-col p-8">
      <nav className="flex flex-row gap-6">
        <Link href="/pages/page1" className="homepage-link">
          Page 1
        </Link>
        <Link href="/pages/page2" className="homepage-link">
          Page 2
        </Link>
      </nav>

      <main className="border rounded-md border-black/30 h-[80vh] w-full">
        {children}
      </main>
    </div>
  )
}
