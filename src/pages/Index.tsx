
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import About from "../components/About";
import Locations from "../components/Locations";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <About />
        <Locations />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
