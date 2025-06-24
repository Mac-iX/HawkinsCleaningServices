"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LeadCapture() {
  return (
    <section className="bg-teal-50 py-8 border-y border-teal-100">
      <div className="container mx-auto px-6">
        {/* Headline and CTA Button - moved above the blue card */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Your Free Cleaning Quote in Just a Few Minutes</h2>
          <Button
            asChild
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-12 py-6 text-xl rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
          >
            <a
              href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Instant Quote & Schedule
            </a>
          </Button>
        </div>

        {/* Blue sparks card with Big Brush image */}
        <div
          className="max-w-4xl mx-auto rounded-lg shadow-md p-8 relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/blue-sparks-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center relative z-10">
            <Image
              src="/images/big-brush-hawkins.jpg"
              alt="Hawkins Cleaning Services - Our brush is bigger than yours! Professional cleaning equipment and superior service in Wilmington NC"
              width={500}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
