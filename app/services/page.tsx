"use client";
import React from "react";
import ServicesPage from "./main";
import ServicesBanner from "./servies-banner";
import Footer from "../Home/Footer";
import dynamic from "next/dynamic";
const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
  ssr: false,
});
import banner1 from "@/public/tirtabanner.jpg";

import { Stethoscope, Book, Users, Microscope, Notebook } from "lucide-react";
import { FaFirstAid } from "react-icons/fa";

import serv1 from "@/public/serv1.jpg";
import serv2 from "@/public/serv2.jpg";
import serv3 from "@/public/serv3.jpg";
import serv4 from "@/public/serv4.jpg";
import serv5 from "@/public/serv5.jpg";

const services = [
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Clinical Skills Training",
    link: "",
    description:
      "Hands-on training in essential clinical procedures and patient care techniques.",
    image: serv1,
  },
  {
    icon: <Book className="h-8 w-8" />,
    title: "Medical Knowledge Courses",
    link: "Medical Knowledge Courses",
    description:
      "Comprehensive courses covering the latest advancements in medical science and practice.",
    image: serv2,
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team-Based Learning",
    link: "Team-Based Learning",
    description:
      "Collaborative training sessions to improve teamwork in healthcare settings.",
    image: serv3,
  },
  {
    icon: <Notebook className="h-8 w-8" />,
    title: "Certification Programs",
    link: "Certification Programs",
    description:
      "Accredited certification programs for various medical specialties and skills.",
    image: serv4,
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Research Methodology",
    link: "Research Methodology",
    description:
      "Training in cutting-edge research methods and data analysis for healthcare.",
    image: serv5,
  },
  {
    icon: <FaFirstAid className="h-8 w-8" />,
    title: "Emergency Response",
    link: "Emergency Response",
    description:
      "Intensive training for quick and effective responses in medical emergencies.",
    image: serv1,
  },
];
export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="services" />
      <ServicesPage services={services} />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
