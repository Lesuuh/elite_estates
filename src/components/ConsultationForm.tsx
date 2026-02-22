import { useState } from "react";
import { Send, Calendar, ChevronRight } from "lucide-react";

const ConsultationForm = ({ setOpenModal }: { setOpenModal: (value: boolean) => void }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      onClick={() => setOpenModal(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-primary-dark w-full max-w-md lg:max-w-7xl rounded-[40px] shadow-2xl flex flex-col lg:flex-row overflow-hidden"
      >
        {/* Left Side: Visual / Branding */}
        <div className="lg:w-2/5 w-full relative flex flex-col justify-between p-6 lg:p-12 min-h-[250px] lg:min-h-[400px]">
          <div
            className="absolute inset-0 z-0 opacity-40 grayscale hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=800')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/40 to-primary-dark z-1"></div>

          <div className="relative z-10 text-center lg:text-left">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 lg:mb-8 mx-auto lg:mx-0">
              <Calendar className="text-primary" size={20} />
            </div>
            <h2 className="text-2xl lg:text-4xl font-serif text-white italic leading-tight mb-2 lg:mb-4">
              Private <br />
              Consultation
            </h2>
            <p className="text-gray-300 font-light leading-relaxed max-w-xs mx-auto lg:mx-0">
              Schedule a confidential session with our senior portfolio managers
              to discuss your acquisition strategy.
            </p>
          </div>

          <div className="relative z-10 pt-6 lg:pt-12 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start -space-x-3 mb-2 lg:mb-4">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-primary-dark"
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Advisor"
                />
              ))}
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-primary-dark bg-accent flex items-center justify-center text-[10px] font-bold text-primary">
                +5
              </div>
            </div>
            <p className="text-accent text-[10px] uppercase tracking-widest font-bold">
              Advisors available today
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-3/5 w-full bg-white p-6 md:p-12">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Alexander Sterling"
                    className="w-full border-b border-gray-200 py-2 md:py-3 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-gray-300"
                  />
                </div>
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="sterling@luxury.com"
                    className="w-full border-b border-gray-200 py-2 md:py-3 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 ..."
                    className="w-full border-b border-gray-200 py-2 md:py-3 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-gray-300"
                  />
                </div>
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block">
                    Interest
                  </label>
                  <select className="w-full border-b border-gray-200 py-2 md:py-3 outline-none focus:border-accent transition-all text-primary font-medium bg-transparent appearance-none">
                    <option>Investment Acquisition</option>
                    <option>Private Residence</option>
                    <option>Property Management</option>
                    <option>Selling a Signature Property</option>
                  </select>
                </div>
              </div>

              <div className="group relative">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full border-b border-gray-200 py-2 md:py-3 outline-none focus:border-accent transition-all text-primary font-medium placeholder:text-gray-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-white px-6 md:px-12 py-3 md:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500 shadow-xl active:scale-95"
              >
                <span className="uppercase text-xs md:text-sm font-bold tracking-[0.2em]">
                  Request Invitation
                </span>
                <div className="p-1 bg-white/10 rounded-full">
                  <ChevronRight size={18} />
                </div>
              </button>
            </form>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Send className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4 italic">
                Invitation Sent
              </h3>
              <p className="text-gray-500 max-w-sm font-light">
                A senior advisor will contact you shortly to confirm your
                session.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-bold uppercase tracking-widest text-accent border-b border-accent"
              >
                Send another request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
