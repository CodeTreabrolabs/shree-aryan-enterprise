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
import { PropertyEnquiryForm } from "@/components/property-enquiry-form";

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
      <div className="pt-16 md:pt-24 pb-2 md:pb-4 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            asChild
            className="gap-2 text-sm md:text-base"
          >
            <Link href="/properties">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Properties</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Property Header */}
      <section className="pb-6 md:pb-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2 md:mb-3 flex-wrap">
                <Badge className="bg-primary text-primary-foreground text-xs md:text-sm">
                  {property.type}
                </Badge>
                {property.featured && (
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    Featured
                  </Badge>
                )}
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                {property.title}
              </h1>
              <div className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                <span className="break-words">{property.location}</span>
              </div>
            </div>

            {/* ✅ PRICE */}
            <div className="bg-background">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                {startingPrice}
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">
                Starting Price
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Image */}
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

            {/* Gallery Images */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {property.gallery?.slice(0, 2).map((img, i) => (
                <div
                  key={i}
                  className="aspect-[16/10] lg:aspect-[16/8] relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${property.title} - View ${i + 1}`}
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
      <section className="py-8 md:py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-8 grid-cols-1 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Quick Stats */}
              <Card className="border-border/60 shadow-sm">
                <CardContent className="p-4 md:p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {/* CONFIG TYPES */}
                    <div className="flex flex-col items-center justify-center rounded-lg md:rounded-xl border border-border/60 bg-background px-3 md:px-4 py-4 md:py-5 text-center transition hover:shadow-sm">
                      <Home className="w-4 h-4 md:w-5 md:h-5 mb-2 text-primary" />
                      <p className="text-base md:text-lg font-semibold text-foreground leading-tight text-xs md:text-sm">
                        {bhkTypes || "—"}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                        Config
                      </p>
                    </div>

                    {/* SIZE */}
                    <div className="flex flex-col items-center justify-center rounded-lg md:rounded-xl border border-border/60 bg-background px-3 md:px-4 py-4 md:py-5 text-center transition hover:shadow-sm">
                      <Maximize className="w-4 h-4 md:w-5 md:h-5 mb-2 text-primary" />
                      <p className="text-base md:text-lg font-semibold text-foreground leading-tight text-xs md:text-sm">
                        {sizeRange || "—"}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                        Sizes
                      </p>
                    </div>

                    {/* PRICE */}
                    <div className="flex flex-col items-center justify-center rounded-lg md:rounded-xl border border-border/60 bg-background px-3 md:px-4 py-4 md:py-5 text-center transition hover:shadow-sm">
                      <IndianRupee className="w-4 h-4 md:w-5 md:h-5 mb-2 text-primary" />
                      <p className="text-base md:text-lg font-semibold text-primary leading-tight text-xs md:text-sm">
                        {startingPrice}
                      </p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                        Price
                      </p>
                    </div>

                    {/* TYPE */}
                    <div className="flex flex-col items-center justify-center rounded-lg md:rounded-xl border border-border/60 bg-background px-3 md:px-4 py-4 md:py-5 text-center transition hover:shadow-sm">
                      <Badge className="mb-2 bg-primary/10 text-primary border border-primary/20 text-xs">
                        {property.type}
                      </Badge>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                        Type
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl md:text-2xl">
                    About This Property
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {property.description}
                  </p>
                </CardContent>
              </Card>

              {/* Configurations Table */}
              {configs.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl md:text-2xl">
                      Available Configurations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:gap-4">
                      {configs.map((c, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-3 last:border-none text-sm md:text-base"
                        >
                          <div className="font-medium text-foreground">
                            {c.type} {c.wing && `(${c.wing})`}
                          </div>
                          <div className="text-muted-foreground">{c.size}</div>
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
                  <CardTitle className="font-serif text-xl md:text-2xl">
                    Amenities & Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {property.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-start gap-2 text-sm md:text-base"
                      >
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {/* Drive Download Links */}
              {property.driveLink && (
                <Card className="mt-6 md:mt-8">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl md:text-2xl">
                      View Brochure
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
                          className="text-primary hover:underline text-sm md:text-base"
                        >
                          View File {idx + 1}
                        </a>
                      ))
                    ) : (
                      <a
                        href={property.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm md:text-base"
                      >
                        View File
                      </a>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-1">
              <PropertyEnquiryForm property={property} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
