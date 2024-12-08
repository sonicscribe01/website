import { Metadata } from 'next'

interface SeoProps {
  title?: string
  description?: string
  canonical?: string
}

export function generateMetadata({ 
  title = 'SonicScribe', 
  description = 'AI-powered audio transcription and translate for professionals',
  canonical 
}: SeoProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: 'SonicScribe',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    ...(canonical ? { alternates: { canonical } } : {}),
  }
}

export default function Seo({ title, description, canonical }: SeoProps) {
  return null // Next 13 handles SEO through metadata
}

