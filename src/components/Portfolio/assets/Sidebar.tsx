import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

interface SidebarProps {
  navigation: any[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const Sidebar = ({ navigation, activeTab, setActiveTab }: SidebarProps) => {
  return (
    <aside className="w-64 bg-primary hidden lg:flex flex-col p-8 sticky top-0 h-screen">
      <div className="mb-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-br-lg flex items-center justify-center">
            <span className="text-primary font-bold">E</span>
          </div>
          <span className="text-white font-bold tracking-tighter">
            EstatePro
          </span>
        </Link>
      </div>

      <nav className="flex-1 space-y-2">
        {navigation.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
              activeTab === item.id
                ? "bg-accent text-primary font-bold"
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

      <button className="mt-auto flex items-center gap-4 px-4 py-3 text-red-400 hover:text-red-300 transition-colors">
        <LogOut size={18} />
        <span className="text-xs uppercase tracking-widest font-bold">
          Sign Out
        </span>
      </button>
    </aside>
  );
};

export default Sidebar;