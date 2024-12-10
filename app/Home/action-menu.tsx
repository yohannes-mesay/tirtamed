import { FaHandsHelping } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiFirstAidKit } from "react-icons/gi";
import { IoIosDesktop } from "react-icons/io";
import { PiAmbulanceLight } from "react-icons/pi";

import Link from "next/link";
interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  isSupplies?: boolean;
}

function ActionCard({ icon, title, link }: ActionCardProps) {
  return (
    <Link href={link} className="relative group">
      <div className="absolute inset-0 overflow-hidden rounded-2xl max-sm:rounded-lg">
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${"opacity-0 group-hover:opacity-100"}`}
        >
          <div className="absolute inset-0 rotate-[-35deg]">
            <div className="absolute left-0 -top-2 h-full w-1/3 bg-yellow-400" />
            <div className="absolute left-1/3 top-0 h-full w-1/3 bg-gray-100" />
            <div className="absolute left-[55%] -top-5 h-screen w-2/5 bg-blue-500" />
          </div>
        </div>
      </div>
      <div className="relative flex sm:flex-col max-sm:items-center  max-sm:justify-between items-center px-2 sm:pb-4 sm:pt-10 py-0 border-4 border-second rounded-2xl hover:shadow-lg transition-shadow duration-300 bg-white/80">
        <div className="text-second h-32 max-sm:h-28 sm:p-6 sm:mb-10 sm:w-56 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-center font-bold h-10 text-slate-800 max-sm:text-sm">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default function ActionMenu() {
  return (
    <div className="w-full xl:max-w-8xl lg:px-24 mx-auto p-4 py-16 max-sm:px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <ActionCard
          icon={
            <IoIosDesktop className="w-20 h-20 md:w-36 md:h-36 lg:w-36 lg:h-36" />
          }
          title="Begin Online Courses"
          link="#"
        />

        <ActionCard
          icon={
            <PiAmbulanceLight
              className="w-20 h-20 md:w-36 md:h-36 lg:w-36 lg:h-36"
              strokeWidth={0.01}
            />
          }
          title="Yegna Ambulance"
          link="yegna-ambulance"
          isSupplies={true}
        />
        <ActionCard
          icon={
            <FaPeopleRoof className="w-20 h-20 md:w-36 md:h-36 lg:w-36 lg:h-36" />
          }
          title="Research and consultancy"
          link="consultancy"
        />

        <ActionCard
          icon={
            <GiFirstAidKit className="w-20 h-20 md:w-36 md:h-36 lg:w-36 lg:h-36" />
          }
          title="First Aid Tips"
          link="how-to-respond-emergency"
        />

        <ActionCard
          icon={
            <FaHandsHelping className="w-20 h-20 md:w-36 md:h-36 lg:w-36 lg:h-36" />
          }
          title="Volunteer with us"
          link="get-help"
        />
      </div>
    </div>
  );
}
