import { createContext, useContext, useEffect, useState } from "react";
import type { Property } from "../types";
import { useAuth } from "./auth-context";

type WatchlistItem = Property;

type WatchlistContextType = {
  items: WatchlistItem[];
  addToWatchlist: (item: Property) => void;
  removeFromWatchlist: (id: string) => void;
  isWatchlisted: (id: string) => boolean;
  clearWatchlist: () => void;
};

const WatchlistContext = createContext<WatchlistContextType | undefined>(
  undefined,
);

export const WatchlistProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  //   key per user
  const storageKey = user ? `watchlist_${user.id}` : null;

  const [items, setItems] = useState<WatchlistItem[]>(() => {
    if (!storageKey) return [];
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : [];
  });

  // Persist wishlist
  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(items));
    }
  }, [items, storageKey]);

  // add to watchlist
  const addToWatchlist = (item: Property) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  //   remove from watchlist
  const removeFromWatchlist = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id.toString() !== id));
  };

  const isWatchlisted = (id: string) => {
    return items.some((item) => item.id.toString() === id);
  };

  //   clear watchlist
  const clearWatchlist = () => {
    setItems([]);
  };

  return (
    <WatchlistContext.Provider
      value={{
        items,
        addToWatchlist,
        removeFromWatchlist,
        isWatchlisted,
        clearWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error("useWatchlist must be used within WatchlistProvider");
  }
  return context;
};
