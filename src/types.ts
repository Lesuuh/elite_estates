export type PropertyCategory = "villa" | "penthouse" | "mansion";

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
  featured: boolean;
  features: PropertyFeatures;
}