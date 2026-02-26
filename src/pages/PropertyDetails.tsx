import { Link, useParams } from "react-router-dom";
import properties from "../data";
import {
  ChevronRight,
  Maximize2,
  MapPin,
  // Share2,
  // Heart,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));
  const [morePhotosModalOpen, setMorePhotosModalOpen] = useState(false);

  useEffect(() => {
    if (morePhotosModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [morePhotosModalOpen]);

  if (!property)
    return (
      <div className="pt-40 text-center font-serif italic text-2xl">
        Property not found
      </div>
    );

  // Image optimization helper
  const optimize = (url: string, width: number) =>
    `${url}&w=${width}&q=80&auto=format`;

  const openMorePhotosModal = () => {
    setMorePhotosModalOpen(true);
  };

  return (
    <section className={`min-h-screen pt-30 pb-20 px-6 max-w-7xl mx-auto `}>
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            <ChevronRight size={10} />
            <Link to="/listings" className="hover:text-accent">
              Collection
            </Link>
            <ChevronRight size={10} />
            <span className="text-primary">{property.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-3">
            {property.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-500 font-light">
            <MapPin size={16} className="text-accent" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* <div className="flex gap-4">
          <button className="p-4 rounded-full border border-gray-100 hover:bg-gray-50 transition-colors">
            <Share2 size={18} />
          </button>
          <button className="p-4 rounded-full border border-gray-100 hover:bg-gray-50 transition-colors">
            <Heart size={18} />
          </button>
        </div> */}
      </div>

      {/* Luxury Image Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px] md:h-[750px]">
        {/* Main Feature Image */}
        <div className="md:col-span-8 relative group overflow-hidden rounded-2xl">
          <img
            src={optimize(property.images[0], 1200)}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-xl">
            <Maximize2 size={20} className="text-primary" />
          </button>
        </div>

        {/* Side Stack */}
        <div className="md:col-span-4 flex flex-col gap-4 h-full">
          <div className="h-1/2 relative group overflow-hidden rounded-2xl">
            <img
              src={optimize(property.images[1], 800)}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="h-1/2 relative group overflow-hidden rounded-2xl">
            <img
              src={optimize(property.images[2], 800)}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* View All Overlay */}
            {property.images.length > 3 && (
              <button
                onClick={() => openMorePhotosModal()}
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group-hover:bg-black/20 transition-all"
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group-hover:bg-black/20 transition-all">
                  <span className="text-white font-bold tracking-widest uppercase text-xs">
                    {property.images.length - 3} More Photos
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Property Details Section (Short Version) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-serif text-primary mb-6">
            Property Overview
          </h2>
          <p className="text-gray-600 font-light text-xl leading-relaxed italic">
            This exceptional {property.category} in{" "}
            {property.location.split(",")[0]} represents the pinnacle of luxury
            living, blending modern architectural lines with functional
            elegance.
          </p>

          <div className="grid grid-cols-3 gap-10 mt-12 py-10 border-y border-gray-100">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                Bedrooms
              </p>
              <p className="text-2xl font-serif text-primary">
                {property.features.bedrooms}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                Bathrooms
              </p>
              <p className="text-2xl font-serif text-primary">
                {property.features.bathrooms}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                Total Area
              </p>
              <p className="text-2xl font-serif text-primary">
                {property.features.area}
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Booking/Contact Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-primary text-white p-10 rounded-[32px] shadow-2xl">
            <p className="text-accent text-xs uppercase tracking-[0.3em] font-bold mb-4">
              Investment Price
            </p>
            <h3 className="text-4xl font-serif mb-10">
              ₦{property.price.toLocaleString("en-NG")}
            </h3>
            <button className="w-full bg-accent text-primary py-5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">
              Acquire Property
            </button>
            <p className="text-center text-white/40 text-[10px] mt-6 leading-relaxed">
              Inquiry will be routed to a Private Wealth Advisor.
            </p>
          </div>
        </div>
      </div>
      {/* Full Screen Modal */}
      {morePhotosModalOpen && (
        <MorePhotosModal
          images={property.images}
          title={property.title}
          onClose={() => setMorePhotosModalOpen(false)}
          optimize={optimize}
        />
      )}
    </section>
  );
};

export default PropertyDetails;

interface MorePhotosModalProps {
  images: string[];
  title: string;
  onClose: () => void;
  optimize: (url: string, width: number) => string;
}

const MorePhotosModal = ({
  images,
  title,
  onClose,
  optimize,
}: MorePhotosModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-primary-dark/98 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Modal Header */}
      <div className="flex items-center justify-between p-6 md:px-12 border-b border-white/5 bg-primary-dark/50 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h2 className="text-white font-serif text-xl md:text-2xl">{title}</h2>
          <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">
            Full Property Gallery — {images.length} Images
          </p>
        </div>
        <button
          onClick={onClose}
          className="bg-white/5 hover:bg-accent hover:text-primary p-3 rounded-full text-white transition-all duration-300 group"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform" />
        </button>
      </div>

      {/* Modal Content - Scrollable Grid */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid rounded-2xl overflow-hidden group"
              >
                <img
                  src={optimize(img, 1000)}
                  alt={`${title} view ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="p-6 text-center border-t border-white/5 text-white/20 text-[10px] uppercase tracking-[0.5em]">
        EstatePro Private Collection
      </div>
    </div>
  );
};
