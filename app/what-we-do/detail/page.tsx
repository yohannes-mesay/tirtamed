"use client"
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

const whatWeDoSections: Section[] = [
  {
    title: "Emergency Response Training",
    description:
      "We deliver comprehensive first aid and emergency response trainings tailored for:",
    bulletPoints: [
      {
        title: "First Responders",
        description:
          "Equipping lay persons and healthcare workers with protocols and life-saving techniques",
      },
      {
        title: "Organizations",
        description:
          "Custom-designed programs that transform workplaces into safety-conscious environments",
      },
      {
        title: "Healthcare Professionals",
        description:
          "CPD certification courses enhancing medical emergency capabilities",
      },
      {
        title: "Community Groups",
        description:
          "Essential emergency response skills adapted for local contexts",
      },
    ],
  },
  {
    title: "Yegna Ambulance Network",
    description:
      "Innovation meets necessity in our groundbreaking Yegna Ambulance service. This pioneering program seamlessly integrates Ethiopia's ambulance resources into a coordinated emergency response network:",
    bulletPoints: [
      {
        title: "Unified Command System",
        description:
          "Coordinating first and second-tier ambulances for optimal resource utilization",
      },
      {
        title: "Smart Dispatch",
        description:
          "Technology-driven allocation ensuring rapid response times",
      },
      {
        title: "Quality Standardization",
        description:
          "Implementing consistent service standards across all network participants",
      },
      {
        title: "Nationwide Accessibility",
        description:
          "Strategic coverage planning for both urban and rural areas",
      },
    ],
  },
  {
    title: "Research and Consultancy",
    description:
      "Our research and consultancy division drives innovation in Ethiopian emergency medical services:",
    bulletPoints: [
      {
        title: "Evidence-Based Research",
        description:
          "Conducting studies on emergency healthcare delivery in the Ethiopian context",
      },
      {
        title: "Policy Development",
        description:
          "Collaborating with stakeholders to shape effective emergency healthcare frameworks",
      },
      {
        title: "System Design",
        description:
          "Creating scalable emergency response models tailored to local resources and needs",
      },
      {
        title: "Impact Assessment",
        description:
          "Measuring and enhancing the effectiveness of emergency healthcare initiatives",
      },
    ],
  },
  {
    title: "Community Impact Initiative",
    description: "We believe in building resilient communities through:",
    bulletPoints: [
      {
        title: "Public Health Education",
        description:
          "Comprehensive awareness programs on emergency preparedness",
      },
      {
        title: "Community Response Networks",
        description: "Establishing local emergency response capabilities",
      },
      {
        title: "Cultural Integration",
        description:
          "Ensuring emergency services respect and incorporate local practices",
      },
    ],
  },
];
export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="" />
      <AboutMain
        title="What we do"
        desc="We provide comprehensive services in emergency response and healthcare innovation."
        sections={whatWeDoSections}
      />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
