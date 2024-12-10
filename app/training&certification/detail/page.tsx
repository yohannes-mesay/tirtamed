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

const training: Section[] = [
  {
    title: "Online Training",
    description: "",
    bulletPoints: [
      { title: "Interactive digital learning platform", description: "" },
      { title: "Self-paced modules with multimedia content", description: "" },
      { title: "Virtual simulations of emergency scenarios", description: "" },
      { title: "Real-time assessments and feedback", description: "" },
      {
        title: "Access to digital resources and reference materials",
        description: "",
      },
      { title: "Flexibility to learn anytime, anywhere", description: "" },
      { title: "Regular online instructor support", description: "" },
      { title: "Automated certification upon completion", description: "" },
    ],
  },
  {
    title: "Face-to-Face Training (Classroom)",
    description: "",
    bulletPoints: [
      { title: "Intensive hands-on practical sessions", description: "" },
      { title: "Direct interaction with expert instructors", description: "" },
      { title: "Real-time demonstration of techniques", description: "" },
      { title: "Immediate feedback and correction", description: "" },
      { title: "Group exercises and scenario-based learning", description: "" },
      {
        title: "Networking opportunities with fellow participants",
        description: "",
      },
      { title: "State-of-the-art training facilities", description: "" },
    ],
  },
  {
    title: "Hybrid Training",
    description: "",
    bulletPoints: [
      {
        title: "Combines the best of online and classroom learning",
        description: "",
      },
      { title: "Theory modules completed online", description: "" },
      { title: "Practical skills perfected in person", description: "" },
      { title: "Flexible scheduling options", description: "" },
      {
        title: "Enhanced learning retention through mixed methods",
        description: "",
      },
      {
        title:
          "Comprehensive assessment of both theoretical and practical skills",
        description: "",
      },
      { title: "Cost-effective training solution", description: "" },
    ],
  },
  {
    title: "Refresher Training",
    description: "",
    bulletPoints: [
      {
        title: "Regular updates on latest first aid protocols",
        description: "",
      },
      { title: "Skill reinforcement and practice", description: "" },
      { title: "Review of emergency response techniques", description: "" },
      { title: "Discussion of real-world scenarios", description: "" },
      { title: "Certificate renewal opportunities", description: "" },
      { title: "Continuous professional development", description: "" },
      { title: "Maintenance of certification standards", description: "" },
    ],
  },
  {
    title: "Certification Process",
    description:
      "TirtaMed is an accredited CPD provider, and its courses are also accredited. All our training programs lead to recognized certification upon successful completion. Our certification process includes:",
    bulletPoints: [
      { title: "Comprehensive theoretical assessment", description: "" },
      { title: "Practical skills evaluation", description: "" },
      { title: "Scenario-based testing", description: "" },
      { title: "Documentation of completed training hours", description: "" },
      { title: "Official certification with validity period", description: "" },
      {
        title: "Registration in TirtaMed's certified first aiders database",
        description: "",
      },
    ],
  },
  {
    title: "Why Choose TirtaMed’s Training?",
    description:
      "TirtaMed is an accredited CPD provider, and its courses are also accredited. All our training programs lead to recognized certification upon successful completion. Our certification process includes:",
    bulletPoints: [
      {
        title:
          "Internationally aligned curriculum adapted to Ethiopian context",
        description: "",
      },
      {
        title: "Training materials available in the local language",
        description: "",
      },
      {
        title:
          "Experienced instructors with practical emergency response background",
        description: "",
      },
      { title: "Diverse learning methodologies", description: "" },
      {
        title: "Flexible learning options to suit your schedule",
        description: "",
      },
      {
        title: "Regular updates incorporating latest medical guidelines",
        description: "",
      },
      { title: "Post-training support and resources", description: "" },
      {
        title: "Network of certified first aid professionals",
        description: "",
      },
      {
        title: "Recognized certification for professional development",
        description: "",
      },
    ],
  },
];
export default function page() {
  return (
    <div>
      <ServicesBanner banner={banner1} title="" />
      <AboutMain
        title="Training & Certification"
        desc="We provide comprehensive services in emergency response and healthcare innovation."
        sections={training}
      />
      <LeafletMap latitude={9.019412} longitude={38.801623} zoom={13} />
      <Footer />
    </div>
  );
}
