"use client";
import AboutMain from "@/app/about/yegna";
import Footer from "@/app/Home/Footer";
import ServicesBanner from "@/app/services/servies-banner";
import dynamic from "next/dynamic";
import React from "react";
import banner1 from "@/public/tirtabanner.jpg";

const LeafletMap = dynamic(() => import("../../Home/MapComponent"), {
  ssr: false,
});
interface Section {
  title: string;
  description: string;
  bulletPoints: BulletPoint[];
}
interface BulletPoint {
  title: string;
  description: string;
}

const yegna: Section[] = [
  {
    title: "Pre-hospital Care Excellence",
    description:
      "When emergencies strike, every second counts. Our network of highly trained medical professionals delivers advanced life support and emergency care directly at the scene. We maintain multiple tiers of ambulance service, strategically placed to minimize response times across our coverage areas.",
    bulletPoints: [],
  },
  {
    title: "Powered by Innovation and Digital Integration",
    description:
      "Through our partnership with eTech, a leading technology company in Ethiopia, Yegna Ambulance Network utilizes cutting-edge digital solutions to enhance every aspect of our service. Our smart dispatch system provides real-time ambulance tracking and automated deployment of the nearest units, ensuring the fastest possible response times. Our 24/7 command center coordinates all emergency responses through an advanced communication platform. This central hub manages resources, tracks performance, and ensures optimal response to every emergency call.",
    bulletPoints: [],
  },
  {
    title: "Quality Assurance",
    description:
      "We uphold the highest standards through regular staff training, provision of emergency kits, and continuous performance monitoring. Our teams regularly update their certifications to stay aligned with the latest emergency care protocols.",
    bulletPoints: [],
  },
  {
    title: "Service Options",
    description:
      "Whether you require emergency or non-emergency medical transport, our services are available 24/7. We provide:",
    bulletPoints: [
      { title: "Emergency medical response", description: "" },
      { title: "Inter-facility transfers", description: "" },
      { title: "Specialty care transport", description: "" },
      { title: "Mass gathering medical coverage", description: "" },
      { title: "Remote area services", description: "" },
    ],
  },
  {
    title: "Join Our Network",
    description:
      "Yegna Ambulance Network welcomes partnerships with healthcare facilities, emergency service providers, and medical transport companies. Together, we're building Ethiopia's most reliable pre-hospital care system.Contact us to learn more about our services or to become part of our growing network of healthcare partners.",
    bulletPoints: [],
  },
];
export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="" />
      <AboutMain
        title="Yegna Ambulance Network"
        desc="The Yegna Ambulance Network brings a new era of emergency medical response to Ethiopia. By combining advanced technology with professional medical care, we ensure that every emergency call receives the fastest possible response with the highest quality of care."
        sections={yegna}
      />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
