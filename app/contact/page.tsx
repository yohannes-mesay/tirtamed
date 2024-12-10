"use client";
import React from "react";
import ContactBanner from "./contact-banner";
import Footer from "../Home/Footer";
// import LeafletMap from "../Home/MapComponent";
import ContactForm from "./contact-form";
import dynamic from "next/dynamic";
const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
  ssr: false,
});
export default function page() {
  return (
    <div className="">
      <ContactBanner />
      <ContactForm />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
