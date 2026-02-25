// import {
//   Calendar,
//   TrendingUp,
//   ShieldCheck,
//   MapPin,
//   ArrowRight,
// } from "lucide-react";

// const DevelopmentsPage = () => {
//   const projects = [
//     {
//       id: "dev-1",
//       name: "The Obsidian Tower",
//       location: "Eko Atlantic, Lagos",
//       status: "Under Construction",
//       completion: "Q4 2027",
//       progress: 65,
//       appreciation: "+22%",
//      image:
//         "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
//       description:
//         "A 30-story vertical masterpiece featuring smart-glass technology and private sky-pools.",
//     },
//     {
//       id: "dev-2",
//       name: "Zenith Estate",
//       location: "Maitama, Abuja",
//       status: "Groundbreaking",
//       completion: "Q2 2028",
//       progress: 15,
//       appreciation: "+18%",
//       image:
//         "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
//       description:
//         "A gated community of 12 ultra-minimalist villas designed for sustainable luxury living.",
//     },
//   ];

//   return (
//     <div className="bg-white min-h-screen pt-28">
//       {/* Hero Header */}
//       <section className="max-w-7xl mx-auto px-6 py-16 border-b border-gray-100">
//         <div className="max-w-3xl">
//           <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-6">
//             Future <span className="italic text-accent">Icons</span>
//           </h1>
//           <p className="text-gray-500 text-lg font-light leading-relaxed">
//             Exclusive access to off-plan opportunities and architectural
//             landmarks currently shaping the Nigerian skyline.
//           </p>
//         </div>
//       </section>

//       {/* Projects List */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="space-y-32">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
//             >
//               {/* Image & Progress Overlay */}
//               <div className="lg:w-1/2 relative group">
//                 <div className="overflow-hidden rounded-[40px] shadow-2xl">
//                   <img
//                     src={project.image}
//                     alt={project.name}
//                     className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//                 {/* Floating Progress Badge */}
//                 <div className="absolute -bottom-8 -right-8 bg-primary-dark p-8 rounded-3xl shadow-2xl border border-white/10 hidden md:block">
//                   <p className="text-accent text-[10px] uppercase tracking-widest font-bold mb-2">
//                     Build Progress
//                   </p>
//                   <div className="flex items-end gap-4">
//                     <span className="text-white text-5xl font-serif italic">
//                       {project.progress}%
//                     </span>
//                     <div className="w-24 h-1 bg-white/10 rounded-full mb-3 relative overflow-hidden">
//                       <div
//                         className="absolute top-0 left-0 h-full bg-accent"
//                         style={{ width: `${project.progress}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Project Details */}
//               <div className="lg:w-1/2 space-y-8">
//                 <div>
//                   <div className="flex items-center gap-2 text-accent mb-4">
//                     <ShieldCheck size={18} />
//                     <span className="uppercase text-[10px] font-bold tracking-[0.3em]">
//                       Verified Development
//                     </span>
//                   </div>
//                   <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
//                     {project.name}
//                   </h2>
//                   <div className="flex items-center gap-2 text-gray-400">
//                     <MapPin size={16} />
//                     <span className="font-light">{project.location}</span>
//                   </div>
//                 </div>

//                 <p className="text-gray-600 leading-relaxed font-light text-lg">
//                   {project.description}
//                 </p>

//                 {/* Investment Metrics Card */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
//                     <Calendar className="text-accent mb-3" size={20} />
//                     <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
//                       Handover
//                     </p>
//                     <p className="text-primary font-bold text-lg">
//                       {project.completion}
//                     </p>
//                   </div>
//                   <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
//                     <TrendingUp className="text-accent mb-3" size={20} />
//                     <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
//                       Est. Yield
//                     </p>
//                     <p className="text-primary font-bold text-lg">
//                       {project.appreciation} YoY
//                     </p>
//                   </div>
//                 </div>

//                 <button className="flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full hover:bg-accent transition-all duration-500 group">
//                   <span className="uppercase text-xs font-bold tracking-[0.2em]">
//                     Request Prospectus
//                   </span>
//                   <ArrowRight
//                     size={18}
//                     className="group-hover:translate-x-2 transition-transform"
//                   />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Investment Thesis Section */}
//       <section className="bg-primary-dark py-24 px-6 text-center">
//         <div className="max-w-3xl mx-auto">
//           <h3 className="text-accent text-xs uppercase tracking-[0.4em] font-bold mb-8">
//             Capital Appreciation
//           </h3>
//           <h2 className="text-3xl md:text-5xl font-serif text-white italic mb-10 leading-tight">
//             Why invest in Nigerian <br />
//             off-plan developments?
//           </h2>
//           <div className="grid md:grid-cols-3 gap-12 text-left pt-10">
//             <div>
//               <p className="text-white text-3xl font-serif mb-2">01</p>
//               <p className="text-gray-400 text-sm font-light">
//                 Entry-level pricing at groundbreaking stages.
//               </p>
//             </div>
//             <div>
//               <p className="text-white text-3xl font-serif mb-2">02</p>
//               <p className="text-gray-400 text-sm font-light">
//                 Customizable interior layouts and finishes.
//               </p>
//             </div>
//             <div>
//               <p className="text-white text-3xl font-serif mb-2">03</p>
//               <p className="text-gray-400 text-sm font-light">
//                 Significant capital gains upon structural completion.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DevelopmentsPage;

