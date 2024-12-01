'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      cause: error.cause,
    })
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-[2.5rem] font-bold text-white mb-4">
              Oops! Something went wrong.
            </h1>
            <p className="text-[1rem] text-gray-300 mb-8 max-w-[600px]">
              We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            <button
              onClick={() => reset()}
              className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white px-6 py-2 rounded-[4px] font-medium text-[1rem] transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

