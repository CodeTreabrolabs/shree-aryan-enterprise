import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Maximize,
  Phone,
  Mail,
  CheckCircle,
  Home,
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { properties } from "@/lib/properties";

// Helper to get property by slug
export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

// Next.js static paths for slug-based routing
export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) notFound();

  const configs = property.configurations || [];

  const startingPrice = configs[0]?.price || "Price on request";
  const sizes = configs.map((c) => c.size);
  const sizeRange =
    sizes.length > 1 ? `${sizes[0]} - ${sizes[sizes.length - 1]}` : sizes[0];

  const bhkTypes = [...new Set(configs.map((c) => c.type))].join(", ");

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

            {/* ✅ PRICE */}
            <div className="text-left lg:text-right">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {startingPrice}
              </p>
              <p className="text-muted-foreground text-sm">Starting Price</p>
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
              {property.gallery?.slice(0, 2).map((img, i) => (
                <div
                  key={img}
                  className="aspect-[16/10] lg:aspect-[16/8] relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${property.title} - View ${i + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
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
              <Card className="border-border/60 shadow-sm">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* CONFIG TYPES */}
                    <div className="flex flex-col items-center justify-center rounded-xl border border-border/60 bg-background px-4 py-5 text-center transition hover:shadow-sm">
                      <Home className="w-5 h-5 mb-2 text-primary" />
                      <p className="text-lg font-semibold text-foreground leading-tight">
                        {bhkTypes || "—"}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                        Configurations
                      </p>
                    </div>

                    {/* SIZE */}
                    <div className="flex flex-col items-center justify-center rounded-xl border border-border/60 bg-background px-4 py-5 text-center transition hover:shadow-sm">
                      <Maximize className="w-5 h-5 mb-2 text-primary" />
                      <p className="text-lg font-semibold text-foreground leading-tight">
                        {sizeRange || "—"}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                        Sizes
                      </p>
                    </div>

                    {/* PRICE */}
                    <div className="flex flex-col items-center justify-center rounded-xl border border-border/60 bg-background px-4 py-5 text-center transition hover:shadow-sm">
                      <IndianRupee className="w-5 h-5 mb-2 text-primary" />
                      <p className="text-lg font-semibold text-primary leading-tight">
                        {startingPrice}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                        Starting Price
                      </p>
                    </div>

                    {/* TYPE */}
                    <div className="flex flex-col items-center justify-center rounded-xl border border-border/60 bg-background px-4 py-5 text-center transition hover:shadow-sm">
                      <Badge className="mb-2 bg-primary/10 text-primary border border-primary/20">
                        {property.type}
                      </Badge>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                        Property Type
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">
                    About This Property
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </CardContent>
              </Card>

              {/* Configurations Table */}
              {configs.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">
                      Available Configurations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {configs.map((c, i) => (
                        <div
                          key={i}
                          className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b pb-3 last:border-none"
                        >
                          <div className="font-medium text-foreground">
                            {c.type} {c.wing && `(${c.wing})`}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {c.size}
                          </div>
                          <div className="font-semibold text-primary">
                            {c.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Amenities */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">
                    Amenities & Features
                  </CardTitle>
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
              {/* Drive Download Links */}
              {property.driveLink && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">
                      Download Files
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    {Array.isArray(property.driveLink) ? (
                      property.driveLink.map((link, idx) => (
                        <a
                          key={idx}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Download File {idx + 1}
                        </a>
                      ))
                    ) : (
                      <a
                        href={property.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Download
                      </a>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-1">
              <Card className="sticky top-28">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">
                    Interested in This Property?
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Fill out the form below and our team will get back to you
                    shortly.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="tel" placeholder="Phone Number" />
                    <Input type="email" placeholder="Email Address" />
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      defaultValue={`I am interested in "${property.title}" at ${property.location}.`}
                    />
                    <Button className="w-full" size="lg">
                      Submit Enquiry
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Or contact us directly:
                    </p>
                    <div className="space-y-3">
                      <a
                        href="tel:++919322635844"
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-5 h-5 text-primary" />
                        <span>+918108917612, +919322635844</span>
                      </a>
                      <a
                        href="mailto:aryanestateconsultant10@gmail.com"
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
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
  );
}
