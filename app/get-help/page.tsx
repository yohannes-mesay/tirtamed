"use client";
import React from "react";
import Footer from "../Home/Footer";
import dynamic from "next/dynamic";
const LeafletMap = dynamic(() => import("../Home/MapComponent"), {
  ssr: false,
});
import banner1 from "@/public/tirtabanner.jpg";
import { GiPocketRadio } from "react-icons/gi";
import comm from "@/public/comm.jpg";
import emerg2 from "@/public/emerg3.jpg";
import radio from "@/public/radio.jpg";
import vol from "@/public/vol.jpg";
import { IoIosPeople } from "react-icons/io";
import ServicesBanner from "../services/servies-banner";
import ServicesPage from "../services/main";
import { MdFoundation } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

const services = [
  {
    icon: <FaPeopleGroup className="h-8 w-8" />,
    title: "Community Services",
    description: "participate in helping others.",
    image: comm,
    link: "/get-help/detail",
  },
  {
    icon: <MdFoundation className="h-8 w-8" />,
    title: "How to respond to emergencies",
    description: "Get trained on emergency response.",
    image: emerg2,
    link: "/get-help/detail",
  },
  {
    icon: <GiPocketRadio className="h-8 w-8" />,
    title: "Radio Show",
    description: "Tune into our informative radio show.",
    image: radio,
    link: "/get-help/detail",
  },
  {
    icon: <IoIosPeople className="h-8 w-8" />,
    title: "Volunteer with us",
    description: "Join our volunteer program.",
    image: vol,
    link: "/get-help/detail",
  },
];

export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="Get Help" />
      <ServicesPage services={services} />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
