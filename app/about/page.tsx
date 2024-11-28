"use client";

import React from "react";
import AboutUs from "./WhyChooseus";
import Banner from "./Banner";
import MedicalStats from "../Home/Stats";
import AboutDetail from "./detail";
import Footer from "../Home/Footer";
import HelpSection from "./here-to-help";
import dynamic from "next/dynamic";

// Dynamically import the Leaflet map component with SSR disabled
const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
  ssr: false,
});

export default function Page() {    
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
