import React from 'react'
import { Mic, Cpu, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const steps = [
  {
    icon: <Mic className="h-8 w-8" />,
    title: 'Record or Upload',
    description: 'Speak into your device or upload an existing audio file in various formats.',
    details: [
      'Support for multiple audio formats',
      'High-quality audio capture',
      'Secure file handling'
    ]
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'AI Transcription',
    description: 'Our advanced AI processes your audio, converting speech to text with high accuracy.',
    details: [
      'State-of-the-art speech recognition',
      'Multi-language support',
      'Context-aware processing'
    ]
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Edit and Export',
    description: 'Review, edit, and refine your transcript before exporting in your preferred format.',
    details: [
      'Intuitive editing interface',
      'Automatic punctuation',
      'Multiple export options'
    ]
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" aria-hidden="true" />
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          How SonicScribe Works
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Experience the power of AI-driven audio transcription with our simple three-step process. From upload to edit, we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#1A1A1A] rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="bg-[#FF4500] rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                {React.cloneElement(step.icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white text-center">{step.title}</h3>
              <p className="text-gray-400 mb-6 text-center">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-gray-300">
                    <span className="text-[#FF4500] mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

