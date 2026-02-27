import { Upload, ShieldCheck, ChevronRight } from "lucide-react";
import React from "react";

interface ListingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ListingModal: React.FC<ListingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl animate-in slide-in-from-right duration-500 overflow-y-auto p-12">
        <header className="mb-12">
          <p className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold mb-2">
            Asset Submission
          </p>
          <h2 className="text-3xl font-serif text-primary italic">
            Property Appraisal
          </h2>
          <p className="text-gray-400 text-sm mt-4 font-light">
            Submit your property details for verification. Once approved by our
            concierge, it will be visible to our exclusive network of investors.
          </p>
        </header>

        <form className="space-y-8">
          {/* Asset Title */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
              Property Title
            </label>
            <input
              type="text"
              placeholder="e.g. The Sapphire Villa"
              className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-accent transition-colors font-serif text-xl"
            />
          </div>

          {/* Location & Price Group */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                Location
              </label>
              <input
                type="text"
                placeholder="Banana Island, Lagos"
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                Asking Price (₦)
              </label>
              <input
                type="number"
                placeholder="2,500,000,000"
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          {/* Media Upload Area */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
              High-Res Visuals
            </label>
            <div className="border-2 border-dashed border-gray-100 rounded-3xl p-12 flex flex-col items-center justify-center text-center group hover:border-accent transition-colors cursor-pointer bg-gray-50/50">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                <Upload size={24} />
              </div>
              <p className="text-sm text-primary font-medium">
                Drop architectural photos or video tours
              </p>
              <p className="text-xs text-gray-400 mt-1 italic">
                Maximum 50MB per file
              </p>
            </div>
          </div>

          {/* Concierge Note */}
          <div className="p-6 bg-gray-50 rounded-2xl flex items-start gap-4 border border-gray-100">
            <ShieldCheck className="text-accent shrink-0" size={20} />
            <p className="text-[11px] text-gray-500 leading-relaxed italic">
              By submitting, you agree to the **EstatePro Verification
              Process**. Our team will physically inspect the property to ensure
              it meets our standard for legal title and structural integrity
              before listing.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-4 text-xs font-bold uppercase tracking-widest border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="flex-1 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-accent hover:text-primary transition-all flex items-center justify-center gap-2"
            >
              Submit for Appraisal <ChevronRight size={14} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListingModal;
