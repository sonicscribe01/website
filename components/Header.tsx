'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mic } from 'lucide-react'
import { useState, useEffect } from 'react'
import { EarlyAccessModal } from './EarlyAccessModal'

const navLinks = [
  { href: "/#features", label: "Features", id: "features" },
  { href: "/#how-it-works", label: "How It Works", id: "how-it-works" },
  { href: "/#pricing", label: "Pricing", id: "pricing" },
  { href: "/#contact-section", label: "Contact", id: "contact-section" }
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'how-it-works', 'pricing', 'contact-section']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('/#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-2xl font-bold hover:opacity-80 transition-opacity duration-300" aria-label="SonicScribe Home">
          <Mic className="w-8 h-8 mr-2 text-white" strokeWidth={1.5} aria-hidden="true" />
          <span>
            <span className="text-white">SonicScribe</span>
            <span className="text-[#FF4500]">.ai</span>
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
          {navLinks.map(({ href, label, id }) => (
            <Link
              key={href}
              href={href}
              className={`text-gray-300 hover:text-[#FF4500] transition-colors duration-300 relative group ${
                activeSection === id ? 'text-[#FF4500]' : ''
              }`}
              onClick={(e) => scrollToSection(e, href)}
            >
              {label}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#FF4500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          ))}
        </nav>
        <div className="flex">
          <Button 
            variant="default"
            className="bg-[#FF4500] hover:bg-[#FF6347] text-white" 
            onClick={() => setIsModalOpen(true)}
          >
            Request Early Access
          </Button>
        </div>
      </div>
      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}

