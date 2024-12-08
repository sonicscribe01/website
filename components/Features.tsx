'use client'

import { Brain, Layers, NetworkIcon as Network2 } from 'lucide-react'
import { Check } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'AI-Powered Transcription',
    description: 'Our advanced AI technology converts speech to text with unparalleled accuracy and speed.',
    benefits: [
      'State-of-the-art speech recognition',
      'Multi-language support',
      'Context-aware processing',
      'Automatic punctuation and formatting'
    ]
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Intelligent Editing Tools',
    description: 'Edit and refine your transcripts with our suite of smart editing features.',
    benefits: [
      'Speaker identification',
      'Time-stamped text',
      'Easy text highlighting and annotation',
      'Customizable editing interface'
    ]
  },
  {
    icon: <Network2 className="h-6 w-6" />,
    title: 'Seamless Integration',
    description: 'Integrate SonicScribe into your existing workflow with our flexible API and export options.',
    benefits: [
      'Multiple export formats (TXT, SRT, VTT)',
      'API access for developers',
      'Integration with popular productivity tools',
      'Secure cloud storage and sharing'
    ]
  }
]

const IconContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-8 left-8 p-3 rounded-full bg-[#1A1A1A] border border-zinc-800/50 group-hover:border-[#FF4500] transition-colors duration-300">
      <div className="text-gray-400 group-hover:text-[#FF4500] transition-colors duration-300">
        {children}
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#0A0A0A] via-[#111111] to-[#1A1A1A]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative group bg-zinc-800 border-zinc-800/50 hover:border-[#FF4500] transition-all duration-300">
              <IconContainer>
                {feature.icon}
              </IconContainer>
              <CardHeader className="pt-24">
                <CardTitle className="text-2xl font-bold text-white mb-3">{feature.title}</CardTitle>
                <CardDescription className="text-gray-400 text-base group-hover:text-[#FF4500] transition-colors duration-300">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-400 text-sm">
                      <Check className="h-4 w-4 mr-2 text-gray-400 group-hover:text-[#FF4500] transition-colors duration-300" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

