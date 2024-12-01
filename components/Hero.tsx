'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mic } from 'lucide-react'

export default function Hero() {
  const [isRecording, setIsRecording] = useState(false)
  const [transcription, setTranscription] = useState('')

  const toggleRecording = () => {
    setIsRecording((prev) => !prev);
    if (!isRecording) {
      setTranscription('')
      simulateTranscription()
    }
  }

  const simulateTranscription = () => {
    const fullText = "Welcome to SonicScribe, the cutting-edge AI-powered audio transcription service."
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTranscription(prev => prev + fullText[currentIndex])
        currentIndex++
      } else {
        clearInterval(interval)
        setIsRecording(false)
      }
    }, 50)
  }

  return (
    <section className="py-20 px-4 text-center text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
        Transform Your Audio into Text with <span className="text-[#FF4500]">AI</span>
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
        SonicScribe.ai uses cutting-edge AI technology to transcribe your audio files with unparalleled accuracy and speed.
      </p>
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#1A1A1A] to-[#111111] p-8 rounded-lg shadow-2xl transition-all duration-300 ease-in-out hover:shadow-3xl border border-gray-800">
        <h2 className="text-3xl font-bold mb-2 text-white">Try SonicScribe Demo</h2>
        <p className="text-gray-400 mb-6">Experience real-time AI transcription in action</p>
        <div className="bg-[#0A0A0A] p-6 rounded-lg mb-6">
          <div className="flex flex-col items-center">
            <Button
              onClick={toggleRecording}
              className={`w-24 h-24 rounded-full flex items-center justify-center p-0 transition-all duration-300 ${
                isRecording
                  ? 'animate-pulse bg-gradient-to-br from-[#FF4500] to-[#FF6347]'
                  : 'bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] hover:from-[#2D2D2D] hover:to-[#3D3D3D]'
              }`}
              aria-label={isRecording ? "Stop recording" : "Start recording"}
              aria-pressed={isRecording}
            >
              <Mic className={`w-12 h-12 transition-all duration-300 ${isRecording ? 'text-white' : 'text-[#FF4500]'}`} aria-hidden="true" />
            </Button>
            <p className="mt-4 text-sm text-gray-400" aria-live="polite">
              {isRecording ? 'Click to stop recording' : 'Click to start recording'}
            </p>
          </div>
        </div>
        {transcription && (
          <div className="mt-6 text-left">
            <h3 className="text-xl font-semibold mb-2">Real-time Transcription</h3>
            <div className="bg-[#1A1A1A] p-4 rounded-md overflow-hidden">
              <p
                className="text-gray-300 font-mono text-sm leading-relaxed"
                style={{
                  maxHeight: '200px',
                  overflowY: 'auto',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                {transcription}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

