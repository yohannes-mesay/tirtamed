import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import founders from "@/public/founders.jpg";

export default function AboutDetail() {
  const [showFullText, setShowFullText] = useState({
    aboutUs: false,
    ourServices: false,
    ourVision: false,
  });

  const toggleText = (section: keyof typeof showFullText) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="w-full py-12 bg-background">
      <div className="grid gap-8 px-4 md:px-6">
        <Card className="border-none shadow-none">
          <CardContent className="grid gap-10">
            {/* First Article */}
            <article className="grid md:grid-cols-[1fr,1.5fr] gap-6 items-start">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={founders}
                  className="h-full object-contain"
                  alt="founders"
                />
              </div>
              <div className="flex flex-col gap-4 md:pl-12">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight text-[#068073]">
                    About Us
                  </h2>
                  <p className="text-sm text-gray-800">
                    {showFullText.aboutUs
                      ? `Founded in 2017, TirtaMed Private Limited Company emerged from a shared vision among leading Ethiopian researchers and specialists in emergency and critical care medicine. Our founders combined decades of expertise with an intimate understanding of Ethiopia's healthcare landscape to create a company dedicated to transforming emergency medical care in our nation. At TirtaMed, we understand the unique challenges facing emergency healthcare in Ethiopia, from urban centers to rural communities. Drawing from our deep experience in the Ethiopian medical sector, we are committed to developing solutions that address our country's specific needs, infrastructure, and healthcare delivery systems. Through our work, we are building a future where quality emergency medical care is accessible to all Ethiopians, contributing to the strengthening of our nation's healthcare system.`
                      : `Founded in 2017, TirtaMed Private Limited Company emerged from a shared vision among leading Ethiopian researchers and specialists in emergency and critical care medicine...`}
                  </p>
                  <Link
                    href="#"
                    onClick={() => toggleText("aboutUs")}
                    className="inline-flex items-center text-sm font-medium text-[#068073] hover:text-emerald-700"
                  >
                    {showFullText.aboutUs ? "Show less" : "Read more >"}
                  </Link>
                  <div className="h-1 w-full bg-gradient-to-r from-brand to-yellow-400" />
                </div>

                <article className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight text-[#068073]">
                    Our Services
                  </h2>
                  <p className="text-sm text-gray-800">
                    {showFullText.ourServices
                      ? `TirtaMed delivers four integral services that form the cornerstone of our mission to transform emergency healthcare in Ethiopia: Emergency Response Training: Comprehensive first aid and emergency medical education for both laypersons and healthcare professionals. Yegna Ambulance Network: An innovative, integrated ambulance service system coordinating first and second-tier emergency response system. Research and Consultancy: Evidence-based research and expert guidance in emergency medical services. Community Impact Programs: Public health initiatives and emergency preparedness training at the grassroots level.`
                      : `TirtaMed delivers four integral services that form the cornerstone of our mission to transform emergency healthcare in Ethiopia...`}
                  </p>
                  <Link
                    href="#"
                    onClick={() => toggleText("ourServices")}
                    className="inline-flex items-center text-sm font-medium text-[#068073] hover:text-emerald-700"
                  >
                    {showFullText.ourServices ? "Show less" : "Read more >"}
                  </Link>
                  <div className="h-1 w-full bg-gradient-to-r from-brand to-yellow-400" />
                </article>
                <article className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight text-[#068073]">
                    Our Vision
                  </h2>
                  <p className="text-sm text-gray-800">
                    {showFullText.ourVision
                      ? `At TirtaMed, we aspire to be catalysts of change in Ethiopia's emergency healthcare landscape, envisioning a future where every Ethiopian has access to prompt, reliable, and professional emergency medical care. Through relentless innovation, strategic collaborations, and an uncompromising commitment to excellence, we are not only responding to emergencies—we are redefining the delivery of emergency healthcare across the nation.`
                      : `At TirtaMed, we aspire to be catalysts of change in Ethiopia's emergency healthcare landscape...`}
                  </p>
                  <Link
                    href="#"
                    onClick={() => toggleText("ourVision")}
                    className="inline-flex items-center text-sm font-medium text-[#068073] hover:text-emerald-700"
                  >
                    {showFullText.ourVision ? "Show less" : "Read more >"}
                  </Link>
                  <div className="h-1 w-full bg-gradient-to-r from-brand to-yellow-400" />
                </article>
              </div>
            </article>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
