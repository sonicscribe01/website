"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How accurate is SonicScribe\'s transcription?',
    answer: 'SonicScribe uses state-of-the-art AI technology to achieve over 95% accuracy in most cases. The accuracy can vary depending on audio quality and speaker clarity.'
  },
  {
    question: 'What file formats does SonicScribe support?',
    answer: 'SonicScribe supports a wide range of audio formats including MP3, WAV, M4A, and more. We also support video files such as MP4 and AVI.'
  },
  {
    question: 'How long does it take to transcribe an audio file?',
    answer: 'Transcription time depends on the length of your audio file. On average, it takes about 5-10 minutes to transcribe an hour of audio.'
  },
  {
    question: 'Is my data secure with SonicScribe?',
    answer: 'Yes, we take data security very seriously. All uploads are encrypted, and we delete your files from our servers once transcription is complete unless you choose to save them.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-r from-[#0A0A0A] via-[#111111] to-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-800 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-[#1A1A1A] hover:bg-[#202020] transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#FF4500]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#FF4500]" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-[#111111] text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

