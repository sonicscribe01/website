import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Podcast Host',
    content: 'SonicScribe has revolutionized my workflow. The accuracy is incredible, and it saves me hours of work!',
    avatar: '/placeholder.svg?height=80&width=80',
  },
  {
    name: 'Sarah Lee',
    role: 'Journalist',
    content: 'As a journalist, accuracy is crucial. SonicScribe delivers perfect transcripts every time.',
    avatar: '/placeholder.svg?height=80&width=80',
  },
  {
    name: 'Mike Brown',
    role: 'Student',
    content: 'SonicScribe makes it easy to transcribe my lectures. It\'s a game-changer for my studies!',
    avatar: '/placeholder.svg?height=80&width=80',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0A0A0A] via-[#111111] to-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#1A1A1A] border-zinc-800/50 hover:border-[#FF4500] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

