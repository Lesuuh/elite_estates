import type { Property } from "./types";

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Waterfront Villa in Banana Island",
    category: "villa",
    price: "₦2,500,000,000",
    location: "Banana Island, Lagos",
    image: "/re/listing_card_1.png",
    featured: true,
    features: {
      bedrooms: 6,
      bathrooms: 7,
      area: "850 sqm",
    },
  },
  {
    id: 2,
    title: "Modern Penthouse in Lekki Phase 1",
    category: "penthouse",
    price: "₦450,000,000",
    location: "Lekki Phase 1, Lagos",
    image: "/re/listing_card_2.png",
    featured: true,
    features: {
      bedrooms: 4,
      bathrooms: 4,
      area: "320 sqm",
    },
  },
  {
    id: 3,
    title: "Contemporary Mansion in Ikoyi",
    category: "mansion",
    price: "₦1,200,000,000",
    location: "Ikoyi, Lagos",
    image: "/re/listing_card_3.png",
    featured: true,
    features: {
      bedrooms: 5,
      bathrooms: 6,
      area: "600 sqm",
    },
  },
  {
    id: 4,
    title: "Family Villa in Ajah",
    category: "villa",
    price: "₦180,000,000",
    location: "Ajah, Lagos",
    image: "/re/listing_card_4.png",
    featured: true,
    features: {
      bedrooms: 3,
      bathrooms: 3,
      area: "210 sqm",
    },
  },
  {
    id: 5,
    title: "Luxury Penthouse in Victoria Island",
    category: "penthouse",
    price: "₦650,000,000",
    location: "Victoria Island, Lagos",
    image: "/re/listing_card_5.png",
    featured: true,
    features: {
      bedrooms: 3,
      bathrooms: 3,
      area: "280 sqm",
    },
  },
  {
    id: 6,
    title: "Modern Villa in Surulere",
    category: "villa",
    price: "₦220,000,000",
    location: "Surulere, Lagos",
    image: "/re/listing_card_6.png",
    featured: false,
    features: {
      bedrooms: 4,
      bathrooms: 4,
      area: "350 sqm",
    },
  },
  {
    id: 7,
    title: "Executive Mansion in Ikeja GRA",
    category: "mansion",
    price: "₦900,000,000",
    location: "Ikeja GRA, Lagos",
    image: "/re/listing_card_6.png",
    featured: true,
    features: {
      bedrooms: 6,
      bathrooms: 7,
      area: "720 sqm",
    },
  },
];

export default properties;
