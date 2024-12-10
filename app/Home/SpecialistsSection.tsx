"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import etech from "@/public/etech.jpg";
import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SpecialistsSection() {
  const router = useRouter();
  const services = [
    {
      id: 1,
      name: "First-Tier Ambulance",
      description:
        "Delivers immediate, life-saving support with trained first responders at the scene.",
    },
    {
      id: 2,
      name: "Second-Tier Ambulance",
      description:
        "Provides care both at the scene and during patient transport, utilizing various types of ambulances.",
    },
    {
      id: 3,
      name: "Apps",
      description:
        "Empowering users with innovative mobile apps for emergency support and real-time updates.",
    },
    {
      id: 4,
      name: "Call Center",
      description:
        "A dedicated, 24/7 call center offering immediate guidance and dispatch services for emergencies.",
    },
  ];

  return (
    <div className="mx-auto px-16 xl:px-20 max-sm:px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Content Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-gray-900">
              Prehosptial and Out of hospital Care
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-brand to-yellow-400" />

            <p className="text-lg text-gray-600">
              Delivering technology-driven prehospital and out-of-hospital
              services to ensure timely and effective care when it’s needed
              most.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {services.map((service) => (
              <div key={service.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#4B6BFB]" />
                  <span className="text-gray-600 font-semibold">
                    {service.name}
                  </span>
                </div>
                <p className="text-gray-600 pl-7">{service.description}</p>
              </div>
            ))}
          </div>

          <Button
            onClick={() => router.push("yegna-ambulance")}
            className="bg-brand hover:bg-brand/90 text-black"
          >
            Read More
          </Button>
        </div>

        {/* Video Section */}
        <Card className="aspect-video w-full overflow-hidden max-sm:h-96 h-full rounded-lg">
          <Image
            src={etech}
            className="rounded-lg h-full object-fit"
            alt="etech"
          />
        </Card>
      </div>
    </div>
  );
}
