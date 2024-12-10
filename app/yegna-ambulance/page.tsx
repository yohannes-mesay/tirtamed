"use client";
import React from "react";
import Footer from "../Home/Footer";
import dynamic from "next/dynamic";
const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
  ssr: false,
});
import banner1 from "@/public/tirtabanner.jpg";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import amb from "@/public/amb1.jpg";
import need from "@/public/need.jpg";
import etech from "@/public/etech.jpg";
import ServicesBanner from "../services/servies-banner";
import ServicesPage from "../services/main";
import { GiArchiveResearch } from "react-icons/gi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaServicestack } from "react-icons/fa";

const services = [
  {
    icon: <IoExtensionPuzzleOutline className="h-8 w-8" />,
    title: "Peripheral Care Excellence",
    description: "Technology driven ambulance service",
    image: amb,
    link: "/yegna-ambulance/detail",
  },
  {
    icon: <HiOutlineStatusOnline className="h-8 w-8" />,
    title: "Powered by Innovation and Digital Integration",
    description: "Based on customers need",
    image: need,
    link: "/yegna-ambulance/detail",
  },
  {
    icon: <GiArchiveResearch className="h-8 w-8" />,
    title: "Quality Assurance",
    description:
      "Stay updated with our latest partnerships and collaborations.",
    image: etech,
    link: "/yegna-ambulance/detail",
  },
  {
    icon: <FaServicestack className="h-8 w-8" />,
    title: "Service Options",
    description:
      "Stay updated with our latest partnerships and collaborations.",
    image: etech,
    link: "/yegna-ambulance/detail",
  },
];

export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="Yegna Ambulance " />
      <ServicesPage services={services} />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
