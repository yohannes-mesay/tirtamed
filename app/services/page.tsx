"use client";
import React from "react";
import ServicesPage from "./main";
import ServicesBanner from "./servies-banner";
export default function page() {
  return (
    <div>
      <ServicesBanner />
      <ServicesPage />
    </div>
  );
}
