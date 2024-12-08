import { Metadata } from 'next'

interface SeoProps {
  title: string
  description: string
  canonical?: string
}

export function generateMetadata({ title, description, canonical }: SeoProps): Metadata {
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
  return null; // This component doesn't render anything directly
}

