import { Metadata } from 'next'
import { generateMetadata } from '../components/Seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = generateMetadata({
  title: "SonicScribe - Legal Information",
  description: "Terms of Service and Privacy Policy for SonicScribe's AI-powered audio transcription service."
})

export default function Legal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
      <Header />
      <main className="container mx-auto px-4 py-12 text-white">
        <h1 className="text-3xl font-bold mb-8">Legal Information</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
          <p className="mb-4">
            By using SonicScribe, you agree to these terms. We reserve the right to change these terms at any time.
            Please check this page regularly for updates.
          </p>
          {/* Add more terms of service content here */}
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to us. This policy outlines what information we collect, how we use it,
            and how we protect your data.
          </p>
          {/* Add more privacy policy content here */}
        </section>
      </main>
      <Footer />
    </div>
  )
}

