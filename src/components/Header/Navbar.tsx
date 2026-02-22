import { useState, useEffect } from "react";
import { Menu, X, User, Search, Plus } from "lucide-react";

const Navbar = () => {
  const user = true;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-lg py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="group flex items-center gap-1 cursor-pointer">
            <div className="w-8 h-8 bg-accent rounded-br-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-primary font-bold text-xl">E</span>
            </div>
            <span className="font-heading text-2xl tracking-tighter text-white">
              Estate<span className="font-light text-accent">Pro</span>
            </span>
          </div>

          {/* Desktop Menu - Minimalist Style */}
          <ul className="hidden md:flex items-center space-x-8 text-[13px] font-medium uppercase tracking-[0.15em] text-white/90">
            {["Buy", "Rent", "Sell", "Concierge"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <span className="group-hover:text-accent transition-colors duration-300">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Search Trigger (Icon only for luxury look, expands on click if needed) */}
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
              <Search size={20} strokeWidth={1.5} />
            </button>

            <div className="h-6 w-[1px] bg-white/20 mx-2"></div>

            {user ? (
              <button className="flex items-center gap-3 pl-2 pr-1 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group">
                <span className="text-xs font-medium text-white/80 ml-2 group-hover:text-white transition-colors">
                  My Portfolio
                </span>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary shadow-lg group-hover:scale-105 transition-transform">
                  <User size={16} />
                </div>
              </button>
            ) : (
              <div className="flex items-center space-x-6">
                <button className="text-sm font-medium text-white hover:text-accent transition-colors">
                  Sign In
                </button>
                <button className="bg-accent text-primary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg flex items-center gap-2">
                  <Plus size={14} />
                  Post Property
                </button>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Drawer (Better than a simple dropdown) */}
      <div
        className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-primary transform transition-transform duration-500 ease-in-out z-[60] shadow-2xl p-8 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end p-2 text-white/50 hover:text-white transition-colors"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="mt-12 space-y-8">
            {["Buy", "Rent", "Sell", "Agents", "Concierge"].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-3xl font-light text-white hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-10 border-t border-white/10">
            {user ? (
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-sm opacity-50 font-light italic">
                    Welcome back,
                  </p>
                  <p className="text-lg font-medium tracking-tight">
                    Executive Member
                  </p>
                </div>
              </div>
            ) : (
              <button className="w-full bg-accent text-primary py-4 rounded-xl font-bold uppercase tracking-widest">
                List Your Property
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
