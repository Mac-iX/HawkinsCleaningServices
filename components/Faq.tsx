"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FaqItem[] = [
    {
      question: "Are you insured?",
      answer:
        "Absolutely. We are fully licensed and carry comprehensive general liability insurance. We believe in protecting our clients, their property, and our team. We are happy to provide proof of insurance upon request.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We proudly serve Wilmington, NC, and the surrounding areas, including New Hanover, Pender, and Brunswick counties. If you're unsure if you're in our service area, please don't hesitate to reach out!",
    },
    {
      question: "How do you price your services?",
      answer:
        "We provide custom quotes for every project to ensure fair and accurate pricing. Pricing is based on factors like square footage, the type and frequency of service required, and any specialized needs. Our quotes are always transparent, with no hidden fees.",
    },
    {
      question: "Can you work around our business hours or construction schedule?",
      answer:
        "Yes. We are solution-oriented and pride ourselves on our flexibility. We will work with you to create a cleaning schedule that minimizes disruption to your business operations or integrates seamlessly with your construction timeline.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-sm">
              <button
                className="w-full flex justify-between items-center p-5 text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h4 className="font-semibold text-lg">{item.question}</h4>
                <span>{openIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`px-5 pb-5 text-gray-600 ${openIndex === index ? "block" : "hidden"}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
