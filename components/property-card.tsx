import Image from "next/image"
import Link from "next/link"
import { MapPin, Maximize } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Property } from "@/lib/properties"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const configs = property.configurations || []

  const startingPrice = configs[0]?.price || "Price on request"
  const sizes = configs.map((c) => c.size)
  const sizeRange =
    sizes.length > 1 ? `${sizes[0]} - ${sizes[sizes.length - 1]}` : sizes[0]

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 flex flex-col h-full">
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

      <CardContent className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <h3 className="font-serif text-xl font-semibold text-foreground mb-1 line-clamp-2">
          {property.title}
        </h3>

        {/* ✅ PRICE */}
        <p className="text-2xl font-bold text-primary mb-3">
          {startingPrice}
        </p>

        {/* ✅ AREA */}
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
          {/* <Maximize className="w-4 h-4" /> */}
          <span>{sizeRange || "Size on request"}</span>
        </div>

        <div className="flex gap-2 mt-auto">
          <Button asChild variant="outline" className="flex-1 bg-transparent">
            <Link href={`/properties/${property.slug}`}>View Details</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href={`/contact?property=${property.slug}`}>Enquire Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
