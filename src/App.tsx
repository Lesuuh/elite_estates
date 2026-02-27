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

function App() {
  const location = useLocation();
  const isAuthSection = location.pathname.startsWith("/auth");
  return (
    <>
      {!isAuthSection && <Navbar />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path={`/properties/:id`} element={<PropertyDetails />} />
        <Route path="/developments" element={<DevelopmentsPage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="auth" element={<Auth />} />
        <Route path="auth/portal" element={<Portfolio />} />
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
