import { Banknote, House, MapPin, Search } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: "url('/re/about_1.png')" }}
    >
      {/* Overlay: Using a gradient for better text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h3 className="uppercase text-xs md:text-sm text-accent  tracking-[0.3em] font-bold mb-3 drop-shadow-md">
            Exclusivity Redefined
          </h3>
          <h2 className="text-5xl md:text-7xl text-white font-extrabold tracking-tight leading-tight">
            Find your <span className="text-accent italic font-serif">Signature</span> Residence
          </h2>
          <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto font-light">
            Discover bespoke architectural masterpieces tailored to your lifestyle.
          </p>
        </div>

        {/* Search Bar: Glassmorphism Style */}
        <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 p-2 md:p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2">
          
          {/* Location */}
          <div className="relative flex-1 w-full group">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-accent group-focus-within:scale-110 transition-transform" size={20} />
            <input
              type="search"
              placeholder="Where would you like to live?"
              className="w-full bg-white/5 py-4 pl-12 pr-4 rounded-xl text-white placeholder:text-gray-300 focus:outline-none focus:bg-white/20 transition-all border border-transparent focus:border-accent/50"
            />
          </div>

          {/* Price Range */}
          <div className="relative flex-1 w-full">
            <Banknote className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={20} />
            <select
              defaultValue=""
              className="w-full bg-white/5 py-4 pl-12 pr-4 rounded-xl text-white focus:outline-none focus:bg-white/20 transition-all border border-transparent focus:border-accent/50 appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-gray-800">Price Range</option>
              <option value="0-10M" className="text-gray-800">₦0 – ₦10M</option>
              <option value="10M-50M" className="text-gray-800">₦10M – ₦50M</option>
              <option value="50M+" className="text-gray-800">₦50M+</option>
            </select>
          </div>

          {/* Property Type */}
          <div className="relative flex-1 w-full">
            <House className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={20} />
            <select
              defaultValue=""
              className="w-full bg-white/5 py-4 pl-12 pr-4 rounded-xl text-white focus:outline-none focus:bg-white/20 transition-all border border-transparent focus:border-accent/50 appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-gray-800">Property Type</option>
              <option value="apartment" className="text-gray-800">Modern Apartment</option>
              <option value="villa" className="text-gray-800">Luxury Villa</option>
              <option value="mansion" className="text-gray-800">Mansion</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-xl uppercase font-bold tracking-wider transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 active:scale-95"
          >
            <Search size={18} />
            Search
          </button>
        </div>

        {/* Floating Badges (Optional Aesthetic Touch) */}
        <div className="mt-8 flex gap-6 text-white/70 text-sm font-medium">
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full"></span> 1,200+ Properties</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full"></span> Top Rated Agents</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;