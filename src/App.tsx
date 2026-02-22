import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import About from "./pages/home/About";
import FeaturedListing from "./pages/home/FeaturedListing";
import Hero from "./pages/home/Hero";
import Testimonial from "./pages/home/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedListing />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
