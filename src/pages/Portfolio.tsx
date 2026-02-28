import {
  Heart,
  History,
  LayoutDashboard,
  Settings,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Portfolio/assets/Sidebar";
import DashboardHeader from "../components/Portfolio/assets/DashboardHeader";
import ListingModal from "../components/Portfolio/assets/ListingModal";
import MyAssets from "../components/Portfolio/tabs/MyAssets";
import Watchlist from "../components/Portfolio/tabs/Watchlist";
import Transactions from "../components/Portfolio/tabs/Transactions";
import { useAuth } from "../context/auth-context";
import { useWatchlist } from "../context/watchlist-context";

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string; // formatted like "₦1.8B"
  status: string; // e.g., "Acquired", "In Escrow"
  image: string;
}

// or React.ReactNode if you prefer

export interface Stat {
  label: string;
  value: string | number;
  icon: React.ReactNode; // Lucide icon component
}

export interface NavigationItem {
  id: string; // "my-assets", "watchlist", etc.
  label: string;
  icon: React.ReactNode;
}

export interface ModalLabels {
  assetSubmission: string;
  title: string;
  location: string;
  price: string;
  media: string;
  dropHint: string;
  sizeHint: string;
  saveDraft: string;
  submit: string;
}

export interface ModalPlaceholders {
  title: string;
  location: string;
  price: string;
}

export interface ModalFields {
  titlePlaceholder: string;
  locationPlaceholder: string;
  pricePlaceholder: string;
}

export interface Modal {
  title: string;
  headerTitle: string;
  subtext: string;
  headerSub: string;
  labels: ModalLabels;
  placeholders: ModalPlaceholders;
  fields: ModalFields;
  disclaimer: string;
}

export interface Defaults {
  userName: string;
  pageTitle: string;
  initialTab: string;
  growthRate: string;
  sectionHeaders: {
    holdings: string;
    valuation: string;
  };
  user: {
    name: string;
  };
  dashboard: {
    title: string;
    growthRate: string;
  };
  stats: Stat[];
  navigation: NavigationItem[];
  labels: {
    signOut: string;
  };
  cta: {
    inquire: string;
    list: string;
  };
  modal: Modal;
}
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("my-assets");
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items } = useWatchlist();

  const properties: Property[] = [
    {
      id: 1,
      title: "The Glass Pavilion",
      location: "Banana Island, Lagos",
      price: "₦1.8B",
      status: "Acquired",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
    },
    {
      id: 2,
      title: "Skyline Penthouse",
      location: "Eko Atlantic, Victoria Island",
      price: "₦2.4B",
      status: "Acquired",
      image:
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 3,
      title: "The Heritage Mansion",
      location: "Ikoyi, Lagos",
      price: "₦2.1B",
      status: "Under Management",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 4,
      title: "Aso Rock View Estate",
      location: "Asokoro, Abuja",
      price: "₦4.5B",
      status: "In Escrow",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const portfolioValue = properties.reduce((total, property) => {
    const priceStr = property.price.replace(/₦|,/g, "").toUpperCase(); // remove ₦ and commas
    let priceNum = 0;

    if (priceStr.endsWith("B")) {
      priceNum = parseFloat(priceStr.replace("B", "")) * 1_000_000_000;
    } else if (priceStr.endsWith("M")) {
      priceNum = parseFloat(priceStr.replace("M", "")) * 1_000_000;
    } else {
      priceNum = parseFloat(priceStr);
    }

    return total + priceNum;
  }, 0);

  const defaults: Defaults = {
    userName: user?.name || "Chief Dr. Adeyemi",
    pageTitle: "Investor Dashboard",
    initialTab: "my-assets",
    growthRate: "+12.4%",
    sectionHeaders: {
      holdings: "Your Real Estate Holdings",
      valuation: "Current Valuation",
    },
    user: {
      name: user?.name || "Chief Dr. Adeyemi",
    },
    dashboard: {
      title: "Investor Dashboard",
      growthRate: "+12.4%",
    },
    stats: [
      {
        label: "Portfolio Value",
        value: "₦" + portfolioValue.toLocaleString(),
        icon: <TrendingUp size={20} />,
      },
      {
        label: "Active Listings",
        value: properties.length,
        icon: <LayoutDashboard size={20} />,
      },
      { label: "Watchlist", value: items.length, icon: <Heart size={20} /> },
    ],
    navigation: [
      {
        id: "my-assets",
        label: "My Assets",
        icon: <LayoutDashboard size={18} />,
      },
      { id: "watchlist", label: "Watchlist", icon: <Heart size={18} /> },
      { id: "history", label: "Transactions", icon: <History size={18} /> },
      { id: "settings", label: "Preferences", icon: <Settings size={18} /> },
    ],
    labels: { signOut: "Sign Out" },
    cta: { inquire: "Inquire New Property", list: "List New Asset" },
    modal: {
      title: "Property Appraisal",
      headerTitle: "Property Appraisal",
      subtext:
        "Submit your property details for verification. Once approved...",
      headerSub: "Submit your property details for verification...",
      labels: {
        assetSubmission: "Asset Submission",
        title: "Property Title",
        location: "Location",
        price: "Asking Price (₦)",
        media: "High-Res Visuals",
        dropHint: "Drop architectural photos or video tours",
        sizeHint: "Maximum 50MB per file",
        saveDraft: "Save Draft",
        submit: "Submit for Appraisal",
      },
      placeholders: {
        title: "e.g. The Sapphire Villa",
        location: "Banana Island, Lagos",
        price: "2,500,000,000",
      },
      fields: {
        titlePlaceholder: "e.g. The Sapphire Villa",
        locationPlaceholder: "Banana Island, Lagos",
        pricePlaceholder: "2,500,000,000",
      },
      disclaimer:
        "By submitting, you agree to the EstatePro Verification Process...",
    },
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "my-assets":
        return <MyAssets defaults={defaults} properties={properties} />;
      case "watchlist":
        return <Watchlist />;

      case "history":
        return <Transactions />;

      case "settings":
        return <div>Coming soon...</div>;
      default:
        return <MyAssets defaults={defaults} properties={properties} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex">
      <Sidebar
        navigation={defaults.navigation}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1 p-6 md:p-12">
        <DashboardHeader
          title={defaults.dashboard.title}
          userName={defaults.user.name}
          inquire={defaults.cta.inquire}
          list={defaults.cta.list}
          onInquire={() => navigate("/contact")}
          onList={() => setIsListingModalOpen(true)}
        />

        <div className="transition-all duration-500 ease-in-out">
          {renderActiveTab()}
        </div>
      </main>

      {isListingModalOpen && (
        <ListingModal
          onClose={() => setIsListingModalOpen(false)}
          isOpen={isListingModalOpen}
        />
      )}
    </div>
  );
};

export default Portfolio;
