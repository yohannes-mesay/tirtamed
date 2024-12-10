"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    needs: "",
    message: "",
  });

  // interface FormData {
  //   fullName: string;
  //   email: string;
  //   phone: string;
  //   needs: string;
  //   message: string;
  // }

  interface FormEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement & {
      fullName: { value: string };
      email: { value: string };
      phone: { value: string };
      needs: { value: string };
      message: { value: string };
    };
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("email value", process.env.NEXT_PUBLIC_ACCESS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        name: e.target.fullName.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        needs: e.target.needs.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      toast.success("Message sent successfully.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        needs: "",
        message: "",
      });
    } else if (!result.success) {
      toast.error("Message not sent.");
    }
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 max-sm:px-2 py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-[2.5rem] font-bold text-[#0F172A] mb-4">
          Let&apos;s Send a Message!
        </h1>
        <p className="text-lg max-sm:text-sm text-gray-600">
          We are always ready to help you at any time, whether you need a
          consultation, an appointment, or want to register for a course.
          Let&apos;s talk together.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16">
        {/* Left Column - Contact Information */}
        <div className="space-y-12">
          <div className="flex gap-6 max-sm:gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Address Business</h3>
              <p className="text-gray-600">Megenagna, Senper Buld. Office No 701</p>
              <p className="text-gray-600">Addis ababa, Ethiopia</p>
            </div>
          </div>

          <div className="flex gap-6 max-sm:gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact With Us</h3>
              <p className="text-gray-600">Call Support: +2519 05630063</p>
              {/* <p className="text-gray-600">
                Call An Appointment : +2519 05630063
              </p> */}
            </div>
          </div>

          <div className="flex gap-6 max-sm:gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <p className="text-gray-600">Admin@tirtamed.com</p>
              {/* <p className="text-gray-600">Medicrosscareers@gmail.com</p> */}
            </div>
          </div>

          <div className="flex gap-6 max-sm:gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Working Time</h3>
              <p className="text-gray-600">Mon - Sat: 8.00am - 18.00pm</p>
              <p className="text-gray-600">Holiday : Closed</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder="*Full Name"
                name="fullName"
                className="h-12 text-base"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="*Email Address"
                className="h-12 text-base"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="tel"
                name="phone"
                placeholder="*Phone Number"
                className="h-12 text-base"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
              <Select
                value={formData.needs}
                name="needs"
                onValueChange={(value) =>
                  setFormData({ ...formData, needs: value })
                }
              >
                <SelectTrigger className="h-12 text-base text-gray-500">
                  <SelectValue placeholder="What are your needs?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="appointment">Appointment</SelectItem>
                  <SelectItem value="course registration">
                    Course Registration
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Textarea
              placeholder="Messeage...."
              name="message"
              className="min-h-[240px] text-base resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <Button
              type="submit"
              className="h-12 px-8 bg-[#0F172A] hover:bg-[#0F172A]/90 text-white"
            >
              Submit Require
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
