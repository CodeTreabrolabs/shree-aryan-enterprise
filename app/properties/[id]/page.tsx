import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Phone, Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getPropertyById, formatPrice, properties } from "@/lib/properties"

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }))
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Back Button */}
      <div className="pt-24 pb-4 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/properties">
              <ArrowLeft className="w-4 h-4" />
              Back to Properties
            </Link>
          </Button>
        </div>
      </div>

      {/* Property Header */}
      <section className="pb-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge className="bg-primary text-primary-foreground">
                  {property.type}
                </Badge>
                {property.featured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="text-left lg:text-right">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {formatPrice(property.price)}
              </p>
              <p className="text-muted-foreground text-sm">Listed Price</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="aspect-[16/10] relative rounded-lg overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="aspect-[16/10] lg:aspect-[16/8] relative rounded-lg overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={`${property.title} - View 2`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[16/10] lg:aspect-[16/8] relative rounded-lg overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={`${property.title} - View 3`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {property.bedrooms && (
                      <div className="text-center">
                        <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold text-foreground">{property.bedrooms}</p>
                        <p className="text-muted-foreground text-sm">Bedrooms</p>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div className="text-center">
                        <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold text-foreground">{property.bathrooms}</p>
                        <p className="text-muted-foreground text-sm">Bathrooms</p>
                      </div>
                    )}
                    <div className="text-center">
                      <Maximize className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold text-foreground">{property.area.toLocaleString()}</p>
                      <p className="text-muted-foreground text-sm">Sq. Ft.</p>
                    </div>
                    <div className="text-center">
                      <Badge className="mx-auto mb-2 bg-primary text-primary-foreground">
                        {property.type}
                      </Badge>
                      <p className="text-muted-foreground text-sm mt-2">Property Type</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">About This Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Amenities & Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-1">
              <Card className="sticky top-28">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Interested in This Property?</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Fill out the form below and our team will get back to you shortly.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Phone Number" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email Address" />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Tell us about your requirements..." 
                        rows={4}
                        defaultValue={`I am interested in "${property.title}" at ${property.location}.`}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Submit Enquiry
                    </Button>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Or contact us directly:</p>
                    <div className="space-y-3">
                      <a href="tel:++919322635844" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>+918108917612, +919322635844</span>
                      </a>
                      <a href="mailto:aryanestateconsultant10@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>aryanestateconsultant10@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
