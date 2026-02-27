import { useState } from "react";
import {
  ShieldCheck,
  Phone,
  Mail,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const AcquireModal = ({ property, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send an email/notification to your sales team here
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <div
          className="absolute inset-0 bg-primary/60 backdrop-blur-xl"
          onClick={onClose}
        />
        <div className="relative bg-white w-full max-w-md p-12 rounded-[3rem] text-center shadow-2xl animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-serif text-primary mb-4">
            Request Received
          </h2>
          <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
            Your interest in{" "}
            <span className="font-bold text-primary">{property.title}</span> has
            been logged. A Private Wealth Partner will contact you shortly to
            discuss the contract and payment schedule.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-primary text-white py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-over */}
      <div className="relative w-full max-w-lg bg-white h-full p-12 shadow-2xl animate-in slide-in-from-right duration-500 overflow-y-auto">
        <header className="mb-12">
          <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
            Formal Interest
          </p>
          <h2 className="text-4xl font-serif text-primary italic">
            Acquisition Brief
          </h2>
          <p className="text-gray-400 text-sm mt-4 font-light">
            You are initiating the acquisition process for{" "}
            <span className="text-primary font-medium">{property.title}</span>.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Payment Preference */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
              Preferred Payment Structure
            </label>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Outright Purchase",
                "6-Month Installment",
                "12-Month Installment",
              ].map((plan) => (
                <label
                  key={plan}
                  className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl cursor-pointer hover:border-accent transition-all group"
                >
                  <span className="text-sm text-primary font-medium">
                    {plan}
                  </span>
                  <input
                    type="radio"
                    name="payment"
                    className="accent-accent w-4 h-4"
                    defaultChecked={plan === "Outright Purchase"}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Contact Confirmation */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
              Preferred Contact Method
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-xl text-xs font-bold text-primary border border-transparent hover:border-accent transition-all"
              >
                <Phone size={16} className="text-accent" /> Phone Call
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-xl text-xs font-bold text-primary border border-transparent hover:border-accent transition-all"
              >
                <Mail size={16} className="text-accent" /> Email/PDF
              </button>
            </div>
          </div>

          {/* Guarantee Note */}
          <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10 flex gap-4">
            <ShieldCheck className="text-accent shrink-0" size={20} />
            <p className="text-[11px] text-gray-500 italic leading-relaxed">
              Submitting this brief does not commit you to payment yet. It
              secures your priority in the acquisition queue for the next 24
              hours.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-5 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/10"
          >
            Confirm Interest <ChevronRight size={14} />
          </button>
        </form>

        <button
          onClick={onClose}
          className="w-full mt-4 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-primary transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AcquireModal;
