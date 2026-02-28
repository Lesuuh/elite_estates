import React, { useState, useEffect } from "react";
import { Menu, X, User, Search, ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user } = useAuth(); // Assuming useAuth is imported and provides auth state
  // const user = false; // Placeholder for auth state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickSearch, setQuickSearch] = useState("");

  const navigate = useNavigate();

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearch.trim()) {
      const searchParams = new URLSearchParams();
      searchParams.set("location", quickSearch.trim());
      navigate(`/search?location=${encodeURIComponent(quickSearch)}`);
      setIsSearchOpen(false);
      setQuickSearch("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Listings", path: "/listings" },
    { name: "New Projects", path: "/developments" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isOpen
            ? "bg-primary py-4"
            : scrolled
              ? "bg-primary/95 backdrop-blur-lg py-4 shadow-2xl"
              : "bg-primary-dark py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-9 h-9 bg-accent rounded-br-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-primary font-bold text-xl">E</span>
            </div>
            <span className="font-heading text-2xl tracking-tighter text-white">
              Estate<span className="font-light text-accent">Pro</span>
            </span>
          </Link>

          {/* Desktop Menu - Simplified */}
          <ul className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/90 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-accent transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-accent transition-colors"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <div className="h-5 w-px bg-white/20"></div>

            {isAuthenticated ? (
              <Link
                to="/auth/portal"
                className="flex items-center gap-3 pl-2 pr-1 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/80 ml-2">
                  {user?.name.split(" ")[0] || "User"}
                </span>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary">
                  <User size={16} />
                </div>
              </Link>
            ) : (
              <Link
                to="/auth"
                className="text-xs font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
    {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-0 bg-primary z-[70] p-10 flex flex-col transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Mobile Portal Link (if Auth) */}
          {isAuthenticated ? (
            <Link
              to="/auth/portal"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 bg-white/5 border border-white/10 p-2 rounded-full"
            >
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold">
                {user?.name.charAt(0) || "U"}
              </div>
              <div className="pr-4">
                <p className="text-[10px] uppercase tracking-widest text-white/40 leading-none mb-1">Portfolio</p>
                <p className="text-sm font-serif text-white italic">Go to Dashboard</p>
              </div>
            </Link>
          ) : (
            <div className="w-10" /> /* Spacer */
          )}
          
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/50 hover:text-white"
          >
            <X size={40} strokeWidth={1} />
          </button>
        </div>

        <div className="mt-20 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-5xl font-serif cursor-pointer text-white hover:text-accent transition-colors italic leading-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-auto pt-10 border-t border-white/10 flex flex-col gap-8">
          {!isAuthenticated && (
            <Link
              to="/auth"
              onClick={() => setIsOpen(false)}
              className="text-accent text-lg font-serif italic border-b border-accent/20 pb-4 flex justify-between items-center"
            >
              Sign into Portal <ArrowUpRight size={20} />
            </Link>
          )}

          <div>
            <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
              Concierge Desk
            </p>
            <p className="text-white text-2xl font-light tracking-tight">
              +234 800 ESTATE PRO
            </p>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-primary/98 backdrop-blur-xl flex flex-col p-10 animate-in fade-in duration-300">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="self-end text-white/50 hover:text-white mb-20"
          >
            <X size={40} strokeWidth={1} />
          </button>

          <div className="max-w-4xl mx-auto w-full">
            <p className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-6">
              Global Asset Search
            </p>
            <form onSubmit={handleQuickSearch}>
              <input
                autoFocus
                type="text"
                value={quickSearch}
                onChange={(e) => setQuickSearch(e.target.value)}
                placeholder="Search by location, estate, or property name..."
                className="w-full bg-transparent border-b border-white/20 pb-6 text-4xl md:text-6xl text-white font-serif focus:outline-none focus:border-accent transition-colors placeholder:text-white/10"
              />
              <p className="text-white/30 text-xs mt-6 italic">
                Press <span className="text-white/60 font-bold">Enter</span> to
                execute search
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
