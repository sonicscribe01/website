import { Metadata } from 'next'
import Seo from '@/components/Seo'
import SignInForm from '@/components/SignInForm'
import { Mic } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign In | SonicScribe',
  description: 'Sign in to your SonicScribe account to access AI-powered audio transcription services.',
}

export default function SignInPage() {
  return (
    <>
      <Seo 
        title="Sign In to Your Account"
        description="Access your SonicScribe account to manage your AI-powered audio transcriptions and settings."
        canonical="https://sonicscribe.ai/signin"
      />
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] flex items-center justify-center">
        <div className="bg-[#111111] p-10 py-12 rounded-lg shadow-lg max-w-md w-full">
          <Link href="/" className="block text-[#FF4500] hover:text-[#FF6347] mb-0 pb-8 text-sm">
            &larr; Back to Home
          </Link>
          <div className="flex items-center justify-center mb-6">
            <Mic className="w-8 h-8 mr-2 text-white" />
            <span className="text-2xl font-bold">
              <span className="text-white">SonicScribe</span>
              <span className="text-[#FF4500]">.ai</span>
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-8 pt-6 text-center">Sign In</h1>
          <SignInForm />
        </div>
      </div>
    </>
  )
}

