"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import training1 from "@/public/counter1.svg";
import training2 from "@/public/counter2.svg";
import training3 from "@/public/counter3.svg";
import training4 from "@/public/counter4.svg";
import CountUp from "react-countup";

interface StatItem {
  icon: StaticImageData;
  number: string;
  title: string;
  description: string;
}

export default function MedicalStats() {
  const stats: StatItem[] = [
    {
      icon: training1,
      number: "1500",
      title: "Training Sessions",
      description: "Comprehensive training sessions conducted.",
    },
    {
      icon: training2,
      number: "500",
      title: "Certified Trainers",
      description: "Highly qualified and certified trainers.",
    },
    {
      icon: training3,
      number: "2000",
      title: "Successful Graduates",
      description: "Students who have successfully graduated.",
    },
    {
      icon: training4,
      number: "100",
      title: "Training Programs",
      description: "Diverse training programs offered.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#4C5FD5] w-full py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={stat.icon}
                alt="icon"
                objectFit="cover"
                className="text-[#4B6BFB] w-20 h-20 mb-4"
              />
              <h2 className="text-5xl font-semibold text-white mb-4">
                {isVisible ? (
                  <CountUp end={parseInt(stat.number)} duration={3} />
                ) : (
                  "0"
                )}
              </h2>
              <h3 className="text-xl text-white mb-2">{stat.title}</h3>
              <p className="text-white/80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
