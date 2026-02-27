import { MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  property: any;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
      <div className="h-64 relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full">
          <span className="text-[10px] font-bold uppercase text-primary">
            {property.status}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-serif text-primary">
              {property.title}
            </h4>
            <p className="flex items-center gap-1 text-gray-400 text-xs mt-1">
              <MapPin size={12} className="text-accent" />
              {property.location}
            </p>
          </div>

          <Link
            to={`/properties/${property.id}`}
            className="p-3 bg-gray-50 rounded-full hover:bg-accent hover:text-primary transition-colors"
          >
            <ExternalLink size={18} />
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
          <span className="text-sm text-gray-400">Current Valuation</span>
          <span className="text-xl font-bold text-primary">
            {property.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
