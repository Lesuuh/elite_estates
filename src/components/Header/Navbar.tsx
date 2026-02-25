import { useState, useEffect } from "react";
import { Menu, X, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const user = true; // Placeholder for auth state

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
    { name: "About Us", path: "/about" },
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
            <button className="text-white hover:text-accent transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>

            <div className="h-5 w-px bg-white/20"></div>

            {user ? (
              <Link
                to="/portfolio"
                className="flex items-center gap-3 pl-2 pr-1 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/80 ml-2">
                  Portfolio
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
      <div
        className={`fixed inset-0 bg-primary z-70 p-10 flex flex-col transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end text-white/50 hover:text-white"
        >
          <X size={40} strokeWidth={1} />
        </button>

        <div className="mt-20 space-y-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-5xl font-serif cursor-pointer text-white hover:text-accent transition-colors italic"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-auto pt-10 border-t border-white/10">
          <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
            Concierge Desk
          </p>
          <p className="text-white text-2xl font-light tracking-tight">
            +234 800 ESTATE PRO
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
