'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface EarlyAccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const object = Object.fromEntries(formData)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'Yce3c6169-1d52-42e1-b9ba-c6b297ead107', // Replace with your key
          ...object
        })
      })

      const data = await response.json()
      if (data.success) {
        setIsSuccess(true)
        e.currentTarget.reset()
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1A1A1A] border border-gray-800 text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Request Early Access</DialogTitle>
          <DialogDescription className="text-gray-400">
            Join our waitlist to be among the first to experience SonicScribe.
          </DialogDescription>
        </DialogHeader>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4 text-gray-400" />
          <span className="sr-only">Close</span>
        </button>
        
        {isSuccess ? (
          <div className="text-center py-6">
            <h3 className="text-xl font-semibold text-[#FF4500] mb-2">Thank You!</h3>
            <p className="text-gray-300">
              We've received your request. We'll be in touch soon with exclusive early access details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 bg-[#2A2A2A] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-[#2A2A2A] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                Company (Optional)
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="w-full px-4 py-2 bg-[#2A2A2A] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-transparent"
                placeholder="Your company"
              />
            </div>
            <div>
              <label htmlFor="useCase" className="block text-sm font-medium text-gray-300 mb-1">
                Primary Use Case
              </label>
              <select
                name="useCase"
                id="useCase"
                required
                className="w-full px-4 py-2 bg-[#2A2A2A] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-transparent"
              >
                <option value="">Select a use case</option>
                <option value="personal">Personal Use</option>
                <option value="business">Business Use</option>
                <option value="education">Education</option>
                <option value="research">Research</option>
                <option value="other">Other</option>
              </select>
            </div>
            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FF4500] hover:bg-[#FF6347] text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
            >
              {isLoading ? 'Submitting...' : 'Request Access'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

