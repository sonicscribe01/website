import Head from 'next/head'

interface SeoProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export default function Seo({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  noindex = false 
}: SeoProps) {
  const siteName = 'SonicScribe'
  const fullTitle = `${title} | ${siteName}`
  const defaultOgImage = 'https://sonicscribe.ai/og-image.jpg' // Update this with your actual default OG image URL

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {canonical && <link rel="canonical" href={canonical} />}

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="application-name" content={siteName} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteName,
          "url": "https://sonicscribe.ai",
          "description": "AI-powered audio transcription service"
        })}
      </script>
    </Head>
  )
}

