import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Property } from "../types";

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <Link to={`/properties/${property.id}`} className="block">
      <div className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative  overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Status Badges */}
          <div className="absolute top-5 left-5 flex gap-2">
            {property.featured && (
              <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold">
                Signature
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <button className="absolute top-5 right-5 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-accent hover:text-primary transition-all duration-300">
            <Heart size={18} strokeWidth={1.5} />
          </button>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-linear-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <button className="w-full py-3 bg-white text-primary font-bold text-xs uppercase tracking-widest rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              View Property Details
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-7">
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-serif text-3xl text-primary tracking-tight">
              {property.price}
            </h2>
            <div className="flex items-center gap-1 text-accent">
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                Listed by EstatePro
              </span>
            </div>
          </div>

          <h3 className="text-lg font-medium text-gray-900 group-hover:text-accent transition-colors duration-300">
            {property.title}
          </h3>

          <div className="flex items-center gap-1 text-gray-400 mt-2 mb-6">
            <MapPin size={14} className="text-accent" />
            <span className="text-sm font-light">{property.location}</span>
          </div>

          {/* Features: Minimalist Icon Row */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex flex-col items-center gap-1">
              <span className="text-primary font-bold text-sm">
                {property.features.bedrooms}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                Beds
              </span>
            </div>

            <div className="w-px h-6 bg-gray-100"></div>

            <div className="flex flex-col items-center gap-1">
              <span className="text-primary font-bold text-sm">
                {property.features.bathrooms}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                Baths
              </span>
            </div>

            <div className="w-px h-6 bg-gray-100"></div>

            <div className="flex flex-col items-center gap-1">
              <span className="text-primary font-bold text-sm">
                {property.features.area}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                Sq Ft
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
