"use client";

import Hero from "./components/Hero/Hero";
import SpecialistsSection from "./Home/SpecialistsSection";
import MedicalCards from "./Home/medicalCard";
import WhyChooseUs from "./Home/WhyChooseus";
import TeachingClasses from "./Home/Stats";
import Footer from "./Home/Footer";
import Pricing from "./Home/Pricing";
import "leaflet/dist/leaflet.css";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <MedicalCards />
      <WhyChooseUs />
      <SpecialistsSection />
      <div className="absolute right-0 left-0">
        <TeachingClasses />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}
