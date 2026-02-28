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
  price: number;
  location: string;
  status: string;
  image: string;
  images: string[];
  featured: boolean;
  features: PropertyFeatures;
  createdAt: string;
}

export type User = {
  id: string;
  email: string;
  name: string;
};
