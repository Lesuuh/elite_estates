import { X } from "lucide-react";
import { Link } from "react-router-dom";

const AuthGatewayModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-md p-10 md:p-14 rounded-[3rem] shadow-2xl animate-in zoom-in duration-300 text-center">
        <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-8">
          <X size={32} className="rotate-45" />{" "}
          {/* Use X rotated as a "plus" or security icon */}
        </div>

        <h2 className="text-3xl font-serif text-primary mb-4 italic">
          Exclusive Access
        </h2>
        <p className="text-gray-500 text-sm font-light leading-relaxed mb-10">
          To initiate an acquisition or speak with a Private Wealth Advisor,
          please sign in to your EstatePro account.
        </p>

        <div className="space-y-4">
          <Link
            to="/auth"
            className="block w-full bg-primary text-white py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all"
          >
            Sign In
          </Link>
          <Link
            to="/auth"
            className="block w-full border border-gray-100 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all text-primary"
          >
            Create Account
          </Link>
        </div>

        <button
          onClick={onClose}
          className="mt-8 text-[10px] text-gray-400 uppercase tracking-widest hover:text-primary transition-colors"
        >
          Browse more properties
        </button>
      </div>
    </div>
  );
};

export default AuthGatewayModal;
