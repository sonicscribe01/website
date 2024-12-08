export default function Features() {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Powerful Features for Professional Transcription
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <div className="text-[#FF4500] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Transcription</h3>
              <p className="text-gray-400">Get instant transcriptions as you speak, perfect for live meetings and interviews.</p>
            </div>
  
            {/* Feature 2 */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <div className="text-[#FF4500] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-language Support</h3>
              <p className="text-gray-400">Transcribe and translate content in over 30 languages with high accuracy.</p>
            </div>
  
            {/* Feature 3 */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg">
              <div className="text-[#FF4500] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-400">Bank-level encryption and compliance with major security standards.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }