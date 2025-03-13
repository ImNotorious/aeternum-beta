"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { useState } from "react"
import Image from "next/image"

export function Navbar() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/_Red Blue Simple Logo.png" // Replace with your image path
            alt="Aeternum Logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="text-xl font-bold text-blue-900">Aeternum</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors hover:text-blue-800 ${
                pathname === item.path ? "text-blue-800" : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-2">
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="outline" className="border-blue-800 text-blue-800">
                  Dashboard
                </Button>
              </Link>
              <Button variant="ghost" className="text-gray-600" onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/auth">
              <Button className="bg-blue-800 hover:bg-blue-700 text-white">Get Started</Button>
            </Link>
          )}
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-900"
          >
            {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-blue-100 bg-white">
          <div className="container flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`py-2 text-sm font-medium transition-colors hover:text-blue-800 ${
                  pathname === item.path ? "text-blue-800" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              {user ? (
                <>
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full border-blue-800 text-blue-800">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full text-gray-600"
                    onClick={() => {
                      signOut()
                      setIsMenuOpen(false)
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link href="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white">Get Started</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
