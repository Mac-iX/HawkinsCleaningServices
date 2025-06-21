"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Mail } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const [activeTab, setActiveTab] = useState("commercial")

  return (
    <section id="services" className="py-16">
      {/* Strategic Banner Placement */}
      <div className="text-center py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blue%20Gradient%20Logo%20Banner.png-jof0QHTVxc3fDrbWdhE7PwmqQYDUvz.jpeg"
            alt="Hawkins Cleaning Services - Premier commercial cleaning and janitorial services for Wilmington NC businesses, offices, retail spaces, and new construction projects in Eastern North Carolina"
            width={1200}
            height={400}
            className="mx-auto rounded-lg shadow-lg w-full max-w-4xl"
          />
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 mt-2">Tailored solutions for your specific needs.</p>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("commercial")}
            className={`service-tab text-lg font-semibold py-3 px-6 border-b-2 transition duration-300 ${
              activeTab === "commercial" ? "tab-active" : "tab-inactive"
            }`}
          >
            🏢 Commercial
          </button>
          <button
            onClick={() => setActiveTab("construction")}
            className={`service-tab text-lg font-semibold py-3 px-6 border-b-2 transition duration-300 ${
              activeTab === "construction" ? "tab-active" : "tab-inactive"
            }`}
          >
            👷 New Construction
          </button>
        </div>

        <div id="service-content">
          <div className={activeTab === "commercial" ? "" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-teal-700">Standard Janitorial</h3>
                <p className="text-gray-600 mb-4">
                  Reliable, scheduled cleaning to maintain a professional image and a healthy work environment. Perfect
                  for offices, retail, and more.
                </p>
                <div className="flex justify-end">
                  <Button asChild variant="outline" size="sm" className="text-teal-700 border-teal-700">
                    <a
                      href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-teal-700">Deep Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Intensive cleaning targeting accumulated grime, high-touch surfaces, and overlooked areas for a truly
                  refreshed space.
                </p>
                <div className="flex justify-end">
                  <Button asChild variant="outline" size="sm" className="text-teal-700 border-teal-700">
                    <a
                      href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-teal-700">Disinfection Services</h3>
                <p className="text-gray-600 mb-4">
                  Advanced, eco-friendly sanitization to mitigate germs, promoting a healthier atmosphere for employees
                  and customers.
                </p>
                <div className="flex justify-end">
                  <Button asChild variant="outline" size="sm" className="text-teal-700 border-teal-700">
                    <a
                      href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-teal-700">Floor & Carpet Care</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for hardwood, tile, grout, and carpets to extend asset life and maintain a
                  pristine appearance.
                </p>
                <div className="flex justify-end">
                  <Button asChild variant="outline" size="sm" className="text-teal-700 border-teal-700">
                    <a
                      href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-teal-700">Window Washing</h3>
                <p className="text-gray-600 mb-4">
                  Streak-free interior and exterior window cleaning that enhances your property's overall aesthetic and
                  natural light.
                </p>
                <div className="flex justify-end">
                  <Button asChild variant="outline" size="sm" className="text-teal-700 border-teal-700">
                    <a
                      href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-teal-700">Customized Plans</h3>
                <p className="text-gray-600 mb-4">
                  We'll partner with you to create a bespoke cleaning plan that perfectly fits your facility's unique
                  needs and budget.
                </p>
                <div className="flex justify-end">
                  <Button asChild variant="outline" size="sm" className="text-teal-700 border-teal-700">
                    <a
                      href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className={activeTab === "construction" ? "" : "hidden"}>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Seamless Integration With Your Project Timeline</h3>
              <p className="text-gray-600 mt-2">
                Our phased approach ensures the right clean at the right time, preventing delays and delivering a
                flawless final product that accelerates sales and enhances your reputation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-2">1️⃣</div>
                <h3 className="font-bold text-xl mb-2 text-teal-700">Rough Clean</h3>
                <p className="text-gray-600 mb-4">
                  Initial removal of all large debris, trash, and materials, making the site safe and clear for final
                  trades.
                </p>
                <Button asChild variant="outline" size="sm" className="text-teal-700 border-teal-700">
                  <a
                    href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Quote
                  </a>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-2">2️⃣</div>
                <h3 className="font-bold text-xl mb-2 text-teal-700">Final Clean</h3>
                <p className="text-gray-600 mb-4">
                  The deep, detailed cleaning after construction is complete. We eliminate all dust, sanitize surfaces,
                  and make the property shine.
                </p>
                <Button asChild variant="outline" size="sm" className="text-teal-700 border-teal-700">
                  <a
                    href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Quote
                  </a>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-2">✨</div>
                <h3 className="font-bold text-xl mb-2 text-teal-700">Sparkle Clean</h3>
                <p className="text-gray-600 mb-4">
                  The final touch. A meticulous pass to remove any settled dust or smudges, guaranteeing a pristine,
                  move-in ready handover.
                </p>
                <Button asChild variant="outline" size="sm" className="text-teal-700 border-teal-700">
                  <a
                    href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Quote CTAs */}
        <div className="mt-12 bg-teal-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Quick Quote Requests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              <a
                href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 h-4 w-4" /> Total Square Footage Quote
              </a>
            </Button>
            <Button asChild variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              <a
                href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-4 w-4" /> Window Count Quote
              </a>
            </Button>
            <Button asChild variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              <a
                href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 h-4 w-4" /> Floors Waxed & Buffed
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <a href="sms:9103522582?body=I'm interested in Hawkins Cleaning Services. Please contact me with more information.">
                <MessageSquare className="mr-2 h-4 w-4" /> Text Us Now
              </a>
            </Button>
            <Button asChild variant="outline" className="border-teal-700 text-teal-700 hover:bg-teal-50">
              <a
                href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" /> Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
