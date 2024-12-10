"use client"
import AboutMain from "@/app/about/yegna";
import Footer from "@/app/Home/Footer";
import ServicesBanner from "@/app/services/servies-banner";
import dynamic from "next/dynamic";
import React from "react";
import banner1 from "@/public/tirtabanner.jpg";


const LeafletMap = dynamic(() => import("../../Home/MapComponent"), {
  ssr: false,
});interface BulletPoint {
  title: string;
  description: string;
}

interface Section {
  title: string;
  description: string;
  bulletPoints: BulletPoint[];
}

const consult: Section[] = [
  {
    title: "About Our Research and Consultancy Services",
    description:
      "At TirtaMed, we provide cutting-edge research and consultancy services tailored to advance emergency and prehospital care systems. Our team of experts delivers evidence-based solutions, leveraging the latest innovations and global best practices. Whether developing policies, enhancing healthcare delivery models, or conducting operational research, we empower stakeholders to drive impactful changes in Ethiopia and East Africa’s healthcare landscape.",
    bulletPoints: [],
  },
  {
    title: "Founding Members’ Research Publications",
    description:
      "Our founding members have contributed extensively to advancing emergency and critical care through impactful research. Below is a curated selection of their publications, showcasing innovative approaches, evidence-based practices, and solutions tailored to the unique challenges of healthcare delivery in Ethiopia and East Africa. These works reflect our commitment to driving meaningful change and improving outcomes in emergency care.",
    bulletPoints: [
      {
        title: "",
        description:
          "1.Seid M, Azazh A, Enquselassie F, Yisma E. Injury characteristics and outcome of road traffic accident among victims at Adult Emergency Department of Tikur Anbessa specialized hospital, Addis Ababa, Ethiopia: a prospective hospital-based study. BMC Emerg Med 2015; 15(10). https://doi.org/10.1186/s12873-015-0035-4   ",
      },
      {
        title: "",
        description:
          "2.Abebe Y, Dida T, Yisma E, Silvestri D. Ambulance use is not associated with patient acuity after road traffic collisions: a cross-sectional study from Addis Ababa, Ethiopia. BMC Emergency Medicine 2018; 18 (7). https://doi.org/10.1186/s12873-018-0158-5  ",
      },
    ],
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
      <AboutMain title="Research and Consultancy" desc="" sections={consult} />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