import { Calendar, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

const DevelopmentsPage = () => {
  const projects = [
    {
      id: "dev-1",
      name: "The Obsidian Tower",
      location: "Eko Atlantic, Lagos",
      status: "Structural Phase",
      completion: "Q4 2027",
      progress: 65,
      appreciation: "+22%",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&h=800&q=75&fm=webp",
      description:
        "A 30-story vertical masterpiece featuring smart-glass technology and private sky-pools. Positioned to redefine the Lagos skyline.",
    },
    {
      id: "dev-2",
      name: "Zenith Estate",
      location: "Maitama, Abuja",
      status: "Groundbreaking",
      completion: "Q2 2028",
      progress: 15,
      appreciation: "+18%",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&h=800&q=75&fm=webp",
      description:
        "A gated community of ultra-minimalist villas built around sustainability, privacy, and architectural symmetry.",
    },
    {
      id: "dev-3",
      name: "Harbor Crest Residences",
      location: "Port Harcourt, Rivers",
      status: "Interior Finishing",
      completion: "Q1 2026",
      progress: 82,
      appreciation: "+14%",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&h=800&q=75&fm=webp",
      description:
        "Luxury waterfront apartments with panoramic river views and executive rooftop lounges.",
    },
    {
      id: "dev-4",
      name: "Azure Marina Heights",
      location: "Victoria Island, Lagos",
      status: "Pre-Sales",
      completion: "Q3 2027",
      progress: 28,
      appreciation: "+20%",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&h=800&q=75&fm=webp",
      description:
        "High-rise luxury apartments offering marina-facing balconies and concierge-driven living.",
    },
    {
      id: "dev-5",
      name: "Summit Ridge Villas",
      location: "Asokoro, Abuja",
      status: "Foundation Complete",
      completion: "Q4 2026",
      progress: 40,
      appreciation: "+16%",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&h=800&q=75&fm=webp",
      description:
        "Private hillside villas designed for political and executive elites seeking discretion and architectural boldness.",
    },
    {
      id: "dev-6",
      name: "Coral Bay Towers",
      location: "Lekki Phase 1, Lagos",
      status: "Excavation",
      completion: "Q1 2029",
      progress: 10,
      appreciation: "+25%",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&h=800&q=75&fm=webp",
      description:
        "A twin-tower luxury development integrating AI-powered home systems and private club facilities.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-28">
      {/* Condensed Header */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-accent"></span>
            <p className="uppercase text-[10px] tracking-[0.4em] text-accent font-bold">
              Portfolio
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-primary leading-tight">
            Upcoming{" "}
            <span className="italic font-light text-gray-400">Landmarks</span>
          </h1>
        </div>
        <p className="text-gray-400 text-sm font-light max-w-xs border-l border-gray-100 pl-6 hidden md:block">
          Direct access to off-plan opportunities with high capital appreciation
          potential.
        </p>
      </section>

      {/* Optimized High-Density Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col">
              {/* Image Container with Progress Overlay */}
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-8 shadow-sm">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Progress Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {project.status}
                  </span>
                </div>

                {/* Hover Overlay: Description */}
                <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-10 text-center">
                  <p className="text-white font-light italic text-lg leading-relaxed mb-8">
                    "{project.description}"
                  </p>
                  <button className="text-accent uppercase text-[10px] tracking-[0.3em] font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all">
                    View Prospectus <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Data Content */}
              <div className="flex-1 px-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-serif text-primary group-hover:text-accent transition-colors duration-300">
                      {project.name}
                    </h2>
                    <div className="flex items-center gap-1 text-gray-400 mt-1">
                      <MapPin size={12} />
                      <span className="text-xs font-light tracking-wide">
                        {project.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">
                      ROI
                    </p>
                    <p className="text-primary font-serif italic text-lg">
                      {project.appreciation}
                    </p>
                  </div>
                </div>

                {/* Progress Line */}
                <div className="space-y-2 mt-6">
                  <div className="flex justify-between text-[9px] uppercase tracking-widest font-bold text-gray-400">
                    <span>Construction Progress</span>
                    <span className="text-primary">{project.progress}%</span>
                  </div>
                  <div className="w-full h-[2px] bg-gray-100 relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000 delay-300 group-hover:bg-accent"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Micro Stats */}
                <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-gray-300" />
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">
                      {project.completion}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-gray-300" />
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">
                      Insured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Why Invest (Condensed) */}
      <section className="bg-primary py-24 px-6 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
          <h2 className="text-3xl font-serif text-white md:w-1/3 italic">
            The Off-Plan <br /> Advantage.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-2/3">
            {["Price Entry", "Bespoke Customization", "Payment Milestones"].map(
              (item) => (
                <div
                  key={item}
                  className="p-6 border border-white/10 rounded-2xl"
                >
                  <p className="text-accent font-bold uppercase tracking-widest text-[9px] mb-2">
                    {item}
                  </p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Securing assets before completion ensures maximum capital
                    growth.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentsPage;
