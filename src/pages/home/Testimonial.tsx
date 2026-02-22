import { Quote } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Luxury Living",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
      quote:
        "Elite Estates transformed my property search into a seamless and luxurious experience. Their expertise and dedication are unmatched.",
    },
    {
      id: 2,
      name: "Amaka Okafor",
      role: "Founder, Prestige Homes",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
      quote:
        "Working with Elite Estates was a revelation. They understand the market, the clients, and deliver beyond expectations every single time.",
    },
    {
      id: 3,
      name: "Michael Thompson",
      role: "Investor, Global Properties",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
      quote:
        "From start to finish, Elite Estates made acquiring high-end properties effortless. Their insight into prime locations is second to none.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-accent"></span>
              <p className="uppercase text-xs tracking-[0.3em] text-accent font-bold">
                Testimonials
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              What Our <span className="italic font-light">Esteemed</span>{" "}
              Clients Say
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed pb-2">
            Providing unparalleled service to the world's most discerning
            property investors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative group p-8 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <Quote
                className="text-accent/20 mb-6 group-hover:text-accent transition-colors duration-500"
                size={32}
                strokeWidth={1.5}
              />

              <p className="text-gray-700 text-base leading-relaxed mb-8 font-light italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="text-primary font-bold tracking-tight text-sm">
                    {t.name}
                  </h4>
                  <p className="text-accent text-[10px] uppercase tracking-widest font-semibold mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Bar */}
        <div className="mt-20 py-10 border-y border-gray-100 flex flex-wrap justify-center md:justify-between gap-8 items-center opacity-30">
          <span className="font-serif text-lg font-bold tracking-tighter text-primary italic">
            FORBES REALTY
          </span>
          <span className="font-serif text-lg font-bold tracking-tighter text-primary italic">
            ARCHITECTURAL DIGEST
          </span>
          <span className="font-serif text-lg font-bold tracking-tighter text-primary italic">
            MANSION GLOBAL
          </span>
          <span className="font-serif text-lg font-bold tracking-tighter text-primary italic">
            VOGUE LIVING
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
