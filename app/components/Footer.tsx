import React from 'react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} SonicScribe.ai. All rights reserved.
        </p>
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          aria-label="Back to top"
        >
          ↑
        </Button>
      </div>
    </footer>
  )
}

