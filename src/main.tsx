import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth-context.tsx";
import { WatchlistProvider } from "./context/watchlist-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <WatchlistProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WatchlistProvider>
    </AuthProvider>
  </StrictMode>,
);
