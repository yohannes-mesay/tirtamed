"use client";

import { ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Play, Book, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OnlineTraining({
  services,
}: {
  services: {
    icon: ReactNode;
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
  }[];
}) {
  const [selectedService, setSelectedService] = useState(services[0]);
  const router = useRouter();

  const onlineTrainings = [
    {
      title: "Advanced Cardiac Life Support",
      description: "Master the latest techniques in cardiac emergency care",
      icon: <Play className="h-6 w-6 text-blue-500" />,
      link: "#",
    },
    {
      title: "Pediatric Emergency Care",
      description:
        "Specialized training for treating young patients in critical situations",
      icon: <Book className="h-6 w-6 text-green-500" />,
      link: "#",
    },
    {
      title: "Telemedicine Essentials",
      description:
        "Learn to provide effective healthcare through digital platforms",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto px-4 md:px-10 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all ${
                  selectedService.title === service.title
                    ? "border-blue-500 shadow-lg"
                    : "hover:border-blue-200"
                }`}
                onClick={() => setSelectedService(service)}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </motion.div>

          {selectedService.title !== "Online Trainings" ? (
            <motion.div
              className="mt-8 md:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="overflow-hidden">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedService.description}
                  </p>
                  <Button
                    onClick={() => router.push(selectedService.link)}
                    className="w-full"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              className="mt-8 md:mt-0 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-second">
                Online Trainings
              </h2>
              {onlineTrainings.map((training, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200">
                        {training.icon}
                      </div>
                      <h3 className="text-xl font-semibold">
                        {training.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{training.description}</p>
                    <Button
                      onClick={() => router.push(training.link)}
                      variant="outline"
                      className="w-full border-blue-500 text-blue-500 hover:bg-blue-50"
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
