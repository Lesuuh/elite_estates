import "./App.css";
import Navbar from "./components/Header/Navbar";
import FeaturedListing from "./pages/home/FeaturedListing";
import Hero from "./pages/home/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedListing />
    </>
  );
}

export default App;
