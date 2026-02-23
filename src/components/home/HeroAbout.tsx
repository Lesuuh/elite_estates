import {
  BadgeCheck,
  ChartGantt,
  CircleStar,
  Globe,
  Headset,
} from "lucide-react";

const HeroAbout = () => {
  const aboutContent = [
    {
      id: 1,
      title: "Exclusive Access",
      icon: CircleStar,
      content:
        "Gain entry to off-market listings and private portfolios before they reach the public.",
    },
    {
      id: 2,
      title: "Expert Valuation",
      icon: ChartGantt,
      content:
        "Precision-driven marker analysis tailored specifically for ultra high-net-worth properties",
    },
    {
      id: 3,
      title: "Global Network",
      icon: Globe,
      content:
        "Connect with elite buyers and sellers across the world's most prestigious markets.",
    },
    {
      id: 4,
      title: "Elite Concierge",
      icon: Headset,
      content:
        "Full spectrum service from legal advisory to relocation and bespoke architecture",
    },
  ];
  return (
    <section className="bg-primary  py-24 px-6 text-center relative overflow-hidden">
      {/* Background Icon */}
      <BadgeCheck className="absolute top-[-100px] right-0 w-100 h-100 text-gray-700 opacity-50 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <p className="text-accent uppercase tracking-[0.3em] font-medium text-xs md:text-sm">
          The signature difference
        </p>

        <h2 className="text-white text-4xl md:text-6xl py-2 max-w-4xl leading-tight mx-auto font-serif">
          Unrivaled Expertise in Luxury Real Estate
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4  w-full p-4">
          {aboutContent.map((m) => {
            const Icon = m.icon;

            return (
              <div key={m.id} className=" md:p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                </div>

                <div className="text-white">
                  <h3 className="font-serif text-xl">{m.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm py-3">
                    {m.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
