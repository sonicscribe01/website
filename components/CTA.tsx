'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

<style jsx>{`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  .benefit-card {
    transition: transform 0.3s ease-in-out;
  }
  .benefit-card:hover {
    transform: translateY(-5px);
  }
`}</style>

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section className="py-20 bg-gradient-to-r from-[#1A1A1A] to-[#111111] text-white animate-fade-in">
      <div className="container mx-auto px-4 text-center">
        <div 
          ref={sectionRef} 
          className={`
            transition-all duration-300 
            ${isVisible ? 'opacity-100' : 'opacity-0'}
            hover:bg-[#2A2A2A] hover:shadow-lg rounded-lg p-6
          `}
        >
          <h2 
            className="text-4xl font-bold mb-6 text-[#FF4500] transition-colors duration-300 hover:text-[#FF6347] cursor-pointer"
            onClick={() => alert('SonicScribe benefits a wide range of professionals!')}
          >
            Who Benefits from SonicScribe?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Our AI-powered audio transcription service is designed to empower professionals across various fields:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" role="list">
          <div className="bg-[#222222] p-6 rounded-lg benefit-card" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="musician-benefit">Musicians</h3>
            <p className="text-gray-300" aria-labelledby="musician-benefit">Easily transcribe lyrics, melodies, and musical ideas from audio recordings.</p>
          </div>
          <div className="bg-[#222222] p-6 rounded-lg benefit-card" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="corporate-benefit">Corporate Professionals</h3>
            <p className="text-gray-300" aria-labelledby="corporate-benefit">Convert meetings, interviews, and conference calls into searchable text.</p>
          </div>
          <div className="bg-[#222222] p-6 rounded-lg benefit-card" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="academic-benefit">Academics</h3>
            <p className="text-gray-300" aria-labelledby="academic-benefit">Transform lectures, seminars, and research interviews into accurate transcripts.</p>
          </div>
          <div className="bg-[#222222] p-6 rounded-lg benefit-card" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="student-benefit">Students</h3>
            <p className="text-gray-300" aria-labelledby="student-benefit">Convert audio notes and lectures into text for easier studying and review.</p>
          </div>
          <div className="bg-[#222222] p-6 rounded-lg benefit-card" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="journalist-benefit">Journalists</h3>
            <p className="text-gray-300" aria-labelledby="journalist-benefit">Quickly transcribe interviews and field recordings for efficient reporting.</p>
          </div>
          <div className="bg-[#222222] p-6 rounded-lg benefit-card" role="listitem">
            <h3 className="text-2xl font-semibold mb-3 text-[#FF4500]" id="content-creator-benefit">Content Creators</h3>
            <p className="text-gray-300" aria-labelledby="content-creator-benefit">Turn podcasts, videos, and voice memos into text for content repurposing.</p>
          </div>
        </div>
        <div className="mt-12">
          <Button size="lg" className="bg-[#FF4500] hover:bg-[#FF6347] text-white px-8 py-3 text-lg" asChild aria-label="Start your free trial of SonicScribe">
            <Link href="/free-trial">Start Your Free Trial</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

