export interface Property {
  id: string
  title: string
  price: number
  location: string
  type: "Apartment" | "Villa" | "Commercial" | "Office" | "Retail"
  bedrooms?: number
  bathrooms?: number
  area: number
  image: string
  featured: boolean
  description: string
  amenities: string[]
  gallery: string[]
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Penthouse Suite",
    price: 2500000,
    location: "Manhattan, New York",
    type: "Apartment",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: "/properties/property-1.jpg",
    featured: true,
    description: "Experience unparalleled luxury in this stunning penthouse suite featuring floor-to-ceiling windows with breathtaking city views. This meticulously designed residence offers premium finishes throughout, including Italian marble flooring, custom cabinetry, and state-of-the-art appliances. The expansive living area seamlessly flows to a private terrace, perfect for entertaining.",
    amenities: ["Rooftop Terrace", "24/7 Concierge", "Private Elevator", "Smart Home System", "Wine Cellar", "Fitness Center"],
    gallery: ["/properties/property-1.jpg", "/properties/property-1-2.jpg", "/properties/property-1-3.jpg"]
  },
  {
    id: "2",
    title: "Modern Waterfront Villa",
    price: 4800000,
    location: "Miami Beach, Florida",
    type: "Villa",
    bedrooms: 6,
    bathrooms: 5,
    area: 5500,
    image: "/properties/property-2.jpg",
    featured: true,
    description: "A masterpiece of contemporary architecture, this waterfront villa offers direct ocean access and panoramic views. The open-concept design features soaring ceilings, a chef's kitchen, and multiple entertainment areas. The outdoor oasis includes an infinity pool, summer kitchen, and private dock.",
    amenities: ["Private Pool", "Ocean Access", "Home Theater", "Guest House", "3-Car Garage", "Smart Security"],
    gallery: ["/properties/property-2.jpg", "/properties/property-2-2.jpg", "/properties/property-2-3.jpg"]
  },
  {
    id: "3",
    title: "Downtown Corporate Office",
    price: 3200000,
    location: "Financial District, NYC",
    type: "Commercial",
    area: 8000,
    image: "/properties/property-3.jpg",
    featured: true,
    description: "Premium Class A office space in the heart of the Financial District. This turn-key corporate office features modern infrastructure, high-speed connectivity, and stunning views. Ideal for established businesses seeking a prestigious address with excellent transportation links.",
    amenities: ["Conference Rooms", "Reception Area", "Server Room", "Parking Garage", "24/7 Access", "Building Security"],
    gallery: ["/properties/property-3.jpg", "/properties/property-3-2.jpg", "/properties/property-3-3.jpg"]
  },
  {
    id: "4",
    title: "Contemporary City Apartment",
    price: 850000,
    location: "Brooklyn, New York",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/properties/property-4.jpg",
    featured: false,
    description: "Stylish urban living in this beautifully renovated Brooklyn apartment. Features include exposed brick, hardwood floors, and a gourmet kitchen with high-end appliances. The building offers modern amenities in a prime location close to parks, restaurants, and transit.",
    amenities: ["Rooftop Access", "Gym", "Laundry", "Pet Friendly", "Bike Storage", "Package Room"],
    gallery: ["/properties/property-4.jpg", "/properties/property-4-2.jpg", "/properties/property-4-3.jpg"]
  },
  {
    id: "5",
    title: "Executive Corner Office Suite",
    price: 1500000,
    location: "Midtown, Manhattan",
    type: "Office",
    area: 4500,
    image: "/properties/property-5.jpg",
    featured: true,
    description: "Prestigious corner office suite offering commanding views of the Manhattan skyline. This executive space includes private offices, open work areas, and a dedicated conference center. Premium building with full-service amenities and excellent accessibility.",
    amenities: ["Private Offices", "Board Room", "Kitchen", "Storage", "IT Infrastructure", "Valet Parking"],
    gallery: ["/properties/property-5.jpg", "/properties/property-5-2.jpg", "/properties/property-5-3.jpg"]
  },
  {
    id: "6",
    title: "Prime Retail Space",
    price: 2100000,
    location: "SoHo, New York",
    type: "Retail",
    area: 3500,
    image: "/properties/property-6.jpg",
    featured: false,
    description: "High-visibility retail space in the heart of SoHo's premier shopping district. This street-level space features extensive frontage, high ceilings, and premium finishes. Perfect for flagship stores, galleries, or upscale dining establishments.",
    amenities: ["Street Frontage", "Display Windows", "Loading Dock", "Storage Basement", "HVAC", "ADA Compliant"],
    gallery: ["/properties/property-6.jpg", "/properties/property-6-2.jpg", "/properties/property-6-3.jpg"]
  },
  {
    id: "7",
    title: "Suburban Family Estate",
    price: 1950000,
    location: "Greenwich, Connecticut",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 4800,
    image: "/properties/property-7.jpg",
    featured: false,
    description: "Elegant family estate set on two acres of manicured grounds. This classic residence combines timeless architecture with modern amenities. Features include a gourmet kitchen, formal living spaces, home office, and a spectacular backyard with pool and outdoor entertaining areas.",
    amenities: ["Swimming Pool", "Tennis Court", "Home Gym", "Wine Room", "Au Pair Suite", "3-Car Garage"],
    gallery: ["/properties/property-7.jpg", "/properties/property-7-2.jpg", "/properties/property-7-3.jpg"]
  },
  {
    id: "8",
    title: "Boutique Hotel Conversion",
    price: 5500000,
    location: "Chelsea, Manhattan",
    type: "Commercial",
    area: 12000,
    image: "/properties/property-8.jpg",
    featured: false,
    description: "Rare opportunity to own a historic building with approved plans for boutique hotel conversion. This landmark property features original architectural details, high ceilings, and unlimited potential. Located in vibrant Chelsea with excellent foot traffic and transit access.",
    amenities: ["Landmark Status", "Roof Rights", "Development Plans", "Elevator", "Basement", "Courtyard"],
    gallery: ["/properties/property-8.jpg", "/properties/property-8-2.jpg", "/properties/property-8-3.jpg"]
  },
  {
    id: "9",
    title: "Harborview Condo",
    price: 725000,
    location: "Jersey City, NJ",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    image: "/properties/property-9.jpg",
    featured: false,
    description: "Modern waterfront condo with stunning Manhattan skyline views. This sun-filled residence features an open floor plan, chef's kitchen, and a private balcony. Building amenities include a rooftop lounge, fitness center, and direct ferry access to NYC.",
    amenities: ["Balcony", "Doorman", "Pool", "Rooftop Lounge", "Ferry Access", "Parking"],
    gallery: ["/properties/property-9.jpg", "/properties/property-9-2.jpg", "/properties/property-9-3.jpg"]
  },
  {
    id: "10",
    title: "Medical Office Building",
    price: 4200000,
    location: "Upper East Side, NYC",
    type: "Commercial",
    area: 7500,
    image: "/properties/property-10.jpg",
    featured: false,
    description: "Purpose-built medical office building in prestigious Upper East Side location. Features include specialized infrastructure for medical equipment, multiple exam rooms, and dedicated parking. Ideal for medical practices, diagnostic centers, or healthcare-related businesses.",
    amenities: ["Medical Infrastructure", "Waiting Areas", "Parking Lot", "Elevator", "Generator", "ADA Compliant"],
    gallery: ["/properties/property-10.jpg", "/properties/property-10-2.jpg", "/properties/property-10-3.jpg"]
  }
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price)
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find(p => p.id === id)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter(p => p.featured)
}
