"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert("Message sent! We'll get back to you as soon as possible.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 bg-[#1A1A1A] text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 bg-[#1A1A1A] text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 bg-[#1A1A1A] text-white"
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="bg-[#FF4500] hover:bg-[#FF6347] text-white">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

