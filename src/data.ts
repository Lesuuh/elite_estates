import type { Property } from "./types";

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Waterfront Villa in Banana Island",
    category: "villa",
    price: "2,500,000,000",
    location: "Banana Island, Lagos",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 6, bathrooms: 7, area: "850 sqm" },
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 2,
    title: "Modern Penthouse in Lekki Phase 1",
    category: "penthouse",
    price: "450,000,000",
    location: "Lekki Phase 1, Lagos",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 4, bathrooms: 4, area: "320 sqm" },
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 3,
    title: "Contemporary Mansion in Ikoyi",
    category: "mansion",
    price: "1,200,000,000",
    location: "Ikoyi, Lagos",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 5, bathrooms: 6, area: "600 sqm" },
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 4,
    title: "Family Villa in Ajah",
    category: "villa",
    price: "180,000,000",
    location: "Ajah, Lagos",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 3, bathrooms: 3, area: "210 sqm" },
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 5,
    title: "Luxury Penthouse in Victoria Island",
    category: "penthouse",
    price: "650,000,000",
    location: "Victoria Island, Lagos",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 3, bathrooms: 3, area: "280 sqm" },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 6,
    title: "Modern Villa in Surulere",
    category: "villa",
    price: "220,000,000",
    location: "Surulere, Lagos",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1000",
    featured: false,
    features: { bedrooms: 4, bathrooms: 4, area: "350 sqm" },
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 7,
    title: "Executive Mansion in Ikeja GRA",
    category: "mansion",
    price: "900,000,000",
    location: "Ikeja GRA, Lagos",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 6, bathrooms: 7, area: "720 sqm" },
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 8,
    title: "Beachfront Villa in Port Harcourt",
    category: "villa",
    price: "350,000,000",
    location: "Port Harcourt, Rivers",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 4, bathrooms: 4, area: "400 sqm" },
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 9,
    title: "Penthouse with City View in Abuja",
    category: "penthouse",
    price: "550,000,000",
    location: "Maitama, Abuja",
    image: "https://images.unsplash.com/photo-1493397212122-2b85edf8675f?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 3, bathrooms: 3, area: "280 sqm" },
    images: [
      "https://images.unsplash.com/photo-1493397212122-2b85edf8675f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 10,
    title: "Mansion in Kano GRA",
    category: "mansion",
    price: "1,100,000,000",
    location: "Kano GRA, Kano",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
    featured: false,
    features: { bedrooms: 5, bathrooms: 5, area: "650 sqm" },
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 11,
    title: "Luxury Apartment in Ibadan",
    category: "apartment",
    price: "120,000,000",
    location: "Ring Road, Ibadan",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 2, bathrooms: 2, area: "120 sqm" },
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 12,
    title: "Villa in Owerri",
    category: "villa",
    price: "280,000,000",
    location: "Owerri, Imo",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000",
    featured: false,
    features: { bedrooms: 3, bathrooms: 3, area: "320 sqm" },
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 13,
    title: "Penthouse in Uyo",
    category: "penthouse",
    price: "480,000,000",
    location: "Uyo, Akwa Ibom",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 3, bathrooms: 3, area: "290 sqm" },
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1493397212122-2b85edf8675f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 14,
    title: "Mansion in Calabar",
    category: "mansion",
    price: "950,000,000",
    location: "Calabar, Cross River",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 6, bathrooms: 6, area: "700 sqm" },
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 15,
    title: "Apartment in Abuja Central",
    category: "apartment",
    price: "150,000,000",
    location: "Central Area, Abuja",
    image: "https://images.unsplash.com/photo-1460317442991-0ec239fe976a?auto=format&fit=crop&q=80&w=1000",
    featured: false,
    features: { bedrooms: 2, bathrooms: 2, area: "130 sqm" },
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec239fe976a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 16,
    title: "Executive Estate in Ajah",
    category: "villa",
    price: "180,000,000",
    location: "Ajah, Lagos",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 3, bathrooms: 3, area: "210 sqm" },
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 17,
    title: "Executive Penthouse in Victoria Island",
    category: "penthouse",
    price: "750,000,000",
    location: "Victoria Island, Lagos",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 4, bathrooms: 4, area: "300 sqm" },
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 18,
    title: "Modern Villa in Surulere",
    category: "villa",
    price: "220,000,000",
    location: "Surulere, Lagos",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000",
    featured: false,
    features: { bedrooms: 4, bathrooms: 4, area: "350 sqm" },
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 19,
    title: "Luxury Apartment in Ikeja",
    category: "apartment",
    price: "200,000,000",
    location: "Ikeja, Lagos",
    image: "https://images.unsplash.com/photo-1545324418-f1d3ac59749d?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 3, bathrooms: 2, area: "250 sqm" },
    images: [
      "https://images.unsplash.com/photo-1545324418-f1d3ac59749d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 20,
    title: "Penthouse with City View in Maitama",
    category: "penthouse",
    price: "550,000,000",
    location: "Maitama, Abuja",
    image: "https://images.unsplash.com/photo-1493397212122-2b85edf8675f?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 3, bathrooms: 3, area: "280 sqm" },
    images: [
      "https://images.unsplash.com/photo-1493397212122-2b85edf8675f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 21,
    title: "Mansion in Asokoro",
    category: "mansion",
    price: "1,000,000,000",
    location: "Asokoro, Abuja",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 5, bathrooms: 5, area: "600 sqm" },
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 22,
    title: "Modern Villa in Garki",
    category: "villa",
    price: "380,000,000",
    location: "Garki, Abuja",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000",
    featured: false,
    features: { bedrooms: 4, bathrooms: 4, area: "320 sqm" },
    images: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 23,
    title: "Luxury Apartment in Wuse",
    category: "apartment",
    price: "150,000,000",
    location: "Wuse, Abuja",
    image: "https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 2, bathrooms: 2, area: "180 sqm" },
    images: [
      "https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 24,
    title: "Beachfront Villa in Port Harcourt",
    category: "villa",
    price: "350,000,000",
    location: "Port Harcourt, Rivers",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 4, bathrooms: 4, area: "400 sqm" },
    images: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 25,
    title: "Penthouse with Lagoon View",
    category: "penthouse",
    price: "480,000,000",
    location: "GRA, Port Harcourt",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 3, bathrooms: 3, area: "290 sqm" },
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1493397212122-2b85edf8675f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 26,
    title: "Executive Mansion in Trans Amadi",
    category: "mansion",
    price: "900,000,000",
    location: "Trans Amadi, Port Harcourt",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
    featured: true,
    features: { bedrooms: 5, bathrooms: 6, area: "600 sqm" },
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: 27,
    title: "Modern Apartment in Rumuola",
    category: "apartment",
    price: "160,000,000",
    location: "Rumuola, Port Harcourt",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
    featured: false,
    features: { bedrooms: 2, bathrooms: 2, area: "150 sqm" },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1460317442991-0ec239fe976a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1000"
    ]
  }
];

export default properties;