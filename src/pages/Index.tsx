import React, { useState } from "react";
import Navbar, { LanguageContext } from "../components/Navbar";
import Hero from "../components/Hero";
import HotelInfo from "../components/HotelInfo";
import About from "../components/About";
import Rooms from "../components/Rooms";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import PropertyPolicies from "../components/PropertyPolicies";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Testimonials from "../components/Testimonials";
import Reviews from "./Reviews";
import PartnershipSection from "../components/Partnerships";

const Index = () => {
  const [language, setLanguage] = useState('en');
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Rooms />
        <Amenities />
        <Location />
        <PartnershipSection />
        <PropertyPolicies />
        <Testimonials />
        <Booking />
        <Footer />
        <ScrollToTop />
        {/* Route για τη σελίδα reviews */}
        {/* Αν χρησιμοποιείται react-router, προσθέστε Route path="/reviews" element={<Reviews />} */}
      </div>
    </LanguageContext.Provider>
  );
};

export default Index;
