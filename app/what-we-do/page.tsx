"use client";
import React from "react";
// import ServicesPage from "./main";
// import ServicesBanner from "./servies-banner";
import Footer from "../Home/Footer";
import dynamic from "next/dynamic";
const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
  ssr: false,
});
import banner1 from "@/public/tirtabanner.jpg";

// import { Stethoscope, Book, Users, Notebook } from "lucide-react";
import { SiFuturelearn } from "react-icons/si";

import serv1 from "@/public/serv1.jpg";
// import serv2 from "@/public/serv2.jpg";
import serv3 from "@/public/serv3.jpg";
import serv4 from "@/public/serv4.jpg";
import yegna from "@/public/yegna.jpg";
import { RiCommunityFill } from "react-icons/ri";
import ServicesBanner from "../services/servies-banner";
import ServicesPage from "../services/main";
import { PiAmbulanceFill } from "react-icons/pi";
import { GiArchiveResearch } from "react-icons/gi";

const services = [
  {
    icon: <SiFuturelearn className="h-8 w-8" />,
    title: "Emergency Response Training",
    description:
      "We deliver comprehensive first aid and emergency response trainings tailored for:",
    image: serv1,
    link: "/what-we-do/detail",
  },
  {
    icon: <PiAmbulanceFill className="h-8 w-8" />,
    title: "Yegna Ambulance Network",
    description:
      "Innovation meets necessity in our groundbreaking Yegna Ambulance service. This pioneering program seamlessly integrates Ethiopia's ambulance resources into a coordinated emergency response network:",
    image: yegna,
    link: "/what-we-do/detail",
  },
  {
    icon: <GiArchiveResearch className="h-8 w-8" />,
    title: "Research and Consultancy",
    description:
      "Our research and consultancy division drives innovation in Ethiopian emergency medical services:",
    image: serv3,
    link: "/what-we-do/detail",
  },
  {
    icon: <RiCommunityFill className="h-8 w-8" />,
    title: "Community Impact Initiative",
    description: "We believe in building resilient communities through",
    image: serv4,
    link: "/what-we-do/detail",
  },
];
export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="What We Do" />
      <ServicesPage services={services} />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
