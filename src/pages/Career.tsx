
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Career = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Karriere</h1>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-xl text-gray-500">Stellenangebote werden hier angezeigt</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
