import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Building2, Users, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { getFeaturedProperties } from "@/lib/properties"

const stats = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Properties Sold", icon: Building2 },
  { value: "1000+", label: "Happy Clients", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: CheckCircle },
]

const testimonials = [
  {
    quote: "Shree Aryan Estate Enterprise made finding our dream home effortless. Their expertise and personalized approach exceeded our expectations.",
    author: "Michael & Sarah Johnson",
    role: "Homeowners, Manhattan"
  },
  {
    quote: "The team's deep market knowledge helped us secure the perfect commercial space for our business. Truly exceptional service.",
    author: "David Chen",
    role: "Business Owner, SoHo"
  },
  {
    quote: "Professional, knowledgeable, and always available. They guided us through every step of our property investment journey.",
    author: "Emily Rodriguez",
    role: "Property Investor"
  }
]

export default function HomePage() {
  const featuredProperties = getFeaturedProperties().slice(0, 4)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Luxury real estate"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 font-medium mb-4 tracking-wide uppercase text-sm">
              Premium Real Estate Consulting
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 text-balance">
              Find Your Perfect Property with Expert Guidance
            </h1>
            <p className="text-lg text-background/80 mb-8 max-w-xl leading-relaxed">
              We are not just brokers — we are your trusted advisors in navigating the premium real estate market. Let us help you find the property that matches your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link href="/contact">
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-background text-background hover:bg-background hover:text-foreground">
                <Link href="/properties">
                  Explore Properties
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-primary-foreground/80 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Our Portfolio
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Featured Properties
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our curated selection of premium residential and commercial properties across prime locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link href="/properties">
                View All Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
                Why Choose Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Your Trusted Partner in Real Estate
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Unlike traditional brokers, we take a consultative approach. Our team of experts works closely with you to understand your unique needs, providing personalized guidance throughout your property journey.
              </p>
              
              <div className="space-y-4">
                {[
                  "Personalized property matching based on your requirements",
                  "In-depth market analysis and investment insights",
                  "End-to-end support from search to closing",
                  "Access to off-market and exclusive listings",
                  "Transparent communication at every step"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="/properties/property-1.jpg"
                  alt="Luxury property interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
                <p className="text-primary-foreground font-medium text-lg">
                  Schedule a consultation today and let us help you find your perfect property.
                </p>
                <a href="tel:++919322635844" className="flex items-center gap-2 mt-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+918108917612, +919322635844</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-background mb-4 text-balance">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background/5 border-background/10">
                <CardContent className="p-6">
                  <p className="text-background/90 mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-background">{testimonial.author}</p>
                    <p className="text-background/60 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our expert consultants today. Whether you are buying, selling, or investing, we are here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-base">
              <Link href="/contact">
                Book a Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
              <a href="tel:+919322635844" className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
