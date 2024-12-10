import React from "react";

interface BulletPoint {
  title: string;
  description: string;
}

interface Section {
  title: string;
  description: string;
  bulletPoints: BulletPoint[];
}

interface AboutSectionProps {
  sections: Section[];
  title: string;
  desc: string;
}

export default function AboutMain({ sections, title, desc }: AboutSectionProps) {
  return (
    <div className="space-y-4 mb-4 px-2 sm:px-16">
      <div className="w-full text-center pt-4">
        <div className="text-center ">
          <h2 className="text-5xl  font-bold tracking-tight text-[#068073]">
            {title}
          </h2>
          <div className="flex justify-center">
            <div className="w-4 h-2 bg-[#00D2C1] pt-2 wavy-line" />
          </div>
        </div>{" "}
      </div>
      <p className="text-lg text-gray-800 text-center max-w-4xl mx-auto">
        {desc}
      </p>
      {sections.map((section, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-3xl text-center font-bold tracking-tight text-[#068073]">
            {section.title}
          </h2>
          <p className="text-lg text-gray-800 text-center max-w-4xl mx-auto">
            {section.description}
          </p>
          <ul className="space-y-4 mt-4 max-w-3xl mx-auto">
            {section.bulletPoints.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#068073]"></span>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold text-[#068073]">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-gray-700">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
          {/* <Link
            href="#"
            className="block text-center mt-4 text-sm font-medium text-[#068073] hover:text-emerald-700"
          >
            Learn More
          </Link> */}
          <div className="h-2 w-1/2 mx-auto bg-gradient-to-r from-[#068073] to-yellow-400" />
        </div>
      ))}
    </div>
  );
}
