"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Calendar, X } from "lucide-react"

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 animate-in slide-in-from-bottom">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Contact Us</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            <Button asChild className="w-full justify-start">
              <a href="tel:9103522582">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <a href="sms:9103522582?body=I'm interested in Hawkins Cleaning Services. Please contact me with more information.">
                <MessageSquare className="mr-2 h-4 w-4" /> Text Us
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <a
                href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" /> Schedule
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-16 w-16 shadow-lg bg-teal-600 hover:bg-teal-700"
        >
          <Phone className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
