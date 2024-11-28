import { Activity, Stethoscope, Ambulance } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import verctor1 from "@/public/vercor1.svg";
import verctor2 from "@/public/vercor2.svg";
import verctor3 from "@/public/vector3.svg";
import Image from "next/image";
export default function WhyChooseUs() {
  const features = [
    {
      icon: verctor1,
      title: "Comprehensive Curriculum",
      description:
        "Our curriculum covers all essential medical topics, ensuring a well-rounded education for all trainees.",
    },
    {
      icon: verctor2,
      title: "Experienced Instructors",
      description:
        "Learn from highly qualified and experienced medical professionals who are experts in their fields.",
    },
    {
      icon: verctor3,
      title: "State-of-the-Art Facilities",
      description:
        "Train in modern facilities equipped with the latest medical technology and equipment.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center  mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
        <div className="flex justify-center">
          <div className="w-4 h-2 bg-[#00D2C1] pt-2 wavy-line" />
        </div>
        <p className="max-w-2xl mx-auto text-gray-600 py-3">
          Our medical training program is designed to provide comprehensive
          education and hands-on experience to prepare you for a successful
          career in the medical field.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-32">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-md text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-[#4B6BFB]/10 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt="icon"
                    objectFit="cover"
                    className=" text-[#4B6BFB]"
                  />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 px-8 text-center">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
