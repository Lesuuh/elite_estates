import React from "react";
import { ArrowUpRight, Plus, MapPin } from "lucide-react";

const CareersPage = () => {
  const roles = [
    {
      title: "Senior Investment Analyst",
      loc: "Ikoyi",
      dept: "Capital",
      type: "Full-time",
    },
    {
      title: "Lead Architect",
      loc: "Victoria Island",
      dept: "Design",
      type: "Contract",
    },
    {
      title: "Estate Manager",
      loc: "Banana Island",
      dept: "Operations",
      type: "Full-time",
    },
    {
      title: "Portfolio Strategist",
      loc: "Maitama",
      dept: "Growth",
      type: "Full-time",
    },
    {
      title: "Head of Acquisitions",
      loc: "Lekki Phase 1",
      dept: "Capital",
      type: "Full-time",
    },
    {
      title: "Sustainability Consultant",
      loc: "Eko Atlantic",
      dept: "ESG",
      type: "Contract",
    },
    {
      title: "Private Wealth Liaison",
      loc: "Asokoro",
      dept: "Relations",
      type: "Full-time",
    },
    {
      title: "Project Director",
      loc: "Enugu",
      dept: "Development",
      type: "Full-time",
    },
    {
      title: "Legal Counsel",
      loc: "Victoria Island",
      dept: "Compliance",
      type: "Full-time",
    },
    {
      title: "Digital Asset Manager",
      loc: "Remote / Lagos",
      dept: "Technology",
      type: "Full-time",
    },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* 1. THE DARK HERO - CLEAN & BOLD */}
      <section className="bg-primary pt-44 pb-32 px-8 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-accent">
              Human Capital / 2026
            </span>
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-white/40">
              Open Positions ({roles.length})
            </span>
          </div>

          <h1 className="text-[12vw] md:text-[9vw] font-serif italic text-white leading-[0.8] tracking-tighter">
            The <br />
            <span className="ml-[8vw] text-accent">Collective.</span>
          </h1>

          <div className="mt-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light italic">
              "We don't hire employees; we partner with custodians of African
              luxury. Redefining the continent's skyline, one legacy at a time."
            </p>

            <div className="hidden md:block">
              <ArrowUpRight
                className="text-accent opacity-20"
                size={64}
                strokeWidth={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE GRID - SQUARE TILES */}
      <section className="bg-gray-200 border-y border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-[#fafafa] p-10 aspect-square flex flex-col justify-between group hover:bg-primary transition-all duration-700 cursor-pointer relative overflow-hidden"
            >
              {/* Subtle Numbering */}
              <span className="text-[10px] font-bold text-gray-200 group-hover:text-white/10 transition-colors absolute top-10 right-10">
                0{idx + 1}
              </span>

              <div className="space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                  {role.dept}
                </span>
                <h3 className="text-3xl font-serif italic leading-tight group-hover:text-white transition-colors">
                  {role.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-gray-300">
                  <MapPin size={12} /> {role.loc}
                </div>

                {/* Reveal on Hover */}
                <div className="flex items-center gap-3 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="h-px w-8 bg-accent"></div>
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">
                    View Dossier
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE SPONTANEOUS CALL */}
      <section className="py-40 px-8 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="text-left">
            <h2 className="text-5xl font-serif italic text-primary mb-4">
              Inquire.
            </h2>
            <p className="text-gray-400 text-sm max-w-sm leading-loose">
              If your expertise transcends our current listings, we invite a
              spontaneous dialogue.
            </p>
          </div>
          <button className="group flex items-center gap-4 text-primary">
            <span className="text-sm font-bold uppercase tracking-[0.4em] border-b border-primary pb-2 group-hover:text-accent group-hover:border-accent transition-all text-nowrap">
              Send Portfolio
            </span>
            <Plus className="group-hover:rotate-90 transition-transform duration-500 text-accent" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
