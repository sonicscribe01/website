'use client'
import React, { useState } from 'react'
import ContactForm from './ContactForm'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Have questions about SonicScribe or need assistance? We're here to help. Reach out to our team, and we'll get back to you within 24 hours.
        </p>
        <div className="flex justify-center">
          <div className="bg-[#222222] p-10 rounded-lg shadow-lg max-w-md w-full transition-all duration-300 bg-gradient-to-br from-[#1A1A1A] to-[#222222] animate-fade-in hover:shadow-xl">
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF6347] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Us a Message
            </h3>
            <ContactForm
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              
            />
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-400">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-400">An error occurred. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

