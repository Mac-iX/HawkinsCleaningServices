import Hero from "@/components/Hero"
import PainPoints from "@/components/PainPoints"
import Services from "@/components/Services"
import WhyUs from "@/components/WhyUs"
import Testimonial from "@/components/Testimonial"
import About from "@/components/About"
import Faq from "@/components/Faq"
import ContactSection from "@/components/ContactSection"
import LeadCapture from "@/components/LeadCapture"
import FloatingCTA from "@/components/FloatingCTA"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hawkins Cleaning Solutions | Commercial & New Construction Cleaning in Wilmington, NC",
  description:
    "Professional commercial and new construction cleaning services in Wilmington, NC. Family-owned, reliable, and trusted by local businesses.",
  keywords: "cleaning services, commercial cleaning, new construction cleaning, Wilmington NC, janitorial services",
}

export default function Home() {
  return (
    <main>
      <Hero />
      <LeadCapture />
      <PainPoints />
      <Services />
      <WhyUs />
      <Testimonial />
      <About />
      <Faq />
      <ContactSection />
      <FloatingCTA />
    </main>
  )
}
