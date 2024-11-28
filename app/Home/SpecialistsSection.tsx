"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function SpecialistsSection() {
  const services = [
    { id: 1, name: "Diagnosis training" },
    { id: 2, name: "Treatment training" },
    { id: 3, name: "Pregnancy training" },
    { id: 4, name: "Online training" },
    { id: 5, name: "Dental training" },
    { id: 6, name: "Pediatric training" },
    { id: 7, name: "Preventative training" },
    { id: 8, name: "Inpatient training" },
  ];

  return (
    <div className="container mx-auto px-16 xl:px-48 max-sm:px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-gray-900">
              Expert trainers are ready to guide you
            </h1>
            <div className="w-24 h-2 bg-brand" />
            <p className="text-lg text-gray-600">
              Enhance your skills with our comprehensive training programs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.id} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-[#4B6BFB]" />
                <span className="text-gray-600">{service.name}</span>
              </div>
            ))}
          </div>

          <Button className="bg-brand hover:bg-brand/90 text-black">
            Start Training Now
          </Button>
        </div>

        {/* Video Section */}
        <Card className="relative aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/gn6xt1ca8A0"
            title="Medical Training Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Card>
      </div>
    </div>
  );
}
