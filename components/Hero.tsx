'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Mic, Download, Share2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Add type for supported languages
type SupportedLanguage = 'es' | 'fr';

// Add type for translations
interface Translations {
  es: string;
  fr: string;
}

// Add type for transcription translations
interface TranscriptionTranslations {
  es: string;
  fr: string;
  [key: string]: string;  // Add index signature for transcription translations
}

// Type guard function
function isValidLanguage(lang: string): lang is SupportedLanguage {
  return lang === 'es' || lang === 'fr';
}

export default function Hero() {
  const [isRecording, setIsRecording] = useState(false)
  const [transcription, setTranscription] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [summary, setSummary] = useState('')
  const [keyPoints, setKeyPoints] = useState<string[]>([])
  const [translatedText, setTranslatedText] = useState('')
  const [audioUrl, setAudioUrl] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage | ''>('')
  const [translatedTranscription, setTranslatedTranscription] = useState('')

  // Move translations outside the effect
  const translations: Translations = {
    es: "Bienvenido a SonicScribe, el servicio de transcripción de audio impulsado por IA de última generación.",
    fr: "Bienvenue sur SonicScribe, le service de transcription audio de pointe alimenté par l'IA."
  }

  const defaultText = "Welcome to SonicScribe, the cutting-edge AI-powered audio transcription service."

  // Safe translation getter
  const getTranslation = (lang: SupportedLanguage | '', trans: Translations | TranscriptionTranslations) => {
    if (lang === 'es' || lang === 'fr') {
      return trans[lang]
    }
    return defaultText
  }

  const toggleRecording = () => {
    setIsRecording((prev) => !prev)
    if (!isRecording) {
      setTranscription('')
      simulateTranscription()
    }
  }

  const simulateTranscription = () => {
    const fullText = "Welcome to SonicScribe, the cutting-edge AI-powered audio transcription service. Our advanced algorithms ensure high accuracy and fast results, making it perfect for professionals in various fields such as journalism, content creation, and academic research."
    const transcriptionTranslations: TranscriptionTranslations = {
      es: "Bienvenido a SonicScribe, el servicio de transcripción de audio impulsado por IA de vanguardia. Nuestros algoritmos avanzados garantizan alta precisión y resultados rápidos, haciéndolo perfecto para profesionales en diversos campos como periodismo, creación de contenido e investigación académica.",
      fr: "Bienvenue sur SonicScribe, le service de transcription audio de pointe alimenté par l'IA. Nos algorithmes avancés assurent une haute précision et des résultats rapides, ce qui le rend parfait pour les professionnels dans divers domaines tels que le journalisme, la création de contenu et la recherche académique."
    }
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTranscription(prev => prev + fullText[currentIndex])
        if (selectedLanguage && selectedLanguage in transcriptionTranslations) {
          const translatedText = transcriptionTranslations[selectedLanguage]
          setTranslatedTranscription(prev => {
            return prev + (translatedText[currentIndex] || ' ')
          })
        }
        currentIndex++
      } else {
        clearInterval(interval)
        setIsRecording(false)
        generateSummary()
        generateKeyPoints()
        generateAudioUrl()
        if (selectedLanguage) {
          translateText()
        }
      }
    }, 30)
  }

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  const generateSummary = () => {
    setSummary("This is a simulated summary of the transcribed text, highlighting the main points discussed.")
  }

  const generateKeyPoints = () => {
    setKeyPoints([
      "Key point 1: AI-powered transcription",
      "Key point 2: High accuracy and speed",
      "Key point 3: Useful for various professionals"
    ])
  }

  const translateText = () => {
    setTranslatedText(getTranslation(selectedLanguage, translations))
  }

  const generateAudioUrl = () => {
    // Simulating audio generation
    setAudioUrl('https://example.com/simulated-audio.mp3')
  }

  const downloadAudio = () => {
    // In a real implementation, this would trigger the download of the actual audio file
    window.open(audioUrl, '_blank')
  }

  const downloadSummary = () => {
    const element = document.createElement('a')
    const file = new Blob([summary], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = 'summary.txt'
    document.body.appendChild(element)
    element.click()
  }

  const downloadKeyPoints = () => {
    const element = document.createElement('a')
    const file = new Blob([keyPoints.join('\n')], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = 'key-points.txt'
    document.body.appendChild(element)
    element.click()
  }

  const shareTranscription = () => {
    // In a real implementation, this would open a share dialog or copy to clipboard
    alert('Sharing functionality would be implemented here')
  }

  useEffect(() => {
    setTranslatedText(getTranslation(selectedLanguage, translations))
  }, [selectedLanguage])

  return (
    <section className="py-20 px-4 text-center text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
        Transform Your Audio into Text with <span className="text-[#FF4500]">AI</span>
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
        SonicScribe.ai uses cutting-edge AI technology to transcribe your audio files with unparalleled accuracy and speed.
      </p>
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] p-8 rounded-lg shadow-2xl transition-all duration-300 ease-in-out hover:shadow-3xl hover:from-[#3A3A3A] hover:to-[#2A2A2A] border border-gray-700">
        <h2 className="text-3xl font-bold mb-2 text-white">Try SonicScribe Demo</h2>
        <p className="text-gray-200 mb-6">Experience real-time AI transcription in action</p>
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
        <div className="mt-6 mb-4 bg-[#1A1A1A] p-4 rounded-lg border border-[#FF4500]/30">
          <label htmlFor="language-select" className="block text-sm font-medium text-[#FF4500] mb-2">
            Select Translation Language (Optional)
          </label>
          <Select 
            onValueChange={(value: string) => setSelectedLanguage(value as SupportedLanguage || '')} 
            value={selectedLanguage}
          >
            <SelectTrigger className="w-full bg-[#2A2A2A] border-[#FF4500]/50 text-white">
              <SelectValue placeholder="Select language for translation" />
            </SelectTrigger>
            <SelectContent className="bg-[#2A2A2A] border-[#FF4500]/50">
              <SelectItem value="es" className="text-white hover:bg-[#FF4500]/20">Spanish</SelectItem>
              <SelectItem value="fr" className="text-white hover:bg-[#FF4500]/20">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {transcription && (
          <div className="mt-6 text-left">
            <h3 className="text-xl font-semibold mb-2">Real-time Transcription</h3>
            <div className="bg-[#1A1A1A] p-4 rounded-md overflow-hidden border border-[#FF4500]/30 mb-4">
              <p
                className="text-gray-300 font-mono text-sm leading-relaxed"
                style={{
                  maxHeight: '150px',
                  overflowY: 'auto',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                {transcription}
                {isRecording && showCursor && <span className="animate-pulse">|</span>}
              </p>
            </div>
            {selectedLanguage && (
              <>
                <h3 className="text-xl font-semibold mb-2">Real-time Translation</h3>
                <div className="bg-[#1A1A1A] p-4 rounded-md overflow-hidden border border-[#FF4500]/30">
                  <p
                    className="text-gray-300 font-mono text-sm leading-relaxed"
                    style={{
                      maxHeight: '150px',
                      overflowY: 'auto',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word'
                    }}
                  >
                    {translatedTranscription}
                    {isRecording && showCursor && <span className="animate-pulse">|</span>}
                  </p>
                </div>
              </>
            )}
            <div className="mt-2 text-right text-sm text-gray-400">
              Word count: {transcription.split(/\s+/).filter(Boolean).length}
            </div>
            <div className="mt-4 space-y-4">
              {summary && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Summary</h4>
                  <p className="text-gray-300">{summary}</p>
                </div>
              )}
              {keyPoints.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Key Points</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
              {translatedText && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Translation (Spanish)</h4>
                  <p className="text-gray-300">{translatedText}</p>
                </div>
              )}
            </div>
            {!isRecording && transcription && (
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold mb-2">Actions</h3>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={downloadAudio} className="flex items-center gap-2 bg-[#FF4500] hover:bg-[#FF6347]">
                    <Download size={16} />
                    Download Audio
                  </Button>
                  <Button onClick={downloadSummary} className="flex items-center gap-2 bg-[#FF4500] hover:bg-[#FF6347]">
                    <Download size={16} />
                    Download Summary
                  </Button>
                  <Button onClick={downloadKeyPoints} className="flex items-center gap-2 bg-[#FF4500] hover:bg-[#FF6347]">
                    <Download size={16} />
                    Download Key Points
                  </Button>
                  <Button onClick={shareTranscription} className="flex items-center gap-2 bg-[#FF4500] hover:bg-[#FF6347]">
                    <Share2 size={16} />
                    Share Transcription
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

