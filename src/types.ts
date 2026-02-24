export type PropertyCategory = "villa" | "penthouse" | "mansion" | "apartment";

export interface PropertyFeatures {
  bedrooms: number;
  bathrooms: number;
  area: string;
}

export interface Property {
  id: number;
  title: string;
  category: PropertyCategory;
  price: string;
  location: string;
  image: string;
  images: string[];
  featured: boolean;
  features: PropertyFeatures;
}
