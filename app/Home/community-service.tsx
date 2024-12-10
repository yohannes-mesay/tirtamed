import community from "@/public/community.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function SpikingAwareness() {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-8 overflow-hidden">
      <Link
        href="/get-help"
        className="block relative w-full h-[300px] sm:h-[350px] md:h-[400px]"
      >
        <div className="absolute right-0 top-0 bottom-0 w-11/12 rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={community}
            alt="Crowd at a venue with blue and pink lighting"
            fill
            className="object-cover max-sm:pr-2 rounded-2xl"
            priority
          />
        </div>

        {/* Content Card */}
        <div className="absolute sm:bottom-6 bottom-0 left-0 w-[90%] sm:w-[90%] md:w-[80%] max-w-[450px] mx-4 z-10">
          <div className="relative bg-[#FFF9C4] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
              Community Service
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 md:mb-10">
              Our commitment to community service is our signature. We proudly
              serve and belong to our community, offering our services free of
              charge
            </p>
            <div className="flex justify-end">
              <IoIosArrowRoundForward className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
