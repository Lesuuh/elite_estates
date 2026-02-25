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

import {
  Calendar,
  TrendingUp,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Layers,
} from "lucide-react";

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
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&h=800&q=75&fm=webp",
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
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-accent"></span>
            <p className="uppercase text-[10px] tracking-[0.4em] text-accent font-bold">
              The Future Skyine
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-8">
            Upcoming <span className="italic font-light">Landmarks</span>
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed border-l-2 border-gray-100 pl-8">
            Direct access to off-plan opportunities with the highest capital
            appreciation potential in the region.
          </p>
        </div>
      </section>

      {/* Development Projects List */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Side with Floating Progress */}
              <div className="lg:w-1/2 relative group">
                <div className="overflow-hidden rounded-[40px] shadow-2xl bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>

                {/* Floating Progress UI */}
                <div className="absolute -bottom-10 -right-6 lg:right-10 bg-primary-dark p-8 rounded-3xl shadow-2xl border border-white/10 hidden md:block z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers size={16} className="text-accent" />
                    <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">
                      Build Progress
                    </p>
                  </div>
                  <div className="flex items-end gap-6">
                    <span className="text-white text-6xl font-serif italic leading-none">
                      {project.progress}%
                    </span>
                    <div className="flex flex-col gap-2">
                      <div className="w-32 h-1.5 bg-white/10 rounded-full relative overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-accent transition-all duration-1000"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-accent text-[10px] font-bold uppercase tracking-tighter">
                        {project.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data & Content Side */}
              <div className="lg:w-1/2 space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-accent">
                    <ShieldCheck size={18} />
                    <span className="uppercase text-[10px] font-bold tracking-[0.3em]">
                      Verified Asset
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                    {project.name}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} strokeWidth={1.5} />
                    <span className="font-light tracking-wide">
                      {project.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed font-light text-xl italic">
                  "{project.description}"
                </p>

                {/* Investment Stats Grid */}
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group-hover:border-accent transition-colors">
                    <Calendar
                      className="text-accent mb-4"
                      size={24}
                      strokeWidth={1.5}
                    />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">
                      Handover Date
                    </p>
                    <p className="text-primary font-bold text-xl">
                      {project.completion}
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                    <TrendingUp
                      className="text-accent mb-4"
                      size={24}
                      strokeWidth={1.5}
                    />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">
                      Target ROI
                    </p>
                    <p className="text-primary font-bold text-xl">
                      {project.appreciation}
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <button className="flex items-center justify-between w-full md:w-auto md:min-w-[280px] bg-primary text-white px-8 py-6 rounded-full hover:bg-accent transition-all duration-500 group shadow-xl">
                    <span className="uppercase text-[11px] font-bold tracking-[0.3em]">
                      Request Prospectus
                    </span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="bg-primary-dark mt-20 py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-accent text-xs uppercase tracking-[0.5em] font-bold mb-8">
              Strategic Growth
            </h3>
            <h2 className="text-4xl md:text-6xl font-serif text-white italic leading-tight">
              The Power of <br />
              Off-Plan Acquisition
            </h2>
          </div>
          <div className="lg:w-1/2 grid gap-12">
            {[
              {
                title: "Price Advantage",
                desc: "Acquire high-value land and structures at initial groundbreaking rates before market escalation.",
              },
              {
                title: "Bespoke Finishes",
                desc: "Select and customize interior palettes, flooring, and smart-home integrations during construction.",
              },
              {
                title: "Staged Payments",
                desc: "Structured payment plans aligned with construction milestones for better capital management.",
              },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-accent font-serif text-3xl italic opacity-40 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentsPage;
