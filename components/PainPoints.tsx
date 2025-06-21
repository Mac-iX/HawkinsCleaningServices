import Image from "next/image"

export default function PainPoints() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hawkins%20Cleaning%201-c6pZ7L9L5ZA8spCLNZ6lfwfksxzr95.png"
            alt="Commercial cleaning pain points solved by Hawkins Cleaning Services - reliable janitorial company in Eastern North Carolina serving office buildings and construction sites"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-lg mb-8"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Your Pain Points, Our Promise</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Tired of unreliable cleaners? We built our business to solve the exact problems you face.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-red-700">The Pain: Inconsistent Quality</h3>
            <p className="text-gray-600 mb-4">
              Services that miss spots, overlook details, and reflect poorly on your business or project.
            </p>
            <h4 className="font-bold text-lg text-teal-700 swoosh-icon">Our Promise: Meticulous Protocols</h4>
            <p className="text-gray-600">
              We use detailed checklists and rigorous quality assurance on every job to ensure flawless results, every
              single time.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-red-700">The Pain: Poor Communication</h3>
            <p className="text-gray-600 mb-4">
              Unanswered calls and emails, leaving you feeling ignored and your needs unmet.
            </p>
            <h4 className="font-bold text-lg text-teal-700 swoosh-icon">Our Promise: Proactive Partnership</h4>
            <p className="text-gray-600">
              You'll have a dedicated point of contact, providing clear updates and swift responses. We work with you,
              not just for you.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-red-700">The Pain: Unreliability & Delays</h3>
            <p className="text-gray-600 mb-4">
              Crews that show up late—or not at all—disrupting your operations and project timelines.
            </p>
            <h4 className="font-bold text-lg text-teal-700 swoosh-icon">Our Promise: On-Time Guarantee</h4>
            <p className="text-gray-600">
              We respect your schedule. Our professional, uniformed team is committed to punctuality and reliability,
              ensuring your project stays on track.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl mb-2 text-red-700">The Pain: Harsh Chemical Odors</h3>
            <p className="text-gray-600 mb-4">
              Overpowering smells that create an unpleasant environment for your employees and clients.
            </p>
            <h4 className="font-bold text-lg text-teal-700 swoosh-icon">Our Promise: Health-First Cleaning</h4>
            <p className="text-gray-600">
              We prioritize your team's well-being with eco-friendly, non-toxic products that clean effectively without
              harsh fumes.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hawkins%20Cleaning%202-T0x6XwC3U76o0a6gtSDZqpo9Jj5XT2.png"
              alt="Transparent pricing for commercial cleaning services in Wilmington NC - no hidden fees from Hawkins Cleaning Services for office and retail cleaning"
              width={400}
              height={300}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl mb-2 text-red-700">The Pain: Hidden Fees & Confusing Costs</h3>
            <p className="text-gray-600 mb-4">Vague quotes that lead to surprise charges and budget overruns.</p>
            <h4 className="font-bold text-lg text-teal-700 swoosh-icon">Our Promise: Transparent Pricing</h4>
            <p className="text-gray-600">
              We provide clear, itemized quotes with no hidden fees. You'll know exactly what to expect, ensuring
              complete cost predictability.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hawkins%20Claening%203-viS2JamGeFMKttEXi5s13neYTqbWoI.png"
              alt="Fully insured commercial cleaning company in Eastern NC - property damage protection for New Hanover Brunswick Pender County businesses"
              width={400}
              height={300}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl mb-2 text-red-700">The Pain: Property Damage Worries</h3>
            <p className="text-gray-600 mb-4">
              Concerns about inexperienced cleaners damaging new fixtures or sensitive surfaces.
            </p>
            <h4 className="font-bold text-lg text-teal-700 swoosh-icon">Our Promise: Fully Insured</h4>
            <p className="text-gray-600">
              Your peace of mind is paramount. We are fully licensed and insured to protect your property and our team.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hawkins%20Cleaning%204-29Sfq5S3SAz7CAH1Ei2MWMrY17iJc3.png"
            alt="Get the Hawkins Sparkle Touch - professional cleaning services for commercial buildings and new construction in Wilmington NC, New Hanover, Brunswick, and Pender Counties"
            width={600}
            height={400}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
