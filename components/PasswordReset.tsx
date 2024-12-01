'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function PasswordReset() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    // Here you would typically send a request to your authentication API
    // For this example, we'll just simulate a successful password reset request
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setMessage('If an account exists for this email, you will receive password reset instructions.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] flex items-center justify-center">
      <div className="bg-[#111111] p-10 py-12 rounded-lg shadow-lg max-w-md w-full">
        <Link href="/" className="block text-[#FF4500] hover:text-[#FF6347] mb-0 pb-8 text-sm">
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-white mb-8 pt-6 text-center">Reset Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 bg-[#1A1A1A] text-white"
            />
          </div>
          <Button type="submit" className="w-full bg-[#FF4500] hover:bg-[#FF6347] text-white" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Reset Password'}
          </Button>
        </form>
        {message && (
          <p className="mt-4 text-sm text-green-400 text-center">{message}</p>
        )}
        <p className="text-sm text-gray-400 text-center mt-4">
          Remember your password?{' '}
          <Link href="/signin" className="text-[#FF4500] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

