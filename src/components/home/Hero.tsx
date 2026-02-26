import { Banknote, House, MapPin, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchParameters, setSearchParameters] = useState({
    location: "",
    priceRange: "",
    propertyType: "",
  });

  const [formError, setFormError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setSearchParameters((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const priceOptions = [
    { label: "Under ₦250M", min: 0, max: 250000000 },
    { label: "₦250M – ₦750M", min: 250000000, max: 750000000 },
    { label: "₦750M – ₦1.5B", min: 750000000, max: 1500000000 },
    { label: "₦1.5B+", min: 1500000000, max: Infinity },
  ];

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !searchParameters.location &&
      !searchParameters.priceRange &&
      !searchParameters.propertyType
    ) {
      setFormError("Please select at least one criteria to begin your search.");
      return;
    }

    const searchParams = new URLSearchParams();
    if (searchParameters.location)
      searchParams.set("location", searchParameters.location);
    if (searchParameters.priceRange)
      searchParams.set("price", searchParameters.priceRange);
    if (searchParameters.propertyType)
      searchParams.set("type", searchParameters.propertyType);

    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      // New reliable high-res luxury architecture image
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-brightness-50"></div>

      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h3 className="uppercase text-xs md:text-sm text-accent tracking-[0.4em] font-bold mb-4 drop-shadow-md">
            The Pinnacle of Living
          </h3>
          <h2 className="text-5xl md:text-8xl text-white font-extrabold tracking-tight leading-[1.1] mb-6">
            Find your{" "}
            <span className="text-accent italic font-serif">Signature</span>{" "}
            Residence
          </h2>
          <p className="text-gray-100 mt-4 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Curated collections of the most prestigious architectural
            masterpieces across Nigeria's prime locations.
          </p>
        </div>

        {/* Search Bar */}
        <form
          className="w-full max-w-5xl bg-white/10 backdrop-blur-2xl border border-white/20 p-2 md:p-3 rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center gap-2"
          onSubmit={handleSearch}
        >
          {/* Location */}
          <div className="relative flex-1 w-full group">
            <MapPin
              className="absolute left-4 top-1/2 -translate-y-1/2 text-accent"
              size={20}
            />
            <input
              type="search"
              onChange={handleInputChange}
              name="location"
              value={searchParameters.location}
              placeholder="E.g. Banana Island, Maitama..."
              className="w-full bg-white/10 py-5 pl-12 pr-4 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:bg-white/20 transition-all border border-transparent focus:border-accent/40"
            />
          </div>

          {/* Price Range */}
          <div className="relative flex-1 w-full">
            <Banknote
              className="absolute left-4 top-1/2 -translate-y-1/2 text-accent"
              size={20}
            />
            <select
              onChange={handleInputChange}
              name="priceRange"
              value={searchParameters.priceRange}
              className="w-full bg-white/10 py-5 pl-12 pr-4 rounded-xl text-white focus:outline-none focus:bg-white/20 transition-all border border-transparent focus:border-accent/40 appearance-none cursor-pointer"
            >
              <option value="" className="text-gray-900">
                Budget Range
              </option>
              {priceOptions.map((option, i) => (
                <option
                  key={i}
                  value={`${option.min}-${option.max === Infinity ? "Infinity" : option.max}`}
                  className="text-gray-900"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Property Type */}
          <div className="relative flex-1 w-full">
            <House
              className="absolute left-4 top-1/2 -translate-y-1/2 text-accent"
              size={20}
            />
            <select
              onChange={handleInputChange}
              name="propertyType"
              value={searchParameters.propertyType}
              className="w-full bg-white/10 py-5 pl-12 pr-4 rounded-xl text-white focus:outline-none focus:bg-white/20 transition-all border border-transparent focus:border-accent/40 appearance-none cursor-pointer"
            >
              <option value="" className="text-gray-900">
                Asset Category
              </option>
              <option value="apartment" className="text-gray-900">
                Modern Apartment
              </option>
              <option value="villa" className="text-gray-900">
                Luxury Villa
              </option>
              <option value="penthouse" className="text-gray-900">
                Penthouse
              </option>
              <option value="mansion" className="text-gray-900">
                Mansion
              </option>
            </select>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full md:w-auto bg-accent hover:bg-white hover:text-primary text-white px-12 py-5 rounded-xl uppercase font-bold tracking-widest transition-all duration-300 transform shadow-xl flex items-center justify-center gap-3 active:scale-95"
          >
            <Search size={20} />
            Search
          </button>
        </form>

        {formError && (
          <p className="w-full text-center text-red-400 font-medium text-sm mt-4 animate-pulse">
            {formError}
          </p>
        )}

        {/* Floating Metrics */}
        <div className="mt-12 flex gap-10 text-white/80 text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-3 bg-white/5 px-6 py-2 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
            Inventory: ₦420B+
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-6 py-2 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Verified Assets
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
