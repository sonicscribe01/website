"use client"

import { useState } from 'react'

export default function FreeTrialForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert("Thank you for signing up! Check your email for further instructions.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full px-3 py-2 bg-[#1A1A1A] border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-[#FF4500] focus:border-[#FF4500]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full px-3 py-2 bg-[#1A1A1A] border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-[#FF4500] focus:border-[#FF4500]"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company (Optional)</label>
        <input
          type="text"
          id="company"
          name="company"
          className="mt-1 block w-full px-3 py-2 bg-[#1A1A1A] border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-[#FF4500] focus:border-[#FF4500]"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          required
          className="h-4 w-4 text-[#FF4500] focus:ring-[#FF4500] border-gray-600 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
          I agree to the <a href="/terms" className="text-[#FF4500] hover:underline">Terms and Conditions</a>
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF4500] hover:bg-[#FF6347] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4500]"
      >
        {isSubmitting ? 'Signing Up...' : 'Start Free Trial'}
      </button>
    </form>
  )
}

