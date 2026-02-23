import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import ListingsPage from "./pages/ListingsPage";

function App() {
  return (
    <>
      <Navbar />

      {/* <div className=""> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<ListingsPage />} />
        </Routes>
      {/* </div> */}

      <Footer />
    </>
  );
}

export default App;
