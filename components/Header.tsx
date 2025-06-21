"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCS%20logo-mfp4YJWlU3AgiElUk7lscw1k3CajiH.png"
            alt="Hawkins Cleaning Services"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#services" className="text-gray-600 hover:text-teal-700 transition duration-300">
            Services
          </Link>
          <Link href="#why-us" className="text-gray-600 hover:text-teal-700 transition duration-300">
            Why Us
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-teal-700 transition duration-300">
            About
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-teal-700 transition duration-300">
            FAQ
          </Link>
          <a
            href="tel:9103522582"
            className="flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition duration-300"
          >
            <Phone size={18} />
            (910) 352-2582
          </a>
        </div>
        <Button asChild className="hidden md:inline-block">
          <a
            href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Free Quote
          </a>
        </Button>
        <button id="mobile-menu-button" className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>
      <div className={`md:hidden px-6 pb-4 ${mobileMenuOpen ? "" : "hidden"}`}>
        <Link
          href="#services"
          className="block py-2 text-gray-600 hover:text-teal-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          href="#why-us"
          className="block py-2 text-gray-600 hover:text-teal-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          Why Us
        </Link>
        <Link
          href="#about"
          className="block py-2 text-gray-600 hover:text-teal-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="#faq"
          className="block py-2 text-gray-600 hover:text-teal-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          FAQ
        </Link>
        <a
          href="tel:9103522582"
          className="block py-2 text-teal-700 font-semibold"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="flex items-center gap-2">
            <Phone size={18} />
            (910) 352-2582
          </span>
        </a>
        <Button asChild className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
          <a
            href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Free Quote
          </a>
        </Button>
      </div>
    </header>
  )
}
