import { Trash2, MapPin, ArrowUpRight, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useWatchlist } from "../../../context/watchlist-context";
import { timeAgoOrDate } from "../../../utils/time";

const Watchlist = () => {
  const { items, removeFromWatchlist } = useWatchlist();

  const formatPrice = (price: string | number) => {
    if (typeof price === "number") return `₦${price.toLocaleString("en-NG")}`;
    return price;
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

        <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/5 px-4 py-2 rounded-full border border-accent/10">
          <Clock size={14} /> Auto-updates every 15m
        </div>
      </div>

      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Image Container - FIXED HEIGHT & WIDTH */}
              <div className="w-full md:w-64 h-48 md:h-40 relative flex-shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Status Badge on Image */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <div
                    className={`text-[8px] font-bold uppercase px-2 py-1 rounded-md shadow-sm ${
                      item.status === "Available"
                        ? "bg-green-500 text-white"
                        : item.status === "Sold"
                          ? "bg-gray-500 text-white"
                          : "bg-amber-500 text-white"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
              </div>

              {/* Details Content */}
              <div className="flex-1 p-6 flex flex-col md:flex-row justify-between items-center gap-6 w-full">
                <div className="space-y-1 text-center md:text-left">
                  <h3 className="text-lg font-serif text-primary">
                    {item.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <p className="flex items-center justify-center md:justify-start gap-1 text-gray-400 text-xs">
                      <MapPin size={12} className="text-accent" />{" "}
                      {item.location}
                    </p>
                  </div>
                  <p className="text-[9px] text-gray-300 uppercase tracking-widest pt-1">
                    Added {timeAgoOrDate(item.createdAt)}
                  </p>
                </div>

                <div className="text-center md:text-right md:min-w-[150px]">
                  <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest mb-1">
                    Market Value
                  </p>
                  <p className="text-xl font-bold text-primary">
                    {formatPrice(item.price)}
                  </p>
                </div>

                {/* Actions - Cleaned up (Inquire Removed) */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeFromWatchlist(item.id.toString())}
                    className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    title="Remove"
                  >
                    <Trash2 size={18} />
                  </button>

                  <Link
                    to={`/properties/${item.id}`}
                    className="p-3 text-white bg-primary hover:bg-accent hover:text-primary rounded-xl transition-all shadow-md"
                    title="View Asset"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-32 text-center border-2 border-dashed border-gray-100 rounded-[40px]">
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
