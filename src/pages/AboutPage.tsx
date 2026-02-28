import { Award, ShieldCheck, Globe, Users, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const stats = [
    { label: "Assets Under Management", value: "₦450B+" },
    { label: "Exclusive Listings", value: "120+" },
    { label: "Year Founded", value: "2012" },
    { label: "Global Partners", value: "15" },
  ];

  const team = [
    {
      // Swap "User" with your actual name
      id: 1,
      name: "Lesuuh Ueh-Kabari",
      role: "Founder, CEO & CTO",
      image: "/re/me.webp",
      zoom: true,
      //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Amara Okonkwo",
      role: "Head of Private Wealth",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Babajide Adeyemi",
      role: "Director of Architecture",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section: The Statement */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover grayscale"
            alt="Architecture"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-6xl md:text-8xl font-serif italic mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            Defining <span className="text-accent">Legacies.</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base uppercase tracking-[0.5em] font-light">
            Nigeria's Premier Real Estate Advisory
          </p>
        </div>
      </section>

      {/* 2. The Vision: Editorial Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-8 text-center lg:text-left">
            Our Philosophy
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-primary leading-tight mb-10 text-center lg:text-left">
            We don't sell property. <br />
            <span className="italic">We curate lifestyles.</span>
          </h3>
          <div className="space-y-6 text-gray-500 font-light leading-relaxed text-lg">
            <p>
              Founded in 2012, EstatePro emerged from a singular vision: to
              bridge the gap between world-class architectural innovation and
              the sophisticated needs of the West African elite.
            </p>
            <p>
              Every listing in our portfolio undergoes a rigorous 40-point
              verification process, ensuring that our clients invest not just in
              structures, but in enduring value and legal security.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover"
              alt="Luxury Modern Architecture"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-accent p-12 rounded-3xl hidden md:block">
            <Award className="text-primary mb-4" size={40} />
            <p className="text-primary font-bold text-xl font-serif italic">
              12+ Years of
            </p>
            <p className="text-primary/70 text-xs uppercase tracking-widest font-bold">
              Unrivaled Excellence
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Numbers: Stats Grid */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <p className="text-4xl md:text-5xl font-serif text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Core Values: Icons */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-16">
          {[
            {
              icon: ShieldCheck,
              title: "Integrity First",
              desc: "Absolute transparency in every title deed and transaction history.",
            },
            {
              icon: Users,
              title: "Concierge Service",
              desc: "Dedicated wealth advisors available 24/7 for our global clientele.",
            },
            {
              icon: Globe,
              title: "Global Standards",
              desc: "Applying international building codes to the local landscape.",
            },
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="w-16 h-16 bg-primary text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                <item.icon size={28} />
              </div>
              <h4 className="text-2xl font-serif text-primary mb-4">
                {item.title}
              </h4>
              <p className="text-gray-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. The Team: Portraits */}
      <section className="bg-primary-dark py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h3 className="text-accent text-xs uppercase tracking-[0.5em] font-bold mb-6">
                Executive Board
              </h3>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                The minds behind <br />
                <span className="italic">the vision.</span>
              </h2>
            </div>
            <button
              onClick={() => navigate("/careers")}
              className="flex items-center gap-3 text-white border-b border-accent pb-2 hover:text-accent transition-colors"
            >
              <span className="text-xs uppercase tracking-widest font-bold">
                Join the Team
              </span>
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ${member.zoom ? "scale-250 group-hover:scale-270" : ""} `}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-white font-serif text-2xl mb-1">
                  {member.name}
                </h4>
                <p className="text-accent text-[10px] uppercase tracking-widest font-bold">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      {/* <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-primary mb-8 leading-tight">
            Ready to begin your <br />
            private acquisition?
          </h2>
          <button className="bg-primary text-white px-12 py-6 rounded-full uppercase text-xs tracking-[0.3em] font-bold hover:bg-accent transition-all shadow-2xl">
            Book a Consultation
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
