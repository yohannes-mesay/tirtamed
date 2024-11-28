import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";
import { IoMdMailOpen } from "react-icons/io";

function Header() {
  return (
    <div className="flex justify-around items-center flex-wrap m-auto gap-2 p-3 border-b-[1px] border-gray-100 outline-none shadow-sm mb-0.5">
      {/* <span className="flex items-center">
        <Link
          href="mailto:info@tirtamed.com"
          className="text-gray-800 hover:text-brand transition-colors flex items-center gap-2"
        >
          <IoMdMailOpen className="w-6 h-6" />
          info@tirtamed.com
        </Link>{" "}
      </span> */}
      <div className="flex">
        <span className="flex">
          <FaLocationDot size={18} color=" #404040" />
          <p className="ml-1 font-sarif text-sm">Addis Ababa, ETHIOPIA</p>
        </span>
      </div>
      <div className="flex gap-4 flex-wrap">
        <FaFacebookSquare size={20} color=" #404040" />
        <FaInstagram size={20} color=" #404040" />
        <FaYoutube size={20} color=" #404040" />
        <FaTelegram size={20} color=" #404040" />
      </div>
    </div>
  );
}

export default Header;
