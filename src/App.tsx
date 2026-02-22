import "./App.css";
import Navbar from "./components/Header/Navbar";
import About from "./pages/home/About";
import FeaturedListing from "./pages/home/FeaturedListing";
import Hero from "./pages/home/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedListing />
      <About />
    </>
  );
}

export default App;
