'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
          We&apos;re sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.
        </p>
        <Button
          onClick={reset}
          className="bg-[#FF4500] hover:bg-[#FF6347] text-white font-medium px-8 py-3 rounded-md transition-colors duration-200"
        >
          Try again
        </Button>
      </div>
    </div>
  )
}

