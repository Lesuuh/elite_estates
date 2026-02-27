import { useState } from "react";
import { 
  
  Bell, 
  Shield,
  Wallet, 
  Check,
  ChevronRight
} from "lucide-react";

const Preferences = () => {
  const [activeSection, setActiveSection] = useState("investment");

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-10">
        <h2 className="text-3xl font-serif text-primary italic">Profile & Preferences</h2>
        <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mt-2">Customize your acquisition experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sub-navigation */}
        <div className="space-y-1">
          {[
            { id: "investment", label: "Investment Profile", icon: <Wallet size={16} /> },
            { id: "notifications", label: "Alert Settings", icon: <Bell size={16} /> },
            { id: "security", label: "Security & Privacy", icon: <Shield size={16} /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all ${
                activeSection === item.id 
                ? "bg-white shadow-sm text-primary font-bold" 
                : "text-gray-400 hover:text-primary"
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-[11px] uppercase tracking-widest">{item.label}</span>
              </div>
              <ChevronRight size={14} className={activeSection === item.id ? "opacity-100" : "opacity-0"} />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-sm">
          {activeSection === "investment" && (
            <div className="space-y-10">
              {/* Interest Areas */}
              <div className="space-y-4">
                <h4 className="text-lg font-serif text-primary">Target Locations</h4>
                <div className="flex flex-wrap gap-3">
                  {["Ikoyi", "Banana Island", "Victoria Island", "Maitama", "Eko Atlantic"].map((loc) => (
                    <button key={loc} className="px-5 py-2 rounded-full border border-gray-100 text-[10px] uppercase font-bold text-gray-400 hover:border-accent hover:text-accent transition-all">
                      {loc}
                    </button>
                  ))}
                  <button className="px-5 py-2 rounded-full border border-dashed border-gray-200 text-[10px] uppercase font-bold text-gray-300 flex items-center gap-2">
                    + Add New
                  </button>
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-4">
                <h4 className="text-lg font-serif text-primary">Budget Ceiling</h4>
                <input 
                  type="range" 
                  min="100000000" 
                  max="5000000000" 
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent" 
                />
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>₦100M</span>
                  <span className="text-primary text-sm font-serif">Up to ₦5B+</span>
                </div>
              </div>

              {/* Property Types */}
              <div className="space-y-4">
                <h4 className="text-lg font-serif text-primary">Asset Classes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Waterfront Villas", "Penthouse Suites", "Off-Market Estates", "Commercial Landmarks"].map((type) => (
                    <div key={type} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <span className="text-xs text-primary font-medium">{type}</span>
                      <div className="w-5 h-5 bg-accent rounded flex items-center justify-center">
                        <Check size={14} className="text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50">
                <button className="bg-primary text-white px-10 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all">
                  Update Portfolio Brief
                </button>
              </div>
            </div>
          )}

          {activeSection === "security" && (
            <div className="space-y-8">
              <h4 className="text-lg font-serif text-primary">Authentication & Privacy</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-gray-50">
                  <div>
                    <p className="text-sm font-bold text-primary">Two-Factor Authentication</p>
                    <p className="text-xs text-gray-400 font-light">Secure your acquisitions with SMS/Email OTP</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-50">
                  <div>
                    <p className="text-sm font-bold text-primary">Anonymous Browsing</p>
                    <p className="text-xs text-gray-400 font-light">Hide your active interests from other investors</p>
                  </div>
                  <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preferences;