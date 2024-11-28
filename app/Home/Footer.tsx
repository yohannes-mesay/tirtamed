"use client";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, ArrowUp, Router } from "lucide-react";
import { Button } from "@/components/ui/button";
import heart from "@/public/heart.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  const contactInfo = [
    {
      type: "Email",
      value: "info@tirtamed.com",
      href: "mailto:info@tirtamed.com",
    },
    {
      type: "Phone",
      value: "+251 987654321",
      href: "tel:+251987654321",
    },
    {
      type: "Location",
      value: "1234 Training St, City, Country",
    },
  ];

  const usefulLinks = [
    { name: "Courses", href: "contact" },
    { name: "Workshops", href: "contact" },
    { name: "Certifications", href: "contact" },
    { name: "Online Training", href: "contact" },
    { name: "Support", href: "contact" },
  ];

  const workingHours = [
    { days: "Monday - Friday", hours: "8:00 Am- 5:00 PM" },
    { days: "Saturday", hours: "8:00 AM - 5:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2F3349] text-white pt-16 pb-8 px-4 pr-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src={heart} className="w-10" alt="Tirtamed" />
              <h2 className="text-2xl font-bold">Tirtamed</h2>
            </div>
            <p className="text-gray-300">
              We offer comprehensive medical training programs designed to
              advance your career in the healthcare industry. Join us to gain
              the skills and knowledge needed to excel in your profession.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index}>
                  <p className="text-sm text-gray-400">{info.type}</p>
                  {info.href ? (
                    <Link
                      href={info.href}
                      className="text-gray-300 hover:text-brand transition-colors"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <p className="text-gray-300">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand transition-colors flex items-center gap-2"
                  >
                    <span className="text-blue-400">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">Working Hours</h3>
            <div className="space-y-3 mb-6">
              {workingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between text-gray-300">
                  <span>{schedule.days}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
            <Button
              onClick={() => router.push("/contact")}
              className="bg-[#00D2C1] hover:bg-[#00B5A7] text-white w-full"
            >
              Join Us Now
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2024 Medical Training. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-gray-700 rounded-full flex items-center justify-center w-8 h-8 bg-white transition-colors"
            >
              {/* <Facebook className="w-5 h-5" /> */}
              <FaFacebookF className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-700 rounded-full flex items-center justify-center w-8 h-8 bg-white transition-colors"
            >
              {/* <Facebook className="w-5 h-5" /> */}
              <FaTelegramPlane className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-gray-700 rounded-full flex items-center justify-center w-8 h-8 bg-white transition-colors"
            >
              {/* <Facebook className="w-5 h-5" /> */}
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-[#00D2C1]  ml-12 hover:bg-[#00B5A7] border-0"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
