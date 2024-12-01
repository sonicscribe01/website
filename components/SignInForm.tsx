'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your authentication API
    console.log('Signing in with:', email, password)
    // For now, we'll just redirect to the home page
    router.push('/')
  }

  return (
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
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 bg-[#1A1A1A] text-white"
        />
      </div>
      <Button type="submit" className="w-full bg-[#FF4500] hover:bg-[#FF6347] text-white">
        Sign In
      </Button>
      <p className="text-sm text-gray-400 text-center mt-4">
        Don't have an account?{' '}
        <Link href="/signup" className="text-[#FF4500] hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  )
}

