"use client"

import { useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { properties } from "@/lib/properties"

const propertyTypes = ["All", "Apartment", "Villa", "Commercial", "Office", "Retail"]

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProperties = properties
    .filter((property) => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === "All" || property.type === selectedType
      return matchesSearch && matchesType
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "area":
          return b.area - a.area
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      }
    })

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Our Portfolio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-background mb-4 text-balance">
              Listed Properties
            </h1>
            <p className="text-background/70 max-w-2xl mx-auto">
              Browse our exclusive collection of premium residential and commercial properties. Find the perfect space that matches your lifestyle and investment goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary border-b border-border sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[160px] bg-background">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px] bg-background">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="area">Largest Area</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProperties.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-6">
                Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-2xl font-serif font-semibold text-foreground mb-2">No properties found</p>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedType("All") }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
            Cannot Find What You Are Looking For?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Our team has access to off-market listings and can help you find exactly what you need.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">Contact Our Experts</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
