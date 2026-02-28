import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// import ConsultationForm from "../ConsultationForm";
// import { useState } from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const [openModal, setOpenModal] = useState(false);

  // const openConsultationModal = () => {
  //   setOpenModal(true);
  // };

  const navigate = useNavigate();

  return (
    <footer className="bg-primary-dark text-white pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section: High-End CTA */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Ready to find your <br />
              <span className="text-accent italic">Signature</span> home?
            </h2>
            <p className="text-gray-400 font-light text-lg max-w-md">
              Speak with our private wealth advisors today for a bespoke
              property consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("contact")}
              className="bg-accent text-primary px-10 py-5 rounded-full uppercase text-xs font-bold tracking-[0.2em] hover:bg-white transition-all shadow-xl"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => navigate("listings")}
              className="border border-white/20 text-white px-10 py-5 rounded-full uppercase text-xs font-bold tracking-[0.2em] hover:bg-white/10 transition-all"
            >
              View Listings
            </button>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20"></div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="font-heading text-3xl tracking-tighter">
              Estate<span className="font-light text-accent">Pro</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Architecting luxury experiences and securing heritage properties
              for the world's most discerning families.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-[11px] uppercase tracking-[0.3em] text-accent mb-10">
              Explore
            </h4>
            <ul className="space-y-5 text-sm text-gray-400 font-light">
              {[
                "Private Listings",
                "Luxury Rentals",
                "Investment Portfolios",
                "New Developments",
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-white cursor-pointer transition-colors flex items-center group"
                >
                  <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-4 group-hover:mr-3"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-[11px] uppercase tracking-[0.3em] text-accent mb-10">
              The Agency
            </h4>
            <ul className="space-y-5 text-sm text-gray-400 font-light">
              {[
                "Our Philosophy",
                "Global Reach",
                "Advisory Board",
                "Privacy Charter",
              ].map((link) => (
                <li
                  key={link}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
            <h4 className="font-bold text-[11px] uppercase tracking-[0.3em] text-accent mb-8">
              Headquarters
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin
                  size={20}
                  className="text-accent shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  12 Luxury Row, Victoria Island, <br />
                  Lagos, Nigeria
                </p>
              </div>
              <div className="flex gap-4">
                <Mail
                  size={20}
                  className="text-accent shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-sm text-gray-300 font-light">
                  concierge@estatepro.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-medium">
            © 2026 EstatePro Heritage Group
          </p>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-accent transition-all"
          >
            Back to top
            <div className="p-2 border border-white/10 rounded-full group-hover:border-accent group-hover:-translate-y-1 transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
      {/* {openModal && <ConsultationForm setOpenModal={setOpenModal} />} */}
    </footer>
  );
};

export default Footer;
