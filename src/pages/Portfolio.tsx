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
import Preference from "../components/Portfolio/tabs/Preferences";

const defaults = {
  // top‑level aliases
  userName: "Chief Dr. Adeyemi",
  pageTitle: "Investor Dashboard",
  initialTab: "my-assets",
  growthRate: "+12.4%",
  sectionHeaders: {
    holdings: "Your Real Estate Holdings",
    valuation: "Current Valuation",
  },

  // original nested structures for flexibility
  user: {
    name: "Chief Dr. Adeyemi",
  },
  dashboard: {
    title: "Investor Dashboard",
    growthRate: "+12.4%",
  },
  stats: [
    {
      label: "Portfolio Value",
      value: "₦4.2B",
      icon: <TrendingUp size={20} />,
    },
    {
      label: "Active Listings",
      value: "3",
      icon: <LayoutDashboard size={20} />,
    },
    { label: "Watchlist", value: "12", icon: <Heart size={20} /> },
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
  properties: [
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
        "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?q=80&w=800",
    },
  ],

  labels: {
    signOut: "Sign Out",
  },
  cta: {
    inquire: "Inquire New Property",
    list: "List New Asset",
  },

  modal: {
    title: "Property Appraisal",
    headerTitle: "Property Appraisal",
    subtext:
      "Submit your property details for verification. Once approved by our concierge, it will be visible to our exclusive network of investors.",
    headerSub:
      "Submit your property details for verification. Once approved by our concierge, it will be visible to our exclusive network of investors.",
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
      "By submitting, you agree to the EstatePro Verification Process. Our team will physically inspect the property to ensure it meets our standard for legal title and structural integrity before listing.",
  },
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("my-assets");
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);
  const navigate = useNavigate();

  const renderActiveTab = () => {
    switch (activeTab) {
      case "my-assets":
        return <MyAssets defaults={defaults} />;
      case "watchlist":
        return <Watchlist />;

      case "history":
        return <Transactions />;

      case "settings":
        return <div>Coming soon...</div>;
      default:
        return <MyAssets defaults={defaults} />;
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
