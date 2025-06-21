import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="hero-banner-bg text-white">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Unmatched Professionalism for Wilmington's Commercial & New Construction Spaces
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Leveraging decades of expertise and a family-owned commitment to delivering pristine, move-in ready results
          you can trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <a
              href="https://web.taskbird.com/booking-site/iframe/hawkins-cleaning-solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Your Free Quote
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-teal-700 border-teal-700 hover:bg-teal-50 font-bold px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <a href="tel:9103522582">Call Us Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
