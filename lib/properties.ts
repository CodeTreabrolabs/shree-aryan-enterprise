export type PropertyType =
  | "Apartment"
  | "Villa"
  | "Commercial"
  | "Office"
  | "Retail"
  | "Luxury"

export interface Configuration {
  wing?: string
  type: string
  size: string
  price: string
  facing?: string
}

export interface Contact {
  name: string
  role?: string
  phone: string
  email?: string
}

export interface Possession {
  constructionTarget: string
  reraCommitment: string
}

export interface Property {
  id: string
  slug: string
  title: string
  developer?: string
  tagline?: string
  location: string
  type: PropertyType
  featured: boolean
  description: string
  highlights?: string[]
  amenities: string[]
  configurations?: Configuration[]
  possession?: Possession
  rera?: string
  contact?: Contact
  driveLink?: string
  mapLink?: string
  image: string
  gallery: string[]
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "group-satellite-codename-jb99",
    title: "Group Satellite and Rockford group",
    developer: "Group Satellite and Rockford Group",
    tagline:
      "Premium Living in the Heart of Andheri – JB Nagar. Thoughtfully planned homes with modern architecture.",
    location: "JB Nagar, Andheri East, Mumbai",
    type: "Apartment",
    featured: true,
    description:
      "Codename JB99 offers thoughtfully designed residences in one of Andheri East’s most connected and vibrant neighborhoods. With optimal layouts, trusted developers, and lifestyle-driven amenities, this project brings modern urban comfort together with everyday convenience.",
    highlights: [
      "50+ Years of Excellence",
      "62+ Projects Completed",
      "50+ Lakh Sqft Delivered",
      "Jain temples in close proximity",
      "Prime JB Nagar neighborhood",
      "Excellent metro, airport & highway connectivity",
      "Lifestyle-focused amenities",
    ],
    amenities: [
    "Grand Entrance Lobby",
    "Rooftop Garden & Seating",
    "24x7 CCTV & Security",
    "Fire Safety Systems",
    "Ample Parking Space",
  ],
    configurations: [
      {
        type: "1 BHK Classic",
        size: "400 – 470 sqft",
        price: "₹1.33 Cr++",
      },
      {
        type: "1 BHK Premium",
        size: "475 – 550 sqft",
        price: "₹1.58 Cr++",
      },
      {
        type: "2 BHK Signature",
        size: "700 – 780 sqft",
        price: "₹2.33 Cr++",
      },
    ],
    possession: {
      constructionTarget: "Dec 2027",
      reraCommitment: "Dec 2028",
    },
    rera: "PR1180002500901",
    image: "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769452232/jb99_zg2rto.jpg",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769452232/jb99_zg2rto.jpg",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769452232/jb99_zg2rto.jpg",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769452232/jb99_zg2rto.jpg",
    ],
    // driveLink: "https://drive.google.com/",
  },

  {
    id: "2",
    slug: "kalpataru-magnus",
    title: "Kalpataru Magnus",
    developer: "Kalpataru Group",
    tagline:
      "Premium residences on a rare three-side open land parcel opposite Gurunanak Hospital.",
    location: "Bandra East, Mumbai",
    type: "Luxury",
    featured: true,
    description:
      "Kalpataru Magnus is a landmark residential development in Bandra East, offering premium homes on a rare three-side open land parcel. With OC received for key towers, lush landscaped spaces, and refined layouts, this project blends luxury with everyday functionality.",
    highlights: [
      "2.24 acres three-side open land parcel",
      "3 wings with premium layouts",
      "3 basement car parks",
      "OC received for Tower A & B",
      "30 habitable floors in A & B, 26 floors in C",
    ],
    amenities: [
      "Landscaped Gardens",
      "Fitness Center",
      "Kids Play Area",
      "Multipurpose Hall",
      "24x7 Security",
      "Ample Parking",
    ],
    configurations: [
      {
        wing: "A Wing",
        type: "2 BHK",
        size: "925 sq.ft carpet",
        price: "₹5.91 Cr all inclusive",
        facing: "Premium layouts",
      },
      {
        wing: "A Wing",
        type: "3 BHK",
        size: "1121 sq.ft carpet",
        price: "₹7.83 Cr onwards",
        facing: "Garden Facing",
      },
      {
        wing: "A Wing",
        type: "3 BHK",
        size: "1150 sq.ft carpet",
        price: "₹8.09 Cr onwards",
        facing: "Garden Facing",
      },
      {
        wing: "B Wing",
        type: "3 BHK",
        size: "1321 sq.ft carpet",
        price: "₹8.48 Cr onwards",
        facing: "City Facing",
      },
      {
        wing: "B Wing",
        type: "4 BHK",
        size: "1657 sq.ft carpet",
        price: "₹11.84 Cr all inclusive",
        facing: "Garden Facing",
      },
      {
        wing: "C Wing",
        type: "3 BHK",
        size: "1374 sq.ft carpet",
        price: "₹9.35 Cr all inclusive",
        facing: "Garden Facing",
      },
      {
        wing: "C Wing",
        type: "4.5 BHK",
        size: "1800 sq.ft carpet",
        price: "₹11.87 Cr all inclusive",
        facing: "City Facing",
      },
    ],
    rera: "P51800004029",
    image: "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447189/magnus-1_rchvby.png",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447189/magnus-1_rchvby.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447186/magnus-5_jukx0g.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447186/magnus-4_quh8ri.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447186/magnus-2_mico5r.png",
    ],
    driveLink:
      "https://drive.google.com/file/d/1ZMDF-xGzVWhydzO1bROIrPmn46ujqvlT/view?usp=sharing",
    mapLink:
      "https://www.google.com/maps/place/Kalpataru+Magnus/@19.0596141,72.8525241,17z",
  },

  {
    id: "3",
    slug: "shapoorji-minerva",
    title: "Shapoorji Minerva Towers",
    developer: "Shapoorji Pallonji",
    tagline:
      "South Mumbai's tallest icon by Shapoorji Pallonji, where sky-high living meets timeless luxury.",
    location: "Mahalakshmi, South Mumbai",
    type: "Luxury",
    featured: true,
    description:
      "Shapoorji Minerva Towers is India’s tallest residential tower rising 91 floors above South Mumbai. With full OC received, breathtaking sky decks, and ultra-premium residences, this iconic development redefines luxury living in the city skyline.",
    highlights: [
      "India’s tallest residential tower – 91 floors",
      "Full OC received",
      "Spectacular 78th-floor sky deck",
      "World-class amenities",
      "MahaRERA: P51900008204",
    ],
    amenities: [
      "Sky Deck",
      "Infinity Pool",
      "Fitness Center",
      "Luxury Spa",
      "Banquet Hall",
      "Kids Play Area",
      "24×7 Security",
    ],
    configurations: [
      {
        type: "4 BHK",
        size: "2019 sq.ft including 278 sq.ft deck",
        price: "₹14.45 Cr++",
        facing: "East–West facing, Race Course & Eastern Seaboard",
      },
      {
        type: "3.5 BHK",
        size: "2058 sq.ft including 346 sq.ft deck",
        price: "₹14.99 Cr++",
        facing: "Arabian Sea & Race Course view | 68th floor onwards",
      },
      {
        type: "4 BHK",
        size: "2136 sq.ft including 291 sq.ft deck",
        price: "₹15.45 Cr++",
        facing: "Dual aspect views",
      },
      {
        type: "Sky Mansions",
        size: "Limited Edition",
        price: "Details on request",
        facing: "Curated for connoisseurs of exclusivity",
      },
    ],
    rera: "P51900008204",
    image: "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447903/shpg-3_efrpkx.png",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447904/shpg-1_jeqimx.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447903/shpg-3_efrpkx.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447903/shpg-2_bb3uwr.png",
    ],
    // driveLink: "https://drive.google.com/",
  },

  {
    id: "4",
    slug: "solstice",
    title: "Solstice",
    developer: "The Baya Company",
    tagline: "Where Life Reaches Its Pinnacle",
    location: "Makwana Road, Marol, Andheri East, Mumbai",
    type: "Apartment",
    featured: false,
    description:
      "Solstice by The Baya Company offers some of the largest 2 & 3 bed residences in Andheri East, with spacious decks, servant rooms, and podium + rooftop lifestyle amenities. Designed for elevated urban living with comfort and elegance.",
    highlights: [
      "Largest-in-size 2 & 3 Bed Residences",
      "Spacious decks in every apartment",
      "Attached servant room in all apartments",
      "Utility spaces for effortless living",
      "Podium & Rooftop luxury amenities",
      "Limited-time launch benefits",
    ],
    amenities: [
      "Rooftop Lounge",
      "Swimming Pool",
      "Fitness Center",
      "Kids Play Area",
      "Jogging Track",
      "Clubhouse",
      "24x7 Security",
    ],
    configurations: [
      {
        type: "2 BHK",
        size: "788 - 933 Sq. Ft.",
        price: "₹2.13 Cr++",
      },
      {
        type: "3 BHK",
        size: "1283 - 1466 Sq. Ft.",
        price: "₹3.47 Cr++",
      },
    ],
    image: "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769452808/baya-1_i7b7ds.png",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769452807/baya-2_edi689.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769452810/baya-3_yqdiee.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769452808/baya-1_i7b7ds.png",
    ],
    // driveLink: "https://drive.google.com/",
    // mapLink: "https://maps.app.goo.gl/EJWKjCTJMyCSxfZh7",
  },
  {
    id: "5",
    slug: "ten-bkc",
    title: "TEN BKC",
    developer: "Confidential Developer",
    tagline: "Luxury Residential Project in Mumbai with Full OC Received",
    location: "Bandra East, Mumbai, Maharashtra",
    type: "Apartment",
    featured: true,
    description:
      "TEN BKC offers premium residences in Bandra East with unique tower designs, spacious layouts, and modern amenities. The project ensures comfort, luxury, and seamless connectivity across Mumbai.",
    highlights: [
      "Full OC Received",
      "Plot Size: 4.9 acres",
      "Open Greens: 2.9 acres",
      "Unique 3-zone tower design (A, B, C)",
      "Zone A & C: 22 storeys, Zone B: 29 storeys",
      "5 levels of basement car parking",
      "45,000 sq.ft. grand double-heighted lobby",
      "180 slabs casted in 6 months",
    ],
    amenities: [
      "Fitness Centre",
      "Game Simulator",
      "Kids Play Area",
      "Kids Pool",
      "Multipurpose Hall",
      "Reflexology Path",
      "Salon and Spa",
      "Senior Citizen Area",
      "Squash Court",
      "Swimming Pool",
      "Tiered Landscape Gardens",
      "Walking Path",
      "Welfare Centre",
      "Landscaping & Tree Planting",
    ],
    configurations: [
      {
        type: "3 BHK",
        size: "976 – 1400 sqft",
        price: "₹6.5 Cr++",
      },
      {
        type: "3 BHK Luxe",
        size: "1326 – 1450 sqft",
        price: "₹12 Cr++",
      },
      {
        type: "4 BHK",
        size: "2080 – 2400 sqft",
        price: "₹28 Cr++",
      },
    ],
    possession: {
      constructionTarget: "Completed",
      reraCommitment: "Completed",
    },
    rera: "P51800004889",
    image: "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447187/ten-bkc-0_a30lqa.jpg",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447186/ten-bkc-2_bwwpi8.jpg",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447188/ten-bkc-1_kx08dt.jpg",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447187/ten-bkc-0_a30lqa.jpg",
    ],
    driveLink: "https://drive.google.com/file/d/1t7EyOBEvxRnvEbhw6znhJyAFbaVxmFex/view?usp=drive_link",
  },
  {
    id: "6",
    slug: "5th-avenue-sunteckcity",
    title: "5th Avenue SunteckCity - Tower 2",
    developer: "Sunteck Realty Limited (SRL)",
    tagline: "Ultra-luxury Residences in Goregaon West with Private Elevator & Lobby",
    location: "Goregaon West, Mumbai, Maharashtra",
    type: "Apartment",
    featured: true,
    description:
      "5th Avenue SunteckCity Tower 2 offers 3 & 4 BHK ultra-luxury residences in Goregaon West with expansive city and Aarey views, private lobbies, premium finishes, and over 35 luxury amenities.",
    highlights: [
      "3-acre low-density development",
      "21,000 sq.ft. grand lobby",
      "35+ luxury amenities with car-free green podium",
      "1300–1700 sqft homes with Italian marble",
      "Private Elevator & Private Lobby",
      "Pre-launch pricing and EOI benefits",
    ],
    amenities: [
      "Fitness Centre",
      "Swimming Pool",
      "Kids Play Area",
      "Multipurpose Hall",
      "Car-free Green Podium",
      "Spa & Salon",
      "Rooftop Decks",
      "Senior Citizen Area",
      "Walking Paths",
      "Landscaped Gardens",
    ],
    configurations: [
      {
        type: "3 BHK",
        size: "1300 – 1500 sqft",
        price: "₹4 Cr++",
      },
      {
        type: "4 BHK",
        size: "1500 – 1700 sqft",
        price: "₹6 Cr++",
      },
    ],
    possession: {
      constructionTarget: "Proposed",
      reraCommitment: "As per RERA",
    },
    rera: "PR1181012502068",
    image: "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447193/5th-avenue-sunteckcity-2_mkrq80.png",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447185/5th-avenue-sunteckcity-0_ikmyrk.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447185/5th-avenue-sunteckcity-1_amjwfw.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769447193/5th-avenue-sunteckcity-2_mkrq80.png",
    ],
    driveLink: "https://drive.google.com/file/d/1xG8zALCOfdkF64SIxDZJ_H7_5KRSwIZz/view?usp=sharing",
  },
  {
    id: "7",
    slug: "rustomjee-prive-vivekanand",
    title: "Rustomjee Privé (Vivekanand)",
    developer: "Rustomjee",
    tagline: "The Epitome of Luxury at BKC Annexe – A New Landmark in Mumbai's Skyline",
    location: "BKC Annexe, Mumbai",
    type: "Luxury",
    featured: true,
    description:
      "Rustomjee Privé is an ultra-exclusive residential haven from the creators of some of the finest gated estates. This iconic G+21 storeyed architectural masterpiece with 3 wings offers spacious 2 & 3 BHK residences with private decks. With just 2 apartments per floor and all bedrooms as grand master suites, luxury living is redefined.",
    highlights: [
      "Prime Location: Nestled in the heart of BKC Annexe",
      "0.50 acres of premium real estate",
      "G+21 storeyed architectural masterpiece with 3 wings",
      "Exclusive apartments ensuring privacy & luxury",
      "Low-Density Layout: Just 2 apartments per floor",
      "2 high-speed elevators",
      "Thoughtfully designed 2 & 3 BHKs with private decks",
      "All bedrooms are grand master suites",
      "Over 20 world-class amenities on 4th-floor podium & rooftop",
    ],
    amenities: [
      "Landscaped Gardens",
      "Swimming Pool",
      "Gym & Wellness Center",
      "Sports Facilities",
      "Exclusive Clubhouse",
      "4th-floor Podium Amenities",
      "Rooftop Recreation Area",
      "24x7 Security",
    ],
    configurations: [
      {
        type: "2 BHK",
        size: "780 sq. ft. carpet",
        price: "SOLD OUT",
      },
      {
        type: "3 BHK",
        size: "1,090 sq. ft. carpet",
        price: "₹5.67 Cr++ onwards",
      },
      {
        type: "3 BHK",
        size: "1,300 sq. ft. carpet",
        price: "₹6.80 Cr++ onwards",
      },
      {
        type: "3 BHK",
        size: "1,320 sq. ft. carpet",
        price: "₹6.92 Cr++ onwards",
      },
    ],
    possession: {
      constructionTarget: "Dec 2028",
      reraCommitment: "2029",
    },
    rera: "P51800079537",
    image: "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769453694/rust-1_avmp2i.jpg",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769453693/rust-2_qovrum.jpg",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769453694/rust-3_i3mtzs.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769453693/rust-2_qovrum.jpg",
    ],
    driveLink: "https://drive.google.com/file/d/1yBFKb07rO_-m1TMKFF4AGAxU9hLFIuQa/view?usp=sharing",
  },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured)
}
