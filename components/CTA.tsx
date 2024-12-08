'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import EarlyAccessModal from './EarlyAccessModal'

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-[#1A1A1A] to-[#111111] text-white animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#111111] opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60 animate-pulse" />
      </div>
      <div className="backdrop-blur-sm bg-black/40 rounded-lg p-10 shadow-lg relative z-10 transition-all duration-300 hover:bg-black/50 hover:shadow-2xl mx-auto max-w-7xl">
        <div 
          ref={sectionRef} 
          className={`
            transition-all duration-500 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            rounded-lg py-8 px-4 sm:px-6 lg:px-8
            flex flex-col items-center text-center
          `}
        >
          <h2 
            className="text-4xl font-bold mb-6 text-[#FF4500] transition-colors duration-300 cursor-pointer animate-text-glow"
            onClick={() => alert('SonicScribe benefits a wide range of professionals!')}
          >
            Who Benefits from SonicScribe?
          </h2>
          <p className="text-xl mb-4 text-gray-300 max-w-2xl mx-auto">
            Our AI-powered audio transcription service is designed to empower professionals across various fields:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-6" role="list">
          <div className="bg-[#222222] p-6 rounded-lg transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="musician-benefit">Musicians</h3>
            <p className="text-gray-300" aria-labelledby="musician-benefit">Easily transcribe lyrics, melodies, and musical ideas from audio recordings.</p>
          </div>
          <div className="bg-[#222222] p-6 rounded-lg transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="corporate-benefit">Corporate Professionals</h3>
            <p className="text-gray-300" aria-labelledby="corporate-benefit">Convert meetings, interviews, and conference calls into searchable text.</p>
          </div>
          <div className="bg-[#222222] p-6 rounded-lg transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="academic-benefit">Academics</h3>
            <p className="text-gray-300" aria-labelledby="academic-benefit">Transform lectures, seminars, and research interviews into accurate transcripts.</p>
          </div>
          <div className="bg-[#222222] p-6 rounded-lg transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="student-benefit">Students</h3>
            <p className="text-gray-300" aria-labelledby="student-benefit">Convert audio notes and lectures into text for easier studying and review.</p>
          </div>
          <div className="bg-[#222222] p-6 rounded-lg transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="journalist-benefit">Journalists</h3>
            <p className="text-gray-300" aria-labelledby="journalist-benefit">Quickly transcribe interviews and field recordings for efficient reporting.</p>
          </div>
          <div className="bg-[#222222] p-6 rounded-lg transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="content-creator-benefit">Content Creators</h3>
            <p className="text-gray-300" aria-labelledby="content-creator-benefit">Turn podcasts, videos, and voice memos into text for content repurposing.</p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button 
            size="lg" 
            className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-3 text-lg" 
            onClick={() => setIsModalOpen(true)} 
            aria-label="Request access to SonicScribe"
          >
            Request Access
          </Button>
        </div>
      </div>
      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

