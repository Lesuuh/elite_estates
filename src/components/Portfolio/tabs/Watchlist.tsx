import { useState } from "react";
import {
  Trash2,
  MessageSquare,
  MapPin,
  ArrowUpRight,
  Clock,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Watchlist = () => {
  // Mock data for the watchlist
  const [items, setItems] = useState([
    {
      id: 101,
      title: "The Obsidian Manor",
      location: "Ikoyi, Lagos",
      price: "₦3.2B",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      status: "Available",
      addedDate: "2 days ago",
    },
    {
      id: 102,
      title: "Azure Waterfront Villa",
      location: "Lekki Phase 1, Lagos",
      price: "₦850M",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
      status: "Price Dropped",
      addedDate: "1 week ago",
    },
  ]);

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section className="animate-in fade-in duration-700">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-serif text-primary italic">
            Private Watchlist
          </h2>
          <p className="text-gray-400 text-xs uppercase tracking-widest mt-2">
            Monitoring {items.length} premium assets
          </p>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-tighter bg-accent/5 px-4 py-2 rounded-full border border-accent/10">
          <Clock size={14} /> Auto-updates every 15m
        </div>
      </div>

      {items.length > 0 ? (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="w-full md:w-72 h-48 md:h-auto relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {item.status === "Price Dropped" && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-[9px] font-bold uppercase px-3 py-1 rounded-full">
                    Price Update
                  </div>
                )}
              </div>

              {/* Details Content */}
              <div className="flex-1 p-8 flex flex-col md:flex-row justify-between items-center gap-6 w-full">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-xl font-serif text-primary">
                    {item.title}
                  </h3>
                  <p className="flex items-center justify-center md:justify-start gap-1 text-gray-400 text-xs">
                    <MapPin size={12} className="text-accent" /> {item.location}
                  </p>
                  <p className="text-[10px] text-gray-300 uppercase tracking-widest">
                    Added {item.addedDate}
                  </p>
                </div>

                <div className="text-center md:text-right">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">
                    Current Value
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {item.price}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-4 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                    title="Remove from Watchlist"
                  >
                    <Trash2 size={20} />
                  </button>

                  <Link
                    to={`/properties/${item.id}`}
                    className="p-4 text-gray-300 hover:text-primary hover:bg-gray-50 rounded-2xl transition-all"
                  >
                    <ArrowUpRight size={20} />
                  </Link>

                  <button className="bg-primary text-white px-6 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all flex items-center gap-2">
                    <MessageSquare size={16} /> Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-40 text-center border-2 border-dashed border-gray-100 rounded-[40px]">
          <Heart className="mx-auto text-gray-100 mb-4" size={48} />
          <p className="text-gray-400 font-serif italic text-xl">
            Your collection is currently empty.
          </p>
          <Link
            to="/listings"
            className="text-accent text-xs font-bold uppercase tracking-widest mt-4 inline-block hover:underline"
          >
            Explore Assets
          </Link>
        </div>
      )}
    </section>
  );
};

export default Watchlist;
