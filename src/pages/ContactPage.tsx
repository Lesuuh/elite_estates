import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const ContactPage = () => {
  const [formStep, setFormStep] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStep("submitting");
    // Simulate API call
    setTimeout(() => setFormStep("success"), 1500);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Private Line",
      detail: "+234 (0) 800 ESTATE PRO",
      sub: "Available 24/7 for Concierge Clients",
    },
    {
      icon: Mail,
      title: "Electronic Correspondence",
      detail: "concierge@estatepro.ng",
      sub: "General & Press Inquiries",
    },
    {
      icon: MapPin,
      title: "The Gallery",
      detail: "4th Floor, Heritage Towers",
      sub: "Ikoyi, Lagos, Nigeria",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* 1. Subtle Header */}
      <section className="px-6 py-20 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-4">
            Contact the Private Office
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight">
            How may we <br />{" "}
            <span className="italic text-gray-400 font-light underline decoration-accent/30 decoration-1 underline-offset-8">
              assist your acquisition?
            </span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-20">
        {/* 2. Direct Channels (4 Columns) */}
        <div className="lg:col-span-4 space-y-12">
          {contactMethods.map((method, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-all duration-500 mb-6">
                <method.icon size={20} />
              </div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">
                {method.title}
              </h3>
              <p className="text-xl font-serif text-primary mb-1">
                {method.detail}
              </p>
              <p className="text-sm text-gray-400 font-light">{method.sub}</p>
            </div>
          ))}

          <div className="pt-10">
            <div className="p-8 rounded-3xl bg-primary text-white relative overflow-hidden group">
              <Globe
                className="absolute -right-4 -bottom-4 text-white/10 group-hover:rotate-12 transition-transform duration-1000"
                size={120}
              />
              <h4 className="text-lg font-serif mb-2 relative z-10">
                Global Operations
              </h4>
              <p className="text-sm text-white/50 font-light relative z-10 leading-relaxed">
                Facilitating cross-border transactions for the Nigerian diaspora
                in London, Dubai, and New York.
              </p>
            </div>
          </div>
        </div>

        {/* 3. The Mandate Form (8 Columns) */}
        <div className="lg:col-span-8 bg-gray-50/50 rounded-[40px] p-8 md:p-16 border border-gray-100">
          {formStep === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-serif text-primary mb-4">
                Mandate Received
              </h2>
              <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                Thank you, Lesuuh. Your inquiry has been routed to our Private
                Wealth team. Expect a response within 4 operational hours.
              </p>
              <button
                onClick={() => setFormStep("idle")}
                className="mt-10 text-xs uppercase tracking-widest font-bold text-accent border-b border-accent pb-1"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 px-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-primary transition-colors text-primary font-light placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 px-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-primary transition-colors text-primary font-light placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 px-1">
                    Inquiry Type
                  </label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-primary transition-colors text-primary font-light appearance-none cursor-pointer">
                    <option>Asset Acquisition</option>
                    <option>Property Listing</option>
                    <option>Architectural Consultation</option>
                    <option>Legal Advisory</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 px-1">
                    Investment Range
                  </label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-primary transition-colors text-primary font-light appearance-none cursor-pointer">
                    <option>₦100M — ₦500M</option>
                    <option>₦500M — ₦1B</option>
                    <option>₦1B+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 px-1">
                  Your Brief
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your requirements..."
                  className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-primary transition-colors text-primary font-light placeholder:text-gray-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStep === "submitting"}
                className="w-full md:w-auto bg-primary text-white px-12 py-6 rounded-2xl uppercase text-[10px] tracking-[0.4em] font-bold hover:bg-accent hover:text-primary transition-all flex items-center justify-center gap-4 disabled:bg-gray-200 disabled:text-gray-400"
              >
                {formStep === "submitting" ? "Processing..." : "Submit Mandate"}
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 4. Minimal Map Area */}
      <section className="h-[400px] w-full bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.932824905151!2d3.429465!3d6.441951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d469273617%3A0x6a2c270d4f3b640!2sIkoyi%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
