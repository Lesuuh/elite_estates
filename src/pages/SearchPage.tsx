import { useSearchParams, Link } from "react-router-dom";
import { Search, ArrowRight, Info } from "lucide-react";
import properties from "../data";
import PropertyCard from "../components/PropertyCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  // 1. Get Params
  const type = searchParams.get("type") || "";
  const location = searchParams.get("location") || "";
  const priceParam = searchParams.get("price") || ""; // format: "min-max"

  const priceOptions = [
    { label: "Under ₦250M", min: 0, max: 250000000 },
    { label: "₦250M – ₦750M", min: 250000000, max: 750000000 },
    { label: "₦750M – ₦1.5B", min: 750000000, max: 1500000000 },
    { label: "₦1.5B+", min: 1500000000, max: Infinity },
  ];

  // 2. Derive the selected range object directly from the priceParam string
  const selectedPriceRange = priceOptions.find((opt) => {
    if (!priceParam) return false;
    const [min, max] = priceParam.split("-");
    return (
      opt.min === Number(min) &&
      opt.max === (max === "Infinity" ? Infinity : Number(max))
    );
  });

  // 3. Build the Display String for the Header
  const getSearchHeadline = () => {
    const typeDisplay = type ? `${type}s` : "Properties";
    const locDisplay = location ? ` in ${location}` : "";
    const priceDisplay = selectedPriceRange
      ? ` (${selectedPriceRange.label})`
      : "";

    return `${typeDisplay}${locDisplay}${priceDisplay}`;
  };

  // 4. Filtering Logic
  const results = properties.filter((p) => {
    // Location: Match against the last part of the address (usually the State/City)
    const addressParts = p.location.split(",");
    const cityState = addressParts[addressParts.length - 1]
      .trim()
      .toLowerCase();
    const locationMatch = location
      ? cityState.includes(location.toLowerCase())
      : true;

    // Category: Direct match
    const categoryMatch = type
      ? p.category.toLowerCase() === type.toLowerCase()
      : true;

    // Price: Numerical comparison
    const priceMatch = selectedPriceRange
      ? p.price >= selectedPriceRange.min && p.price <= selectedPriceRange.max
      : true;

    return locationMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Search Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12 mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Search size={16} />
              <span className="uppercase text-[10px] font-bold tracking-[0.3em]">
                Search Intelligence
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-primary">
              Results for{" "}
              <span className="italic">"{getSearchHeadline()}"</span>
            </h1>
            <p className="text-gray-400 font-light italic">
              Found {results.length} assets matching your criteria
            </p>
          </div>

          <Link
            to="/listings"
            className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-primary hover:text-accent transition-colors border border-gray-100 px-6 py-4 rounded-full"
          >
            Refine in Listings <ArrowRight size={14} />
          </Link>
        </header>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {results.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-24 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-8">
              <Info className="text-gray-200" size={32} />
            </div>
            <h2 className="text-3xl font-serif text-primary mb-4">
              No exact matches.
            </h2>
            <p className="text-gray-400 max-w-md mx-auto font-light leading-relaxed mb-10">
              Your search for{" "}
              <span className="text-primary font-medium italic">
                "{getSearchHeadline()}"
              </span>{" "}
              didn't return any direct results.
            </p>
            <div className="flex gap-4">
              <Link
                to="/listings"
                className="bg-primary text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all"
              >
                Browse Full Collection
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
