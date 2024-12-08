export default function HowItWorks() {
    return (
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            How SonicScribe Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-[#FF4500] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Audio</h3>
                <p className="text-gray-400">Upload your audio file or start recording directly in your browser.</p>
              </div>
  
              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-[#FF4500] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
                <p className="text-gray-400">Our AI analyzes and transcribes your audio with high accuracy.</p>
              </div>
  
              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-[#FF4500] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Results</h3>
                <p className="text-gray-400">Download your transcription in multiple formats or edit online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }