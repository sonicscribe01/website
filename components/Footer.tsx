import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-semibold mb-2">SonicScribe</h3>
            <p className="text-sm mb-4">AI-powered audio transcription for professionals.</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} SonicScribe. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#FF4500] transition-colors">Home</Link></li>
              <li><Link href="/#features" className="hover:text-[#FF4500] transition-colors">Features</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-[#FF4500] transition-colors">How It Works</Link></li>
              <li><Link href="/#pricing" className="hover:text-[#FF4500] transition-colors">Pricing</Link></li>
              <li><Link href="/#contact-section" className="hover:text-[#FF4500] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF4500] transition-colors" aria-label="X (formerly Twitter)">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors duration-300"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </Button>
    </footer>
  )
}

