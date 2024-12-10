"use client"
import AboutMain from "@/app/about/yegna";
import Footer from "@/app/Home/Footer";
import ServicesBanner from "@/app/services/servies-banner";
import dynamic from "next/dynamic";
import React from "react";
import banner1 from "@/public/tirtabanner.jpg";


const LeafletMap = dynamic(() => import("../../Home/MapComponent"), {
  ssr: false,
});interface Section {
  title: string;
  description: string;
  bulletPoints: BulletPoint[];
}
interface BulletPoint {
  title: string;
  description: string;
}

const help: Section[] = [
  {
    title: "Community Services",
    description:
      "Through partnerships with local organisations, we provide free essential support and education 	to strengthen community resilience. From first aid training to emergency preparedness programs, we aim to make life-saving knowledge accessible to all. ",
    bulletPoints: [],
  },
  {
    title: "How to Respond to Emergencies",
    description:
      "Prepare yourself for critical moments with our first aid courses, available in both free and paid options. These comprehensive resources teach you how to respond to emergencies effectively, whether at home, work, or in your community. Sign up today to gain the skills you need to save lives",
    bulletPoints: [],
  },
  {
    title: "Radio Show",
    description:
      "Stay tuned to 'Lehowot Menor,' our partner radio show on Ahadu Radio, dedicated to emergency medicine and critical care. Featuring expert discussions, practical tips, and real-life 	stories, the program offers valuable insights to help you stay informed and prepared.",
    bulletPoints: [],
  },
  {
    title: "Volunteer with Us ",
    description:
      "Join our mission to transform prehospital care in Ethiopia by volunteering with TirtaMed. Whether you're a healthcare professional, a student, or a passionate advocate for better care, your efforts can make a lasting difference in building safer communities.",
    bulletPoints: [],
  },
  // {
  //   title: "Join Our Network",
  //   description:
  //     "Yegna Ambulance Network welcomes partnerships with healthcare facilities, emergency service providers, and medical transport companies. Together, we're building Ethiopia's most reliable pre-hospital care system.Contact us to learn more about our services or to become part of our growing network of healthcare partners.",
  //   bulletPoints: [],
  // },
];
export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="" />
      <AboutMain
        title="Get Help"
        desc="At TirtaMed, we are committed to equipping individuals and communities with the knowledge and resources needed to handle emergencies effectively. Explore our services and initiatives designed to empower you:"
        sections={help}
      />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
