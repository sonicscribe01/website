import { Button } from './ui/button'

export default function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-12">
            Have questions? Our team is here to help.
          </p>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#1A1A1A] rounded-md border border-gray-700 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500]"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full p-3 bg-[#1A1A1A] rounded-md border border-gray-700 focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500]"
            />
            <Button className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white px-8">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}