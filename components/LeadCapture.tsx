"use client"

import { Button } from "@/components/ui/button"

export default function LeadCapture() {
  return (
    <section className="bg-teal-50 py-8 border-y border-teal-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Get Your Free Cleaning Quote in Just a Few Minutes
          </h2>
          <div className="text-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-lg">
              <a
                href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Instant Quote & Schedule
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
