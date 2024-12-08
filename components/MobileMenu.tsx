'use client'

import { Button } from './ui/button'

export default function MobileMenu() {
  return (
    <div className="md:hidden">
      <nav className="flex flex-col space-y-4 p-4">
        <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="/features" className="text-gray-600 hover:text-gray-900">Features</a>
        <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
        <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        <Button>Get Started</Button>
      </nav>
    </div>
  )
}