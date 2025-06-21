"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail, Calendar, MessageSquare, MapPin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { submitContactForm } from "@/lib/actions"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email to HawkinsCleans@gmail.com
      const emailBody = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Contact: ${formData.preferredContact}
Message: ${formData.message}
      `

      window.location.href = `mailto:HawkinsCleans@gmail.com?subject=Quote Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`

      await submitContactForm(formData)
      toast({
        title: "Message sent successfully!",
        description: "We'll be in touch with you shortly.",
      })
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        preferredContact: "email",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Cleaner, More Reliable Solution?</h2>
            <p className="text-gray-300 mb-6">
              Let's talk about your project. Reach out today for a free, no-obligation quote. Discover the peace of mind
              that comes with a cleaning partner you can truly depend on.
            </p>

            <div className="space-y-6 mb-8">
              <a href="tel:9103522582" className="flex items-center group">
                <div className="bg-teal-700 p-3 rounded-full mr-4 group-hover:bg-teal-600 transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-300">(910) 352-2582</p>
                </div>
              </a>

              <a href="mailto:HawkinsCleans@gmail.com" className="flex items-center group">
                <div className="bg-teal-700 p-3 rounded-full mr-4 group-hover:bg-teal-600 transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-300">HawkinsCleans@gmail.com</p>
                </div>
              </a>

              <a
                href="https://calendly.com/hawkinscleaningservices/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="bg-teal-700 p-3 rounded-full mr-4 group-hover:bg-teal-600 transition-colors">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Schedule a Consultation</p>
                  <p className="text-gray-300">Book a time that works for you</p>
                </div>
              </a>

              <div className="flex items-center">
                <div className="bg-teal-700 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Service Area</p>
                  <p className="text-gray-300">
                    Wilmington, Southport, Hampstead, Burgaw, Castle Hayne, NC | Licensed & Insured
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-2xl text-gray-800">
            <Tabs defaultValue="quote" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="quote">Get Quote</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="text">Text Us</TabsTrigger>
              </TabsList>

              <TabsContent value="quote">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Name
                      </label>
                      <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                        Company
                      </label>
                      <Input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        How can we help? (Include total square footage, number of windows, or specific services needed)
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Total square footage of building: ___&#10;Number of windows: ___&#10;Floors waxed and buffed: Yes/No&#10;Other services needed: ___"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredContact" className="block text-gray-700 font-semibold mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="text">Text</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Request"}
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="schedule">
                <h3 className="text-2xl font-bold mb-6">Complete Service Request & Scheduling</h3>
                <p className="mb-4">Fill out our comprehensive form to get pricing and schedule your service.</p>
                <div className="aspect-video">
                  <iframe
                    src="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
                    className="w-full h-full border-0 rounded-lg"
                    title="Complete service request and scheduling"
                    style={{ minHeight: "600px" }}
                  ></iframe>
                </div>
              </TabsContent>

              <TabsContent value="text">
                <h3 className="text-2xl font-bold mb-6">Text Us Now</h3>
                <p className="mb-6">Send us a text message and we'll respond quickly to your inquiry.</p>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3">
                    <a href="sms:9103522582?body=I'm interested in Hawkins Cleaning Services. Please contact me with more information.">
                      <MessageSquare className="mr-2 h-4 w-4" /> Send Text Message
                    </a>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
