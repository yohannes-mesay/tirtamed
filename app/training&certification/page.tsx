"use client";
import React from "react";
import Footer from "../Home/Footer";
import dynamic from "next/dynamic";
const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
  ssr: false,
});
import banner1 from "@/public/tirtabanner.jpg";
import training1 from "@/public/training1.jpg";
import training3 from "@/public/training3.jpg";
import training4 from "@/public/training4.jpg";
import training6 from "@/public/training6.jpg";
import training7 from "@/public/trainee.jpg";
import training8 from "@/public/tr1.jpg";
// import training7 from "@/public/tr1.jpg";
// import training8 from "@/public/tr2.jpg";
// import yegna from "@/public/yegna.jpg";
import { RiCommunityFill } from "react-icons/ri";
import ServicesBanner from "../services/servies-banner";
import ServicesPage from "../services/main";
import { GiArchiveResearch } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaCertificate } from "react-icons/fa";
import { MdOutlineModelTraining } from "react-icons/md";

const services = [
  {
    icon: <MdComputer className="h-8 w-8" />,
    title: "Online Trainings",
    description: "Latest medical science courses.",
    image: training3,
    link: "/training&certification/detail",
  },
  {
    icon: <BiSolidMessageDetail className="h-8 w-8" />,
    title: "Why Choose TirtaMed’s Training?",
    description: "Hands-on clinical training.",
    image: training7,
    link: "/training&certification/detail",
  },
  {
    icon: <GiArchiveResearch className="h-8 w-8" />,
    title: "Hybrid Training",
    description: "Research and consultancy.",
    image: training6,
    link: "/training&certification/detail",
  },
  {
    icon: <RiCommunityFill className="h-8 w-8" />,
    title: "Face-to-Face Training (Classroom)",
    description: "Community health programs.",
    image: training1,
    link: "/training&certification/detail",
  },
  {
    icon: <MdOutlineModelTraining className="h-8 w-8" />,
    title: "Refresher Training",
    description: "Public health support.",
    image: training4,
    link: "/training&certification/detail",
  },
  {
    icon: <FaCertificate className="h-8 w-8" />,
    title: "Certification Process",
    description: "Comprehensive theoretical assessment",
    image: training8,
    link: "/training&certification/detail",
  },
];

export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="Training & Certification" />
      <ServicesPage services={services} />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
