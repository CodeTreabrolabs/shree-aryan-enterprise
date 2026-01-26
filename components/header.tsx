"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <img src="https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769435519/logo_qzj9tg.png" alt="Logo" className="w-10 h-10 rounded-md hidden sm:block" />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl font-semibold text-foreground">Shree Aryan Estate</span>
              <span className="font-serif text-xl text-primary ml-1">Enterprise</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919322635844" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+919322635844</span>
            </a>
            <Button asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a href="tel:++919322635844" className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+919322635844</span>
              </a>
              <Button asChild className="w-full">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
