'use client'
'use client'

import { useState } from 'react'
import Seo from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Play, Pause, Upload, Lightbulb, FileText, BarChart } from 'lucide-react'
import Link from 'next/link'

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [highlightedTranscript, setHighlightedTranscript] = useState('')
  const [summary, setSummary] = useState('')
  const [keyPoints, setKeyPoints] = useState<string[]>([])
  const [sentiment, setSentiment] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('es')

  // ... (rest of the component logic remains unchanged) ...

  return (
    <>
      <Seo 
        title="Try SonicScribe Demo"
        description="Experience the power of AI-driven audio transcription with our interactive demo. Upload your audio and see SonicScribe in action."
        canonical="https://sonicscribe.ai/demo"
      />
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] py-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block mb-8 text-[#FF4500] hover:text-[#FF6347] transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Try SonicScribe Demo</h1>
          <div className="bg-[#111111] p-10 rounded-lg shadow-lg max-w-4xl mx-auto space-y-10">
            {/* ... (rest of the component remains unchanged) ... */}
          </div>
        </div>
      </div>
    </>
  )
}

