"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    needs: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-[2.5rem] font-bold text-[#0F172A] mb-4">
          Let&apos;s Send Us A Message!
        </h1>
        <p className="text-lg text-gray-600">
          We are always ready to help you at any time, let&apos;s talk together.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16">
        {/* Left Column - Contact Information */}
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Address Business</h3>
              <p className="text-gray-600">11 SW 10th Ave 1206, Portland,</p>
              <p className="text-gray-600">OR United States</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact With Us</h3>
              <p className="text-gray-600">Call Support: +64 4 479 2069</p>
              <p className="text-gray-600">
                Call An Appointment : +1 800-123-1234
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <p className="text-gray-600">Medicrosshealth@gmail.com</p>
              <p className="text-gray-600">Medicrosscareers@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-6">
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

          <div className="pt-8">
            <div className="flex items-center gap-8">
              <span className="text-[#0F172A] font-medium">Follow Us:</span>
              <div className="flex items-center gap-6">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#0F172A] transition-colors"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#0F172A] transition-colors"
                >
                  Twitter / X
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#0F172A] transition-colors"
                >
                  Instagrams
                </Link>
                {/* <Link href="#" className="text-gray-600 hover:text-[#0F172A] transition-colors">
                  Skype
                </Link> */}
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#0F172A] transition-colors"
                >
                  Telegrams
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder="*Full Name"
                className="h-12 text-base"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
              <Input
                type="email"
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
                  <SelectItem value="emergency">Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Textarea
              placeholder="Messeage...."
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

// "use client";

// import { useState } from "react";
// import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import emailjs from "emailjs-com";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     needs: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const templateParams = {
//         fullName: formData.fullName,
//         email: formData.email,
//         phone: formData.phone,
//         needs: formData.needs,
//         message: formData.message,
//       };

//       await emailjs.send(
//         "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
//         "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
//         templateParams,
//         "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
//       );

//       setSuccessMessage("Your message has been sent successfully!");
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         needs: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setErrorMessage("Failed to send your message. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-[1400px] mx-auto px-4 py-12">
//       <div className="max-w-3xl mb-12">
//         <h1 className="text-[2.5rem] font-bold text-[#0F172A] mb-4">
//           Let's Send Us A Message!
//         </h1>
//         <p className="text-lg text-gray-600">
//           We are always ready to help you at any time, let's talk together.
//         </p>
//       </div>

//       <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16">
//         {/* Left Column - Contact Information */}
//         <div className="space-y-12">
//           {/* Contact details */}
//           <div className="flex gap-6">
//             <div className="shrink-0">
//               <div className="w-12 h-12 rounded-full bg-[#0F172A] flex items-center justify-center">
//                 <MapPin className="h-6 w-6 text-white" />
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-2">Address Business</h3>
//               <p className="text-gray-600">11 SW 10th Ave 1206, Portland,</p>
//               <p className="text-gray-600">OR United States</p>
//             </div>
//           </div>
//           {/* More contact details omitted for brevity */}
//         </div>

//         {/* Right Column - Contact Form */}
//         <div>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <Input
//                 placeholder="*Full Name"
//                 className="h-12 text-base"
//                 value={formData.fullName}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fullName: e.target.value })
//                 }
//                 required
//               />
//               <Input
//                 type="email"
//                 placeholder="*Email Address"
//                 className="h-12 text-base"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 required
//               />
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               <Input
//                 type="tel"
//                 placeholder="*Phone Number"
//                 className="h-12 text-base"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({ ...formData, phone: e.target.value })
//                 }
//                 required
//               />
//               <Select
//                 value={formData.needs}
//                 onValueChange={(value) =>
//                   setFormData({ ...formData, needs: value })
//                 }
//               >
//                 <SelectTrigger className="h-12 text-base text-gray-500">
//                   <SelectValue placeholder="What are your needs?" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="consultation">Consultation</SelectItem>
//                   <SelectItem value="appointment">Appointment</SelectItem>
//                   <SelectItem value="emergency">Emergency</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <Textarea
//               placeholder="Message...."
//               className="min-h-[240px] text-base resize-none"
//               value={formData.message}
//               onChange={(e) =>
//                 setFormData({ ...formData, message: e.target.value })
//               }
//             />
//             <Button
//               type="submit"
//               className="h-12 px-8 bg-[#0F172A] hover:bg-[#0F172A]/90 text-white"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "Submit Request"}
//               <Send className="ml-2 h-4 w-4" />
//             </Button>
//           </form>

//           {/* Success/Error Messages */}
//           {successMessage && (
//             <p className="text-green-500 mt-4">{successMessage}</p>
//           )}
//           {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
