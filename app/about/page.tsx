"use client";

import React from "react";
import Detail from "./about-detail";
import Banner from "./Banner";

import Footer from "../Home/Footer";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <Banner />
      <Detail />
      {/* <AboutSection sections={sections} /> */}

      {/* <AboutMain
        title="Training & Certification"
        desc="Our first aid training programs are designed to meet diverse learning needs while maintaining the highest standards of medical education. Each program is carefully structured to provide both theoretical knowledge and hands-on practical experience, delivered by certified instructors with extensive field experience. Whether you're a healthcare professional, first responder, or community member, our courses equip you with the skills and confidence to handle emergency situations effectively."
        sections={training}
      /> */}

      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
