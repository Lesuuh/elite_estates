import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react";
import { useAuth } from "../../../context/auth-context";
import type { NavigationItem } from "../../../pages/Portfolio";

interface SidebarProps {
  navigation: NavigationItem[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const Sidebar = ({ navigation, activeTab, setActiveTab }: SidebarProps) => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Helper to handle tab change and close menu on mobile
  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[100] p-6 flex justify-end pointer-events-none">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            pointer-events-auto p-4 rounded-2xl transition-all duration-500 flex items-center justify-center
            ${
              isOpen
                ? "bg-accent text-primary rotate-90 shadow-2xl shadow-accent/20"
                : "bg-white text-primary  hover:bg-white/20"
            }
          `}
        >
          {isOpen ? (
            <X size={22} strokeWidth={2.5} />
          ) : (
            <div className="flex flex-col gap-1.5 items-end">
              <span className="w-6 h-0.5 bg-current rounded-full"></span>
              <span className="w-4 h-0.5 bg-current rounded-full"></span>
              <Menu size={20} className="hidden" />{" "}
              {/* Hidden but kept for logic */}
            </div>
          )}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR ASIDE */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-[70] w-72 bg-primary p-8 flex flex-col transition-transform duration-500 ease-in-out
        lg:sticky lg:h-screen lg:w-64 lg:translate-x-0 lg:z-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="mb-12 hidden lg:block">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-br-lg flex items-center justify-center">
              <span className="text-primary font-bold">E</span>
            </div>
            <span className="text-white font-bold tracking-tighter">
              EstatePro
            </span>
          </Link>
        </div>

        {/* Mobile-only close button inside sidebar (Optional) */}
        <div className="flex lg:hidden justify-between items-center mb-12">
          <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em]">
            Menu
          </span>
          <button onClick={() => setIsOpen(false)} className="text-gray-400">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? "bg-accent text-primary font-bold shadow-lg shadow-accent/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon}
              <span className="text-xs uppercase tracking-widest">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => {
            logout();
            setIsOpen(false);
          }}
          className="mt-auto flex items-center gap-4 px-4 py-3 text-red-400/70 hover:text-red-400 transition-colors border-t border-white/5 pt-6"
        >
          <LogOut size={18} />
          <span className="text-xs uppercase tracking-widest font-bold">
            Sign Out
          </span>
        </button>
      </aside>

      {/* Spacer for mobile to prevent content from going under the fixed header */}
      <div className="h-16 lg:hidden" />
    </>
  );
};

export default Sidebar;
