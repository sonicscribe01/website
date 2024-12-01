import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">404 - Page Not Found</h1>
        <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Button asChild className="bg-[#FF4500] hover:bg-[#FF6347] text-white">
          <Link href="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

