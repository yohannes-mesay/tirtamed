import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Stethoscope,
  Book,
  Users,
  Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import serv1 from "@/public/serv1.jpg";
import serv2 from "@/public/serv2.jpg";
import serv3 from "@/public/serv3.jpg";
import serv4 from "@/public/serv4.jpg";
import serv5 from "@/public/serv5.jpg";
const services = [
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Clinical Skills Training",
    description:
      "Hands-on training in essential clinical procedures and patient care techniques.",
    image: serv1,
  },
  {
    icon: <Book className="h-8 w-8" />,
    title: "Medical Knowledge Courses",
    description:
      "Comprehensive courses covering the latest advancements in medical science and practice.",
    image: serv2,
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team-Based Learning",
    description:
      "Collaborative training sessions to improve teamwork in healthcare settings.",
    image: serv3,
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Certification Programs",
    description:
      "Accredited certification programs for various medical specialties and skills.",
    image: serv4,
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Research Methodology",
    description:
      "Training in cutting-edge research methods and data analysis for healthcare.",
    image: serv5,
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Emergency Response",
    description:
      "Intensive training for quick and effective responses in medical emergencies.",
    image: serv1,
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(services[0]);

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Medical Training Services
        </motion.h1>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering healthcare professionals with cutting-edge training and
          education
        </motion.p>

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
                height={600}
                className="w-full h-96 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedService.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedService.description}
                </p>
                <Button
                  onClick={() => router.push("/about")}
                  className="w-full"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Medical Skills?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our world-class training programs and take your healthcare
            career to the next level.
          </p>
          <Button
            size="lg"
            onClick={() => router.push("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Enroll Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
