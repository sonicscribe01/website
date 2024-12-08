import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SonicScribe | AI-Powered Audio Transcription',
    template: '%s | SonicScribe'
  },
  description: 'SonicScribe offers AI-powered audio transcription for professionals. Convert speech to text with unparalleled accuracy and speed.',
  keywords: ['audio transcription', 'AI', 'speech to text', 'SonicScribe'],
  authors: [{ name: 'SonicScribe Team' }],
  creator: 'SonicScribe',
  publisher: 'SonicScribe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sonicscribe.ai',
    siteName: 'SonicScribe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SonicScribe - AI-Powered Audio Transcription'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sonicscribe',
    creator: '@sonicscribe'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

