"use client";
import React from "react";
import Footer from "../Home/Footer";
import dynamic from "next/dynamic";
const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
  ssr: false,
});
import banner1 from "@/public/tirtabanner.jpg";
import res from "@/public/res.jpg";
import need from "@/public/need.jpg";
import online from "@/public/online.jpg";
import ServicesBanner from "../services/servies-banner";
import ServicesPage from "../services/main";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdFoundation } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoHelpBuoy } from "react-icons/io5";

const services = [
  {
    icon: <FaPeopleGroup className="h-8 w-8" />,
    title: "About our research and consultancy services",
    description: "Tech-driven ambulance service",
    image: res,
    link: "/consultancy/detail",
  },
  {
    icon: <MdFoundation className="h-8 w-8" />,
    title: "Founding members research publications",
    description: "Customer-focused research",
    image: need,
    link: "/consultancy/detail",
  },
  {
    icon: <HiOutlineDesktopComputer className="h-8 w-8" />,
    title: "Quality Assurance",
    description: "Latest partnerships and collaborations",
    image: online,
    link: "/consultancy/detail",
  },
  {
    icon: <IoHelpBuoy className="h-8 w-8" />,
    title: "Service Options",
    description: "Specialty care transport and other services",
    image: online,
    link: "/consultancy/detail",
  },
];

export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="Reasearch & Consultancy" />
      <ServicesPage services={services} />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
