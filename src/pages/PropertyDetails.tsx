import { Link, useParams } from "react-router-dom";
import properties from "../data";
import { ChevronRight } from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams();

  const property = properties.find((p) => p.id === Number(id));

  if (!property) return <p>Property not found</p>;

  return (
    <section className="h-screen pt-32 pb-20 px-6 ">
      <div className="flex items-center flex-wrap gap-2 text-sm text-gray-500 bg-gray-50 border-y border-gray-100 py-4 px-6">
        <Link to="/" className="hover:text-accent transition-colors">
          Home
        </Link>

        <ChevronRight size={14} className="text-gray-400" />

        <Link to="/listings" className="hover:text-accent transition-colors">
          Listings
        </Link>

        <ChevronRight size={14} className="text-gray-400" />

        <span className="text-gray-400">{property.location.split(",")[0]}</span>

        <ChevronRight size={14} className="text-gray-400" />

        <span className="text-primary font-medium truncate max-w-[200px]">
          {property.title}
        </span>
      </div>
    </section>
  );
};

export default PropertyDetails;
