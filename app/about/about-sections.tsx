import Link from "next/link";
import React from "react";

interface Section {
  title: string;
  description: string;
}

interface AboutSectionProps {
  sections: Section[];
}

export default function AboutSection({ sections }: AboutSectionProps) {
  return (
    <div className="space-y-3 mb-4 px-2 sm:px-16">
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl text-center font-bold tracking-tight text-[#068073]">
            {section.title}
          </h2>
          <p className="text-md text-gray-800 text-center">
            {section.description}
          </p>
          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-[#068073] hover:text-emerald-700"
          ></Link>
          <div className="h-2 w-1/2 mx-auto bg-gradient-to-r from-brand to-yellow-400" />
        </div>
      ))}
    </div>
  );
}
