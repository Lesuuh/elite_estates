import { useState } from "react";
import PropertyCard from "../../components/PropertyCard";
import properties from "../../data";
import { ArrowRight } from "lucide-react";

const FeaturedListing = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Mansion", "Villa", "Penthouse"];

  // Filter properties that are both Featured and match the category
  // const featuredProperties = properties.filter((p) => {
  //   const matchesCategory = filter === "All" || p.type === filter;
  //   return p.featured && matchesCategory;
  // });

  const featuredProperties = properties.filter((p) => {
    const matchesCategory =
      filter === "All" || p.category === filter.toLowerCase();

    return matchesCategory && p.featured;
  });

  return (
    <section className="max-w-7xl mx-auto w-full py-24 px-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-accent"></span>
            <p className="uppercase text-xs tracking-[0.3em] text-accent font-bold">
              Curated Collection
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
            Discover Our <span className="italic">Signature</span> Residences
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${
                filter === cat
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-400 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuredProperties.length > 0 ? (
          featuredProperties.map((property, index) => (
            <div
              key={property.id}
              className="animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "backwards",
              }}
            >
              <PropertyCard property={property} />
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-100 rounded-3xl">
            <p className="text-gray-400 font-light italic text-lg">
              No signature residences currently available in this category.
            </p>
          </div>
        )}
      </div>

      {/* Footer Action */}
      <div className="mt-20 flex flex-col items-center">
        <button className="group cursor-pointer flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full hover:bg-accent transition-all duration-500 shadow-xl active:scale-95">
          <span className="uppercase text-xs font-bold tracking-[0.2em]">
            Explore All Listings
          </span>
          <div className="bg-white/10 p-1 rounded-full group-hover:translate-x-2 transition-transform">
            <ArrowRight size={18} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default FeaturedListing;
