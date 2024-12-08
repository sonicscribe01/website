'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export default function Hero() {
  const [isRecording, setIsRecording] = useState(false)

  return (
    <section className="flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your Audio into Text with{' '}
          <span className="text-[#FF4500]">AI</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          SonicScribe.ai uses cutting-edge AI technology to transcribe your 
          audio files with unparalleled accuracy and speed.
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto bg-[#1A1A1A] rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Try SonicScribe Demo
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Experience real-time AI transcription in action
        </p>
        
        <div className="bg-[#0A0A0A] rounded-lg p-16 mb-6 flex items-center justify-center min-h-[200px]">
          <button 
            onClick={() => setIsRecording(!isRecording)}
            className="bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors duration-300 rounded-full p-8 w-32 h-32 flex items-center justify-center"
            aria-label={isRecording ? "Stop recording" : "Start recording"}
          >
            <div className="text-[#FF4500] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M8 7a4 4 0 1 1 8 0v10a4 4 0 1 1-8 0V7z" />
                <path d="M6 8a6 6 0 1 1 12 0v8a6 6 0 1 1-12 0V8z" />
              </svg>
            </div>
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-[#FF4500] text-sm text-center">
            Select Translation Language (Optional)
          </p>
          <Select>
            <SelectTrigger className="w-full bg-[#1E1E1E] text-gray-300 border border-gray-700 rounded-md p-3 hover:border-[#FF4500] focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500]">
              <SelectValue placeholder="Select language for translation" />
            </SelectTrigger>
            <SelectContent className="bg-[#1E1E1E] border-gray-700">
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  )
}