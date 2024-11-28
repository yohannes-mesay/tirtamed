import React from "react";
import ContactBanner from "./contact-banner";
import Footer from "../Home/Footer";
import LeafletMap from "../Home/MapComponent";

export default function page() {
  return (
    <div className="">
      <ContactBanner />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
