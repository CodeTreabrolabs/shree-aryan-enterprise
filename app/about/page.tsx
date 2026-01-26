import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, Award, Building2, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const team = [
  {
    name: "Robert Mitchell",
    role: "Founder & CEO",
    image: "/team/team-1.jpg",
    bio: "With over 20 years in premium real estate, Robert founded Shree Aryan Estate Enterprise to redefine property consulting."
  },
  {
    name: "Sarah Chen",
    role: "Director of Sales",
    image: "/team/team-2.jpg",
    bio: "Sarah brings 15 years of experience in luxury residential and commercial property transactions."
  },
  {
    name: "James Wilson",
    role: "Senior Consultant",
    image: "/team/team-3.jpg",
    bio: "James specializes in investment properties and has helped clients build portfolios worth millions."
  }
]

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To provide exceptional real estate consulting services that empower our clients to make informed property decisions with confidence and clarity."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the most trusted name in premium real estate consulting, known for our integrity, expertise, and unwavering commitment to client success."
  },
  {
    icon: Heart,
    title: "Values",
    description: "Integrity, transparency, and client-first approach guide everything we do. We believe in building lasting relationships based on trust."
  }
]

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "500+", label: "Properties Sold" },
  { value: "$2B+", label: "Transaction Value" },
  { value: "98%", label: "Client Satisfaction" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-background mb-4 text-balance">
              Your Trusted Real Estate Advisors
            </h1>
            <p className="text-background/70 max-w-2xl mx-auto">
              More than brokers — we are consultants dedicated to guiding you through every step of your property journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="/properties/property-2.jpg"
                  alt="Shree Aryan Estate Enterprise office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-xl max-w-xs hidden lg:block">
                <p className="text-4xl font-bold text-primary-foreground mb-1">15+</p>
                <p className="text-primary-foreground/80">Years of Excellence in Real Estate</p>
              </div>
            </div>
            
            <div>
              <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                A Legacy of Trust and Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009, Shree Aryan Estate Enterprise was born from a simple belief: real estate transactions should be guided by expertise, not just facilitated. Our founder, Robert Mitchell, recognized that clients deserved more than a transactional relationship — they needed a trusted advisor.
                </p>
                <p>
                  Over the past 15 years, we have grown from a boutique consultancy to one of the region&apos;s most respected real estate firms. Our approach has always been consultative: understanding our clients&apos; unique needs, providing market insights, and guiding them to properties that truly match their vision.
                </p>
                <p>
                  Today, we continue to uphold the same principles that defined our beginning: integrity, expertise, and an unwavering commitment to our clients&apos; success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              What Drives Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="bg-background">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
                Our Approach
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Consultative, Not Transactional
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Unlike traditional brokers who focus on closing deals, we prioritize understanding your needs. Our consultative approach means we take the time to learn about your goals, preferences, and constraints before presenting options.
              </p>
              
              <div className="space-y-4">
                {[
                  "Deep understanding of your unique requirements",
                  "Comprehensive market analysis and insights",
                  "Access to off-market and exclusive listings",
                  "Expert negotiation on your behalf",
                  "End-to-end support throughout the process",
                  "Long-term relationship, not just a transaction"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src="/properties/property-1.jpg"
                    alt="Luxury interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/properties/property-4.jpg"
                    alt="Modern apartment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="properties/property-3.jpg"
                    alt="Office space"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src="/properties/property-7.jpg"
                    alt="Estate property"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Our Team
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team brings decades of combined experience in premium real estate, dedicated to helping you achieve your property goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-background mb-4 text-balance">
            Ready to Work with Us?
          </h2>
          <p className="text-background/70 mb-8 max-w-2xl mx-auto">
            Let our team of experts guide you through your next real estate journey. Schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-base">
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-background text-background hover:bg-background hover:text-foreground">
              <Link href="/properties">
                View Properties
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
