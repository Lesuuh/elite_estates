import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ListingsPage from "./pages/ListingsPage";
import PropertyDetails from "./pages/PropertyDetails";
import DevelopmentsPage from "./pages/DevelopmentPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SearchResults from "./pages/SearchPage";
import ScrollToTop from "./components/ScrollToTop";
import Auth from "./pages/Auth";
import Portfolio from "./pages/Portfolio";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/auth-context";
import { useWatchlist } from "./context/watchlist-context";
import CareersPage from "./pages/CareersPage";

function App() {
  const location = useLocation();
  const isAuthSection = location.pathname.startsWith("/auth");

  const { isAuthenticated } = useAuth();
  const { items } = useWatchlist();
  console.log(items);
  console.log(isAuthenticated);
  return (
    <>
      {!isAuthSection && <Navbar />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path={`/properties/:id`} element={<PropertyDetails />} />
        <Route
          path="/developments"
          element={
            <ProtectedRoute>
              <DevelopmentsPage />
            </ProtectedRoute>
          }
        />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="auth" element={<Auth />} />
        <Route path="careers" element={<CareersPage />} />

        <Route
          path="auth/portal"
          element={
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <div className="pt-40 text-center font-serif italic text-2xl">
              Page not found
            </div>
          }
        />
      </Routes>

      {!isAuthSection && <Footer />}
    </>
  );
}

export default App;
