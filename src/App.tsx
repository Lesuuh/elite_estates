import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ListingsPage from "./pages/ListingsPage";
import PropertyDetails from "./pages/PropertyDetails";
import DevelopmentsPage from "./pages/DevelopmentPage";

function App() {
  return (
    <>
      <Navbar />

      {/* <div className=""> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path={`/properties/:id`} element={<PropertyDetails />} />
        <Route path="/developments" element={<DevelopmentsPage />} />
      </Routes>
      {/* </div> */}

      <Footer />
    </>
  );
}

export default App;
