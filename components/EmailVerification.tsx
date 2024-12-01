'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function EmailVerification() {
  const [isVerifying, setIsVerifying] = useState(true)
  const [isVerified, setIsVerified] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Here you would typically verify the token from the URL
    // For this example, we'll just simulate a successful verification after a delay
    const timer = setTimeout(() => {
      setIsVerifying(false)
      setIsVerified(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleContinue = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] flex items-center justify-center">
      <div className="bg-[#111111] p-10 py-12 rounded-lg shadow-lg max-w-md w-full text-center">
        <Link href="/" className="block text-[#FF4500] hover:text-[#FF6347] mb-0 pb-8 text-sm text-left">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white mb-8 pt-6">Email Verification</h1>
        {isVerifying ? (
          <p className="text-gray-300">Verifying your email...</p>
        ) : isVerified ? (
          <>
            <p className="text-green-400 mb-4">Your email has been successfully verified!</p>
            <Button onClick={handleContinue} className="bg-[#FF4500] hover:bg-[#FF6347] text-white">
              Continue to Dashboard
            </Button>
          </>
        ) : (
          <>
            <p className="text-red-400 mb-4">Email verification failed. Please try again or contact support.</p>
            <Button onClick={() => router.push('/signup')} className="bg-[#FF4500] hover:bg-[#FF6347] text-white">
              Back to Sign Up
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

