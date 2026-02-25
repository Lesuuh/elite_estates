import { useSearchParams, Link } from "react-router-dom";
import { Search, ArrowRight, Info } from "lucide-react";
import properties from "../data";
import PropertyCard from "../components/PropertyCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // Logic: Advanced filtering for the dedicated results page
  const results = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Search Header Info */}
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12 mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Search size={16} />
              <span className="uppercase text-[10px] font-bold tracking-[0.3em]">
                Search Intelligence
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-primary">
              Results for <span className="italic">"{query}"</span>
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

        {results.length > 0 ? (
          /* High-Speed Search Result Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {results.map((p) => (
              <PropertyCard key={p.id} property={p} />
              //   <Link
              //     key={p.id}
              //     to={`/property/${p.id}`}
              //     className="group flex flex-col border-b border-gray-50 pb-10 hover:border-accent transition-colors duration-500"
              //   >
              //     {/* Visual Preview */}
              //     <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-100">
              //       <img
              //         src={`${p.image}&w=800&q=70&auto=format`}
              //         alt={p.title}
              //         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              //       />
              //       <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full">
              //         <p className="text-[9px] text-white uppercase font-bold tracking-widest">
              //           {p.category}
              //         </p>
              //       </div>
              //     </div>

              //     {/* Metadata */}
              //     <div className="flex-1 space-y-3">
              //       <div className="flex justify-between items-start">
              //         <h2 className="text-xl font-serif text-primary group-hover:text-accent transition-colors">
              //           {p.title}
              //         </h2>
              //         <span className="text-primary font-bold text-sm tracking-tighter">
              //           ₦{p.price}
              //         </span>
              //       </div>

              //       <div className="flex items-center gap-1 text-gray-400">
              //         <MapPin size={12} strokeWidth={1.5} />
              //         <span className="text-xs font-light tracking-wide">
              //           {p.location}
              //         </span>
              //       </div>

              //       <p className="text-gray-500 text-xs font-light leading-relaxed line-clamp-2 pt-2">
              //         {p.description ||
              //           "Exceptional architectural integrity located in the heart of our premier collection."}
              //       </p>
              //     </div>

              //     {/* Technical Footnote (CTO Style) */}
              //     <div className="mt-6 flex items-center justify-between">
              //       <div className="flex gap-4">
              //         <span className="text-[10px] text-gray-300 font-bold uppercase">
              //           {p.features.bedrooms} BD
              //         </span>
              //         <span className="text-[10px] text-gray-300 font-bold uppercase">
              //           {p.features.bathrooms} BA
              //         </span>
              //       </div>
              //       <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-all">
              //         <ArrowRight size={14} />
              //       </div>
              //     </div>
              //   </Link>
            ))}
          </div>
        ) : (
          /* Empty State (No Results) */
          <div className="py-24 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-8">
              <Info className="text-gray-200" size={32} />
            </div>
            <h2 className="text-3xl font-serif text-primary mb-4">
              No exact matches.
            </h2>
            <p className="text-gray-400 max-w-md mx-auto font-light leading-relaxed mb-10">
              Your search for{" "}
              <span className="text-primary font-medium italic">"{query}"</span>{" "}
              didn't return any direct results. Our off-market portfolio may
              have what you need.
            </p>
            <div className="flex gap-4">
              <Link
                to="/listings"
                className="bg-primary text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all"
              >
                Browse Full Collection
              </Link>
              <Link
                to="/contact"
                className="border border-gray-100 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        )}

        {/* Dynamic Recommendation Section */}
        {/* {results.length > 0 && (
          <section className="mt-32 pt-20 border-t border-gray-50">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-2xl font-serif text-primary">
                Similar Acquisitions
              </h3>
              <Link
                to="/listings"
                className="text-accent text-[10px] font-bold uppercase tracking-widest border-b border-accent pb-1"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {properties.slice(0, 4).map((p) => (
                <Link key={p.id} to={`/property/${p.id}`} className="group">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img
                      src={`${p.image}&w=400&q=50`}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-primary font-serif group-hover:text-accent transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-1">
                    ₦{p.price}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )} */}
      </div>
    </div>
  );
};

export default SearchResults;
