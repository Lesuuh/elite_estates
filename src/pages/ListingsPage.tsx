import { useState } from "react";
import {
  SlidersHorizontal,
  ChevronDown,
  Grid,
  List as ListIcon,
} from "lucide-react";
import properties from "../data";
import PropertyCard from "../components/PropertyCard";
import type { PropertyCategory } from "../types";

const ListingsPage = () => {
  const [filters, setFilters] = useState({
    price: null as { min: number; max: number } | null,
    types: [] as PropertyCategory[],
    location: "",
  });

  const [view, setView] = useState<"grid" | "list">("grid");

  const propertyTypes: { label: string; value: PropertyCategory }[] = [
    { label: "Villas", value: "villa" },
    { label: "Penthouses", value: "penthouse" },
    { label: "Mansions", value: "mansion" },
    { label: "Apartments", value: "apartment" },
  ];

  const cities = [
    "Lagos, NG",
    "Abuja, NG",
    "Port Harcourt, NG",
    "Kano, NG",
    "Ibadan, NG",
    "Owerri, NG",
    "Akwa Ibom, NG",
    "Calabar, NG",
  ];

  const handleCheckboxChange = (value: PropertyCategory) => {
    setFilters((prev) => {
      const alreadySelected = prev.types.includes(value);

      return {
        ...prev,
        types: alreadySelected
          ? prev.types.filter((type) => type !== value)
          : [...prev.types, value as PropertyCategory],
      };
    });
  };

  const priceOptions = [
    { label: "Under ₦5M", min: 0, max: 5000000 },
    { label: "₦5M – ₦20M", min: 5000000, max: 20000000 },
    { label: "₦20M – ₦100M", min: 20000000, max: 100000000 },
    { label: "₦100M+", min: 100000000, max: Infinity },
  ];

  const parsePrice = (price: string) => Number(price.replace(/,/g, ""));

  const filteredProperties = properties.filter((property) => {
    // Price
    const propertyPrice = parsePrice(property.price);
    if (filters.price) {
      if (
        propertyPrice < filters.price.min ||
        propertyPrice > filters.price.max
      )
        return false;
    }

    // Types
    if (
      filters.types.length > 0 &&
      !filters.types.includes(property.category as PropertyCategory)
    )
      return false;

    // Location
    if (filters.location) {
      // city list items include a country code (e.g. "Lagos, NG").
      // match based on just the city name so that property.location
      // strings like "Banana Island, Lagos" are correctly detected.
      const city = filters.location.split(",")[0];
      if (!property.location.includes(city)) return false;
    }

    return true;
  });

  const clearFilters = () => {
    setFilters({
      price: null,
      types: [],
      location: "",
    });
  };

  return (
    <section className=" min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-dark pt-32 pb-20 px-6 text-center ">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 italic">
          The <span className="text-accent">Signature</span> Collection
        </h1>
        <p className="text-gray-400 text-sm uppercase tracking-[0.3em] font-light">
          Home / Exclusive Listings
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filter */}
          <aside className="lg:w-1/4 space-y-10">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-8">
                <SlidersHorizontal size={18} className="text-accent" />
                <span className="uppercase text-xs font-bold tracking-widest text-primary">
                  Refine Search
                </span>
              </div>

              {/* Price Range Filter */}
              <div className="mb-10">
                <h4 className="text-sm font-bold text-primary mb-6 uppercase tracking-wider">
                  Price Range
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  {priceOptions.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          price: { min: option.min, max: option.max },
                        }))
                      }
                      className={`
          px-4 py-3 rounded-full text-xs font-semibold transition-all duration-300 border
          ${
            filters &&
            filters?.price?.min === option.min &&
            filters?.price?.max === option.max
              ? "bg-accent text-white border-accent shadow-lg"
              : "bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent"
          }
        `}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Type Filter */}
              <div className="mb-10">
                <h4 className="text-sm font-bold text-primary mb-6 uppercase tracking-wider">
                  Property Type
                </h4>
                <div className="space-y-3">
                  {propertyTypes.map((type) => (
                    <label
                      key={type.label}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={filters.types.includes(type.value)}
                        onChange={() => handleCheckboxChange(type.value)}
                        className="w-4 h-4 border-gray-300 rounded accent-accent"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-accent transition-colors">
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-10">
                <h4 className="text-sm font-bold text-primary mb-6 uppercase tracking-wider">
                  Location
                </h4>
                <select
                  value={filters.location}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  className="w-full bg-gray-50 border border-gray-100 p-3 rounded-xl text-sm outline-none focus:border-accent"
                >
                  <option value="">Select a location</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <button className="w-full py-4 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-gray-100 gap-6">
              <p className="text-gray-500 text-sm">
                Showing{" "}
                <span className="text-primary font-bold">
                  {filteredProperties.length}
                </span>{" "}
                luxury residences
              </p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 border-r border-gray-200 pr-6">
                  <button
                    onClick={() => setView("grid")}
                    className={`p-2 transition-colors ${view === "grid" ? "text-primary" : "text-gray-300 hover:text-accent"}`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={`p-2 transition-colors ${view === "list" ? "text-primary" : "text-gray-300 hover:text-accent"}`}
                  >
                    <ListIcon size={18} />
                  </button>
                </div>

                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Sort By:
                  </span>
                  <span className="text-xs text-gray-500 group-hover:text-accent">
                    Newest First
                  </span>
                  <ChevronDown size={14} className="text-gray-400" />
                </div>
              </div>
            </div>

            {filteredProperties.length > 0 ? (
              <>
                <div
                  className={`grid grid-cols-1 ${view === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-1"} gap-x-8 gap-y-12`}
                >
                  {filteredProperties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      view={view}
                    />
                  ))}
                </div>

                {/* Pagination (Only show if results > 0) */}
                {/* Pagination */}
                {/* <div className="mt-20 flex justify-center items-center gap-4">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:border-accent hover:text-accent transition-all">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:border-accent hover:text-accent transition-all">
                    3
                  </button>
                  <span className="text-gray-300 mx-2">...</span>
                  <button className="px-6 py-2 rounded-full border border-gray-100 text-xs font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-50 transition-all">
                    Next
                  </button>
                </div> */}
              </>
            ) : (
              <EmptyListings resetFilters={clearFilters} />
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ListingsPage;

const EmptyListings = ({ resetFilters }: { resetFilters: () => void }) => {
  return (
    <div className="col-span-full py-24 px-6 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Visual Indicator */}
      <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-8 border border-gray-100">
        <SlidersHorizontal
          size={32}
          className="text-gray-300"
          strokeWidth={1}
        />
      </div>

      {/* Messaging */}
      <h3 className="text-3xl font-serif text-primary mb-4 italic">
        No matches found for your criteria
      </h3>
      <p className="text-gray-500 max-w-md font-light leading-relaxed mb-10">
        Our signature collection is constantly evolving. Your perfect residence
        might be an off-market exclusive or currently under acquisition.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={resetFilters}
          className="bg-primary text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all shadow-lg"
        >
          Clear All Filters
        </button>
        <button className="border border-gray-200 text-primary px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-50 transition-all">
          Contact Concierge
        </button>
      </div>
    </div>
  );
};
