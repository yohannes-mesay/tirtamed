"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-[#00d6c0]" : "text-black";

  return (
    <div className="flex bg-slate-900 justify-center md:justify-end itmes-end self-end flex-wrap m-auto gap-2 pt-3 pb-2 border-b-[1px] border-gray-100 outline-none shadow-sm mb-0.5">
      {/* <span className="flex items-center">
        <Link
          href="mailto:info@tirtamed.com"
          className="text-gray-800 hover:text-brand transition-colors flex items-center gap-2"
        >
          <IoMdMailOpen className="w-6 h-6" />
          info@tirtamed.com
        </Link>{" "}
      </span> */}
      {/* <div className="flex">
        <span className="flex">
          <FaLocationDot size={18} color=" #404040" />
          <p className="ml-1 font-sarif text-sm">Addis Ababa, ETHIOPIA</p>
        </span>
      </div> */}
      <div className="flex gap-4 outline-none flex-wrap md:right-24 relative font-bold text-lg  ">
        <Link
          href="/about"
          className={`hover:text-[#00d6c0] outline-none text-white ${isActive(
            "/about"
          )}`}
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className={`hover:text-[#00d6c0] outline-none text-white ${isActive(
            "/contact"
          )}`}
        >
          Contact Us
        </Link>
        {/* <Link
          href="/search"
          className={`hover:text-[#00d6c0] outline-none text-white ${isActive(
            "/search"
          )}`}
        >
          Search
        </Link> */}
        {/* <FaFacebookSquare size={20} color=" #404040" />
        <FaInstagram size={20} color=" #404040" />
        <FaYoutube size={20} color=" #404040" />
        <FaTelegram size={20} color=" #404040" /> */}
      </div>
    </div>
  );
}

export default Header;
