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
  {
    id: "8",
    slug: "vasant-harmony-business-park",
    title: "Vasant Harmony Business Park",
    developer: "Vasant Harmony",
    tagline: "Where Business Finds its Excellence",
    location: "Saki-Vihar Road, Andheri East, Mumbai",
    type: "Commercial",
    featured: true,
    description:
      "Vasant Harmony Business Park offers premium warm shell offices with stunning glass facades and exclusive amenities. Perfect for smart boutique offices and large corporates with flexible floor plans and retail spaces.",
    highlights: [
      "G+17 Storey Tower",
      "Warm Shell Offices",
      "Stunning External Glass Facade",
      "Exclusive Lavish Entrance Lobby",
      "Smart Self-Contained Boutique Offices",
      "Exclusive Floors for Large Corporates",
      "T-20 & CLP Payment Plans Available",
    ],
    amenities: [
      "Lavish Entrance Lobby",
      "High-Speed Elevators",
      "24x7 Security",
      "Fire Safety Systems",
      "Ample Parking",
      "Power Backup",
      "Modern Infrastructure",
    ],
    configurations: [
      {
        type: "Boutique Office",
        size: "260 - 1200 sq.ft RCA",
        price: "₹26,100 per sq.ft",
      },
      {
        type: "Exclusive Floor",
        size: "For Large Corporates",
        price: "₹26,100 per sq.ft",
      },
      {
        type: "Retail Space - 1st Floor",
        size: "Available",
        price: "₹45,000 per sq.ft",
      },
      {
        type: "Retail Space - 2nd Floor",
        size: "Available",
        price: "₹35,000 per sq.ft",
      },
    ],
    possession: {
      constructionTarget: "December 2028",
      reraCommitment: "December 2029",
    },
    image: "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769501986/vbh-3_poxaqv.png",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769501986/vbh-1_rgc2ni.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769501986/vbh-2_i35fot.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769501986/vbh-3_poxaqv.png",
    ],
    mapLink: "https://maps.app.goo.gl/rwVdkSCqRWmwG6Pd9",
    driveLink:"https://drive.google.com/file/d/1AzoDWrBPpU351MEtJ6-ch3Y5BtPv9h-7/view?usp=sharing",
    contact: {
      name: "Sales Office",
      role: "Office no 804, 72 Corp",
      phone: "+919322635844",
    },
  },
  {
    id: "9",
    slug: "codeword-forever-raj-realty",
    title: "Codeword Forever",
    developer: "Raj Realty",
    tagline: "Luxury Living with Premium Entrance Lobby - 50% Construction Completed",
    location: "Malad West, Mumbai",
    type: "Luxury",
    featured: true,
    description:
      "Codeword Forever by Raj Realty offers premium residences with a luxury entrance lobby now ready. With 50% construction completed and possession in 11 months, this project combines elegance with timely delivery.",
    highlights: [
      "Luxury Entrance Lobby Ready",
      "50% Construction Work Completed",
      "11 Months to Possession",
      "Premium Quality Standards",
      "On-Schedule Development",
      "Elegant Design & Architecture",
      "Quality Craftsmanship",
    ],
    amenities: [
      "Luxury Entrance Lobby",
      "Landscaped Gardens",
      "Fitness Center",
      "Swimming Pool",
      "Kids Play Area",
      "24x7 Security",
      "Ample Parking",
      "Clubhouse",
    ],
    configurations: [
      {
        type: "1 BHK",
        size: "441 sq.ft",
        price: "₹1.17 Cr++",
      },
      {
        type: "1.5 BHK",
        size: "503 sq.ft",
        price: "₹1.33 Cr++",
      },
      {
        type: "2 BHK",
        size: "699 sq.ft",
        price: "₹1.85 Cr++",
      },
      {
        type: "3 BHK",
        size: "841 sq.ft",
        price: "₹2.22 Cr++",
      },
    ],
    possession: {
      constructionTarget: "11 Months",
      reraCommitment: "As per schedule",
    },
    image: "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769505002/raj-2_loue6a.png",
    driveLink:"https://drive.google.com/file/d/1RHspDn0xkSk7sX2jdhEyDkqlcRPZtQVg/view?usp=sharing",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769505001/raj-3_p9iqfx.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769505002/raj-1_amfpco.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769505002/raj-2_loue6a.png",
    ],
  },
  {
    id: "10",
    slug: "runwal-raaya-worli",
    title: "Runwal Raaya Worli",
    developer: "Runwal",
    tagline: "Ultra-Luxury Living in Worli - Private Elevators & Bronze-Finished Windows",
    location: "Worli, Mumbai",
    type: "Luxury",
    featured: true,
    description:
      "Runwal Raaya Worli is an ultra-luxury residential development offering bespoke living experiences with curated amenities, private elevators, and exquisite architectural details. Located on 4.2 acres in prime Worli, featuring two iconic towers with 300 units of premium configurations.",
    highlights: [
      "4.2 Acre Land Parcel",
      "Tower-1: 72 floors with Warm Shell Apartments",
      "Tower-2: 68 floors with Bare Shell Apartments",
      "30,000 sq. ft. Clubhouse",
      "60+ Curated Amenities",
      "Private Elevators",
      "Bronze-Finished Openable Windows",
      "Landscaping by Site Tech-tonics",
      "Structural Architecture by Broadway Malyan",
    ],
    amenities: [
      "60+ Curated Amenities",
      "Private Elevators",
      "Bronze-Finished Openable Windows",
      "Landscaping by Site Tech-tonics",
      "Structural Architect - Broadway Malyan",
      "30,000 sq. ft. Clubhouse",
      "Grand Entrance Lobby",
      "24x7 CCTV & Security",
      "Fire Safety Systems",
      "Ample Parking Space",
    ],
    configurations: [
      {
        wing: "Tower-1",
        type: "3 BHK",
        size: "1738 – 1979 sq. ft.",
        price: "₹65,000 psf++",
      },
      {
        wing: "Tower-1",
        type: "4 BHK",
        size: "2208 – 2508 sq. ft.",
        price: "₹65,000 psf++",
      },
      {
        wing: "Tower-2",
        type: "5 BHK",
        size: "4285 – 4881 sq. ft.",
        price: "₹65,000 psf++",
      },
    ],
    possession: {
      constructionTarget: "2030",
      reraCommitment: "2030",
    },
    image: "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769595147/raya-1_qukgx1.jpg",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769595150/raya-2_f8myb4.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769595148/raya-3_hxdnmo.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769595147/raya-1_qukgx1.jpg",
    ],
  },
  {
    id: "11",
    slug: "west-10-andheri-west",
    title: "WEST 10 (Exclusive Opportunity – New Launch)",
    developer: "Code Name: WEST 10",
    tagline: "Luxury 2 & 4 BHK elite residences with 15+ premium lifestyle amenities.",
    location:
      "Opp. BMW Showroom, CD Barfiwala Road, Juhu Lane, Andheri West, Mumbai – 400058",
    type: "Luxury",
    featured: true,
    description:
      "WEST 10 is an exclusive new launch in Andheri West offering luxury 2 & 4 BHK elite residences. Plinth completed and construction is in full swing with a limited-period offer and attractive builder subvention plan.",
    highlights: [
      "15+ premium lifestyle amenities",
      "Attractive builder subvention plan",
      "30% on booking, 40% on top slab, 30% on possession",
      "Limited-period offer",
      "Plinth completed; construction in full swing",
      "Prime location on Juhu Lane, Andheri West",
    ],
    amenities: [
      "Premium lifestyle amenities",
      "Secure gated access",
      "Modern fitness facilities",
      "Landscaped leisure zones",
      "24x7 Security",
      "Ample Parking",
    ],
    configurations: [
      {
        type: "2 BHK",
        size: "Details on request",
        price: "Details on request",
      },
      {
        type: "4 BHK",
        size: "Details on request",
        price: "Details on request",
      },
    ],
    possession: {
      constructionTarget: "Plinth completed",
      reraCommitment: "Construction in full swing",
    },
    image:
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769846940/west-1_itma49.png",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769846940/west_2_ly4kh9.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769846940/west_3_zqzmkp.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769846940/west-1_itma49.png",
    ],
    driveLink:
      "https://drive.google.com/file/d/17pvQdC6V92slYHP2vsa-4AtJmKPkIu-0/view?usp=sharing",
  },
  {
    id: "12",
    slug: "lt-realty-evara-heights-thane",
    title: "L&T Realty EVARA Heights",
    developer: "L&T Realty",
    tagline:
      "Luxury elevated lifestyle next to Lake Shore Mall (Viviana) in Thane.",
    location: "Thane West, Mumbai Metropolitan Region",
    type: "Luxury",
    featured: true,
    description:
      "EVARA Heights is a premium development on a 10-acre land parcel in Thane with iconic towers, 7-level car parking, and 4 levels of luxurious amenities. Featuring a 45,000 sq.ft Perch Clubhouse and excellent connectivity near Cadbury Metro station.",
    highlights: [
      "10-acre land parcel",
      "Phase 1 launched – 3 iconic towers",
      "7-level car parking",
      "56 & 38-story habitable floors",
      "4 levels of luxurious amenities",
      "45,000 sq.ft Perch Clubhouse (first in Thane)",
      "Cadbury Metro station opposite",
      "Possession (RERA): Aug 2030",
      "Jodi & Duplex options available",
    ],
    amenities: [
      "45,000 sq.ft Perch Clubhouse",
      "2 Swimming Pools",
      "2 Gyms & Indoor Game Zone",
      "2 Multipurpose Party Halls",
      "Pickleball Court",
      "Pet Corner",
      "Lawn Tennis & Indoor Badminton Court",
      "Fitness & Wellness Facilities",
      "Outdoor Leisure Areas",
      "Salon & Spa",
      "60% Open Space & Recreational Amenities",
    ],
    configurations: [
      {
        wing: "Tower 1",
        type: "2 BHK",
        size: "850 sqft",
        price: "₹1.90 Cr++ (All-in ₹2.21 Cr)",
      },
      {
        wing: "Tower 2",
        type: "3 BHK",
        size: "1057 sqft",
        price: "₹2.51 Cr++ (All-in ₹2.89 Cr)",
      },
      {
        wing: "Tower 2",
        type: "3 BHK",
        size: "1214 sqft",
        price: "₹2.91 Cr++ (All-in ₹3.34 Cr)",
      },
      {
        wing: "Tower 4",
        type: "4 BHK",
        size: "1930 sqft",
        price: "₹4.83 Cr++ (All-in ₹5.49 Cr)",
      },
      {
        wing: "Tower 4",
        type: "4 BHK",
        size: "2235 sqft",
        price: "₹5.59 Cr++ (All-in ₹6.34 Cr)",
      },
    ],
    possession: {
      constructionTarget: "Aug 2030",
      reraCommitment: "Aug 2030",
    },
    image:
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769847199/lt-3_ozbgqn.png",
    gallery: [
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769847199/lt-2_eiwsfw.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769847199/lt-1_ddxsoq.png",
      "https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769847199/lt-3_ozbgqn.png",
    ],
    driveLink:
      "https://drive.google.com/file/d/1xe9A88AdQrnZ9lx8YVlwS_aDNs11v6Py/view?usp=sharing",
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
