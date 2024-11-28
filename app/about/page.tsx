"use client";
import React from "react";
import AboutUs from "./WhyChooseus";
import Banner from "./Banner";
import MedicalStats from "../Home/Stats";
import AboutDetail from "./detail";
import Footer from "../Home/Footer";
import LeafletMap from "../Home/MapComponent";
import HelpSection from "./here-to-help";

export default function page() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <AboutDetail />
      <MedicalStats />
      <HelpSection />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />

      <Footer />
    </div>
  );
}
