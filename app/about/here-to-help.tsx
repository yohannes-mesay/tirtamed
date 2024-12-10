import Image from "next/image";
import doc1 from "@/public/doc1.jpg";
import doc2 from "@/public/doc2.jpg";
import doc3 from "@/public/doc3.jpg";
import { StaticImageData } from "next/image";

interface FeatureCard {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function HelpSection() {
  const features: FeatureCard[] = [
    {
      title: "Qualified doctors",
      description:
        "Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque",
      image: doc1,
    },
    {
      title: "Committed to Quality",
      description:
        "Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque",
      image: doc2,
    },
    {
      title: "Laboratory Medicine",
      description:
        "Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque",
      image: doc3,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-48">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            We Here To Help
          </h2>
          <div className="flex justify-center">
            <div className="w-4 h-2 bg-[#00D2C1] pt-1 mb-4 wavy-line" />
          </div>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Vestibulum faucibus neque at lacus tristique eu ultrices ipsum
            mollis. Phasellus venenatis, lacus in malesuada pellentesque
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover  rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-center text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
