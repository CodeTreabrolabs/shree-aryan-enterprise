import Image from "next/image"
import Link from "next/link"
import { MapPin, Bed, Bath, Maximize } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Property, formatPrice } from "@/lib/properties"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground">
            {property.type}
          </Badge>
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-foreground text-background">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 line-clamp-1">
          {property.title}
        </h3>
        <p className="text-2xl font-bold text-primary mb-4">
          {formatPrice(property.price)}
        </p>
        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" className="flex-1 bg-transparent">
            <Link href={`/properties/${property.id}`}>View Details</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href={`/contact?property=${property.id}`}>Enquire Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
