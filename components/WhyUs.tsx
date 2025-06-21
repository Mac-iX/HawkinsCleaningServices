import Image from "next/image"

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">The Hawkins Difference</h2>
          <p className="text-gray-600 mt-2">
            We're not just another cleaning service. We're your partners in presentation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] rounded-lg shadow-xl overflow-hidden bg-white flex items-center justify-center p-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20white%20bg-Q8qKH0UdcVLGukFDhDzq2YaCnbznAi.png"
              alt="Hawkins Cleaning Services - Professional commercial cleaning company serving Wilmington NC, New Hanover County, Brunswick County, and Pender County with expert janitorial services"
              width={280}
              height={200}
              className="w-auto h-auto max-h-[200px] max-w-[280px] object-contain"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-2">Expertise You Can Trust</h3>
              <p className="text-gray-600">
                Led by Anthony Hawkins, our team brings years of hands-on property management and new construction
                cleaning experience. We understand the standards you require because we've lived them.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-2">A Family's Commitment</h3>
              <p className="text-gray-600">
                As a local, family-owned business, our reputation is on the line with every job. We take personal pride
                in our work and are dedicated to building lasting relationships based on trust and exceptional results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-700 mb-2">Our Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                We stand behind our work, unequivocally. If you're not completely satisfied with every detail, we will
                make it right. Your peace of mind is our ultimate goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
