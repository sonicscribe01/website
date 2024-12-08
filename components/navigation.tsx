'use client'

import Link from 'next/link'
import { Button } from './ui/button'

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link href="/" className="text-gray-600 hover:text-gray-900">
        Home
      </Link>
      <Link href="/features" className="text-gray-600 hover:text-gray-900">
        Features
      </Link>
      <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
        Pricing
      </Link>
      <Link href="/contact" className="text-gray-600 hover:text-gray-900">
        Contact
      </Link>
      <Button>Get Started</Button>
    </nav>
  )
}