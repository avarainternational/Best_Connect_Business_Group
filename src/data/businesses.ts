export interface Business {
  id: string;
  name: string;
  shortName: string;
  industry: string;
  region: string;
  description: string;
  overview: string;
  capabilities: string[];
  logo: string;
  bgImage: string;
  accentColor: string;
  href: string;
}

export const businesses: Business[] = [
  {
    id: "dtwo",
    name: "Dtwo Business Group",
    shortName: "Dtwo",
    industry: "Retail & E-Commerce",
    region: "Myanmar",
    description:
      "Three physical outlets — two liquor stores and one minimart — alongside online liquor sales and delivery services across primary urban hubs.",
    overview:
      "Dtwo Business Group operates a growing retail network combining traditional brick-and-mortar stores with modern e-commerce. The group manages two liquor stores, one minimart, an online storefront, and delivery services, all connected through centralized inventory and order management systems.",
    capabilities: [
      "Retail operations across multiple physical outlets",
      "Online storefront and e-commerce platform",
      "Store inventory management",
      "Order fulfillment and regional delivery",
    ],
    logo: "/logos/dtwobusiness-logo.png",
    bgImage: "/businesses/dtwo-bg.jpg",
    accentColor: "#006FB9",
    href: "/businesses#dtwo",
  },
  {
    id: "infinity-water",
    name: "Infinity Water",
    shortName: "Infinity Water",
    industry: "Purified Water & Wellness",
    region: "Myanmar",
    description:
      "Purified bottled drinking-water production and distribution, with a companion hydration and family-wellness mobile application.",
    overview:
      "Infinity Water provides purified bottled drinking water through an established production and distribution network. The business also features a companion hydration tracking and family wellness mobile app designed to engage health-conscious consumers.",
    capabilities: [
      "Purified water bottling and production",
      "Distribution network management",
      "Hydration tracking mobile application",
      "Wellness engagement platform",
    ],
    logo: "/logos/infinity_wellness_logo.png",
    bgImage: "/businesses/infinity-water-bg.jpg",
    accentColor: "#006FB9",
    href: "/businesses#infinity-water",
  },
  {
    id: "aldora-hill",
    name: "Aldora Hill",
    shortName: "Aldora Hill",
    industry: "Hospitality",
    region: "Kalaw, Shan State, Myanmar",
    description:
      "Boutique hill-station resort offering high-end eco-resort stays, retreats, guest services, and curated local experiences in Kalaw.",
    overview:
      "Aldora Hill is a boutique hill-station resort nestled in Kalaw, Shan State. It delivers high-end eco-resort experiences including curated retreats, personalized guest services, and authentic local cultural experiences, all managed through modern hospitality operations.",
    capabilities: [
      "Boutique resort operations",
      "Reservation and room management",
      "Guest experience curation",
      "Retreat and event management",
    ],
    logo: "/logos/Aldora Hill Boutique Resort Logo.png",
    bgImage: "/businesses/aldora-hill-bg.jpg",
    accentColor: "#84C425",
    href: "/businesses#aldora-hill",
  },
  {
    id: "sein-shwe-pyae-sone",
    name: "Sein Shwe Pyae Sone",
    shortName: "Sein Shwe Pyae Sone",
    industry: "Luxury Retail",
    region: "Myanmar",
    description:
      "Fine jewelry and gemstone retail featuring custom gold work, bespoke jewelry design, and traditional artisan manufacturing.",
    overview:
      "Sein Shwe Pyae Sone is a luxury jewelry retailer specializing in fine gemstones, custom gold work, and bespoke jewelry design. The business blends traditional artisan craftsmanship with modern retail management and inventory systems.",
    capabilities: [
      "Fine jewelry and gemstone retail",
      "Custom and bespoke jewelry design",
      "Master craftsmanship workshop",
      "Inventory and stock management",
    ],
    logo: "/logos/Sein Shwe Pyae Sone logo.png",
    bgImage: "/businesses/sein-shwe-jewelry-bg.jpg",
    accentColor: "#006FB9",
    href: "/businesses#sein-shwe-pyae-sone",
  },
  {
    id: "avara",
    name: "AVARA International",
    shortName: "AVARA",
    industry: "Trading, Logistics & Capital",
    region: "Bangkok, Thailand",
    description:
      "Cross-border trading, medicine and cargo logistics, Thai real-estate investments, market-entry consulting, and e-commerce distribution.",
    overview:
      "AVARA International operates from Bangkok, managing cross-border trade, pharmaceutical and cargo logistics, real-estate investment facilitation, market-entry consulting, and regional e-commerce distribution services that bridge Myanmar and Thailand.",
    capabilities: [
      "Cross-border trade facilitation",
      "Medicine and cargo logistics",
      "Capital and deal-flow support",
      "Market-entry consulting and distribution",
    ],
    logo: "/logos/Avara International logo.png",
    bgImage: "/businesses/avara-logistics-bg.jpg",
    accentColor: "#84C425",
    href: "/businesses#avara",
  },
  {
    id: "ihsm",
    name: "International Hospital Service Myanmar",
    shortName: "IHSM",
    industry: "Healthcare Concierge",
    region: "Myanmar & Thailand",
    description:
      "Coordinates referrals for Myanmar patients to international hospitals — consultations, admissions, treatment plans, and travel arrangements.",
    overview:
      "International Hospital Service Myanmar (IHSM) is a healthcare concierge coordinating medical referrals for Myanmar patients to international hospitals, primarily in Thailand. Services include tele-consultations, patient coordination, hospital referrals and admissions, and cross-border medical travel.",
    capabilities: [
      "Tele-consultation coordination",
      "Patient referral and admission management",
      "Treatment plan facilitation",
      "Cross-border medical travel arrangements",
    ],
    logo: "/logos/International Hospital Service Myanmar.png",
    bgImage: "/businesses/ihsm-healthcare-bg.jpg",
    accentColor: "#006FB9",
    href: "/businesses#ihsm",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Businesses", href: "/businesses" },
  { label: "Shared Services", href: "/shared-services" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
];

export const sharedServices = [
  {
    title: "Centralized Management",
    description:
      "Unified leadership and governance that coordinates operations across all six business units, ensuring consistency and strategic alignment.",
    icon: "management",
  },
  {
    title: "Digital Workflows",
    description:
      "Streamlined digital processes that replace paper-heavy administration, enabling real-time tracking and faster decision-making.",
    icon: "digital",
  },
  {
    title: "Inventory & Retail Systems",
    description:
      "Cloud-based point-of-sale and inventory synchronization across retail locations, connecting stores, e-commerce, and warehousing.",
    icon: "inventory",
  },
  {
    title: "Employee Management",
    description:
      "Group-wide HR coordination including recruitment pipelines, onboarding, and performance management across subsidiaries.",
    icon: "hr",
  },
  {
    title: "Hospitality Operations",
    description:
      "Property management and guest experience systems tailored for boutique hospitality businesses within the group.",
    icon: "hospitality",
  },
  {
    title: "Logistics Coordination",
    description:
      "Cross-border shipment tracking, cargo routing, and supply-chain management connecting Myanmar and Thailand operations.",
    icon: "logistics",
  },
  {
    title: "Healthcare Coordination",
    description:
      "Patient referral management, tele-consultation scheduling, and hospital liaison systems for medical concierge services.",
    icon: "healthcare",
  },
  {
    title: "Business Analytics",
    description:
      "Centralized dashboards and reporting tools that provide visibility into performance metrics across the entire portfolio.",
    icon: "analytics",
  },
];
