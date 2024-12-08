"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface ContactFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

export default function ContactForm({ handleSubmit, isSubmitting }: ContactFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact Form">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          className="bg-[#1A1A1A] border-gray-600 text-white"
          placeholder="Your Name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          className="bg-[#1A1A1A] border-gray-600 text-white"
          placeholder="Your Email"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="bg-[#1A1A1A] border-gray-600 text-white min-h-[120px]"
          placeholder="Your Message"
        />
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[#FF4500] hover:bg-[#FF6347] text-white"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

