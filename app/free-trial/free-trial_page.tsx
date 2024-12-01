import { Metadata } from 'next'
import Seo from '@/components/Seo'
import FreeTrialForm from '@/components/FreeTrialForm'
import { CheckCircle, Zap, Clock, Globe, Brain, Lock } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: 'Start Your Free Trial | SonicScribe',
  description: 'Sign up for a free trial of SonicScribe and experience AI-powered audio transcription.',
}

export default function FreeTrialPage() {
  const trialFeatures = [
    { icon: <Clock className="w-5 h-5" />, text: "30 minutes of free transcription" },
    { icon: <Zap className="w-5 h-5" />, text: "Access to all premium features" },
    { icon: <Globe className="w-5 h-5" />, text: "Multi-language support" },
    { icon: <Brain className="w-5 h-5" />, text: "AI-powered summary generation" },
    { icon: <Lock className="w-5 h-5" />, text: "No credit card required" }
  ]

  const benefits = [
    { title: "Save Time", description: "Transcribe hours of audio in minutes" },
    { title: "Increase Productivity", description: "Focus on analysis instead of manual transcription" },
    { title: "Improve Accuracy", description: "AI-powered transcription with up to 99% accuracy" },
    { title: "Seamless Integration", description: "Works with your favorite tools and platforms" }
  ]

  const faqs = [
    { question: "How accurate is SonicScribe?", answer: "SonicScribe uses state-of-the-art AI to achieve up to 99% accuracy in most cases." },
    { question: "What happens after the trial ends?", answer: "You can choose to subscribe to a paid plan or your account will be limited to basic features." },
    { question: "Can I cancel anytime?", answer: "Yes, you can cancel your trial or subscription at any time with no questions asked." },
    { question: "What file formats are supported?", answer: "SonicScribe supports a wide range of audio and video formats, including MP3, WAV, MP4, and more." }
  ]

  return (
    <>
      <Seo 
        title="Start Your Free SonicScribe Trial"
        description="Experience the power of AI-driven audio transcription with SonicScribe's 14-day free trial. No credit card required."
        canonical="https://sonicscribe.ai/free-trial"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[#FF4500] text-transparent bg-clip-text">Start Your Free Trial Today</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">Experience the Power of AI Transcription</h2>
              <p className="text-gray-300 mb-8">
                SonicScribe uses cutting-edge AI technology to transform your audio into accurate, editable text. Try it free for 14 days and see how it can revolutionize your workflow.
              </p>
              
              <h3 className="text-2xl font-semibold text-[#FF4500] mb-4">What's Included:</h3>
              <ul className="space-y-4 mb-8">
                {trialFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-white">
                    <span className="text-[#FF4500] mr-2">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#111111] p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-[#FF4500] mb-4">Why Choose SonicScribe?</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-[#FF4500] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white">{benefit.title}:</span>
                        <span className="text-gray-300 ml-1">{benefit.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#111111] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#FF4500] mb-4">What Our Users Say</h3>
                <blockquote className="text-gray-300 italic">
                  "SonicScribe has completely transformed how I work with audio content. The accuracy is impressive, and the time I save is invaluable."
                </blockquote>
                <p className="text-white mt-2">- Sarah J., Podcast Producer</p>
              </div>
            </div>

            <div>
              <div className="bg-[#111111] p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-3xl font-bold text-[#FF4500] mb-6">Sign Up for Your Free Trial</h2>
                <p className="text-gray-300 mb-6">Experience SonicScribe's powerful features for 14 days, absolutely free. No credit card required.</p>
                <FreeTrialForm />
              </div>

              <div className="bg-[#111111] p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-semibold text-[#FF4500] mb-4">What Happens Next?</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>You'll receive a confirmation email with your account details.</li>
                  <li>Click the activation link in the email to verify your account.</li>
                  <li>Log in to your new SonicScribe account.</li>
                  <li>You'll have immediate access to all premium features for 14 days.</li>
                  <li>Our team will reach out with helpful resources to get you started.</li>
                </ol>
                <p className="mt-4 text-gray-400">
                  Remember, no credit card is required for the trial. You can cancel anytime during the 14-day period with no obligations.
                </p>
              </div>

              <div className="bg-[#111111] p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-[#FF4500] mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-white">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              By signing up, you agree to our <a href="/terms" className="text-[#FF4500] hover:underline">Terms of Service</a> and <a href="/privacy" className="text-[#FF4500] hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

