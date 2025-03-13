import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t border-blue-100 bg-white py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:items-center md:px-6">
        <div className="flex items-center gap-2">
          <Image src="/_Red Blue Simple Logo.png" alt="Aeternum Logo" width={30} height={30} className="h-8 w-8 object-contain" />
          <span className="text-lg font-bold text-blue-900">Aeternum</span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link href="/" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Home
          </Link>
          <Link href="/services" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Services
          </Link>
          <Link href="/about" className="text-xs hover:underline underline-offset-4 text-gray-600">
            About
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy Policy
          </Link>
        </nav>
        <div className="text-xs text-gray-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} Aeternum. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
