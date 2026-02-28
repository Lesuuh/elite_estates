import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Property } from "../types";
import { useWatchlist } from "../context/watchlist-context";

type PropertyCardProps = {
  property: Property;
  view?: "grid" | "list";
};

const PropertyCard = ({ property, view = "grid" }: PropertyCardProps) => {
  const { isWatchlisted, addToWatchlist, removeFromWatchlist } = useWatchlist();

  const handleToggleWatchlist = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isWatchlisted(property.id.toString())) {
      removeFromWatchlist(property.id.toString());
    } else {
      addToWatchlist(property);
    }
  };

  if (view === "list") {
    // LIST VIEW
    return (
      <Link
        to={`/properties/${property.id}`}
        className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-all"
      >
        {/* Image */}
        <div className="relative w-full md:w-64 h-40 md:h-auto overflow-hidden ">
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-serif text-xl text-primary tracking-tight">
                ₦{property.price.toLocaleString("en-NG")}
              </h2>
              {property.featured && (
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Signature
                </span>
              )}
            </div>

            <h3 className="text-lg font-medium text-gray-900">
              {property.title}
            </h3>

            <div className="flex items-center gap-2 text-gray-400 mt-2">
              <MapPin size={14} className="text-accent" />
              <span className="text-sm">{property.location}</span>
            </div>

            {/* Features */}
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col items-center">
                <span className="text-primary font-bold">
                  {property.features.bedrooms}
                </span>
                <span className="text-xs text-gray-400 uppercase">Beds</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-primary font-bold">
                  {property.features.bathrooms}
                </span>
                <span className="text-xs text-gray-400 uppercase">Baths</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-primary font-bold">
                  {property.features.area}
                </span>
                <span className="text-xs text-gray-400 uppercase">Sq Ft</span>
              </div>
            </div>
          </div>

          <button className="mt-4 self-start px-4 py-2 bg-primary text-white rounded-full text-xs font-bold hover:bg-accent transition-all">
            View Details
          </button>
        </div>
      </Link>
    );
  }
  return (
    <Link to={`/properties/${property.id}`} className="block">
      <div className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-4/3  overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            width={800}
            height={600}
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
          <button
            onClick={handleToggleWatchlist}
            className="absolute top-5 right-5 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-accent hover:text-primary transition-all duration-300"
          >
            {isWatchlisted(property.id.toString()) ? (
              <Heart size={16} fill="currentColor" strokeWidth={0} />
            ) : (
              <Heart size={16} strokeWidth={1.5} />
            )}
          </button>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-linear-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <button className="w-full py-3 bg-white text-primary font-bold text-xs uppercase tracking-widest rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              View Property Details
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-serif text-3xl text-primary tracking-tight">
              ₦{property.price.toLocaleString("en-NG")}
            </h2>
            {/* <div className="flex items-center gap-1 text-accent">
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                Listed by EstatePro
              </span>
            </div> */}
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
