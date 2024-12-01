import React from 'react'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1A1A] to-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Have questions about SonicScribe or need assistance? We're here to help. Reach out to our team, and we'll get back to you within 24 hours.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#222222] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-[#FF4500] mb-6">Contact Information</h3>
            <ul className="space-y-4 text-gray-300 flex-grow">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@sonicscribe.ai" className="hover:text-[#FF4500] transition-colors duration-300">hello@sonicscribe.ai</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic">USA</address>
              </li>
            </ul>
            <div className="mt-8 text-gray-300">
              <h4 className="text-xl font-semibold text-white mb-4">About SonicScribe</h4>
              <p>SonicScribe is a cutting-edge AI-powered audio transcription service. We combine advanced machine learning algorithms with intuitive user interfaces to provide fast, accurate, and reliable transcriptions for professionals across various industries.</p>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#FF4500] transition-colors duration-300" aria-label="Follow us on X">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#222222] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#FF4500] mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

