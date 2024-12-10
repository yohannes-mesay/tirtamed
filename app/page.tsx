"use client";

import Hero from "./components/Hero/Hero";
import SpecialistsSection from "./Home/SpecialistsSection";
import Footer from "./Home/Footer";
import "leaflet/dist/leaflet.css";
import Partners from "./Home/partners";
import ActionMenu from "./Home/action-menu";
import CommunityService from "./Home/community-service";
import TrainingSection from "./Home/video-training";

export default function Home() {
  return (
    <div>
      <Hero />
      <ActionMenu />
      <CommunityService />
      <TrainingSection />
      {/* <MedicalCards />
      <WhyChooseUs /> */}
      <SpecialistsSection />
      <div className="absolute right-0 left-0">
        {/* <TeachingClasses /> */}
        {/* <Pricing /> */}
        <Partners />
        <Footer />
      </div>
    </div>
  );
}
