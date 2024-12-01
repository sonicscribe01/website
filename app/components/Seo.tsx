'use client'

interface SeoProps {
  title?: string
  description?: string
}

export default function Seo({ 
  title = 'SonicScribe', 
  description = 'AI-powered audio transcription and translate for professionals'
}: SeoProps) {
  return null // Next 13 handles SEO through metadata
}

