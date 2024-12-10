"use client";
import { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path: string) =>
    pathname === path ? "text-[#00d6c0]" : "text-black";

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-0 py-1 xl:mx-24 lg:mx-8 font-semibold  bg-white top-0 z-50">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-16 sm:max-w-20" />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6  tracking-wider items-center">
          <Link
            href="/what-we-do"
            className={`hover:text-[#00d6c0] ${isActive("/what-we-do")}`}
          >
            What We Do
          </Link>
          <Link
            href="/training&certification"
            className={`hover:text-[#00d6c0] ${isActive(
              "/training&certification"
            )}`}
          >
            Training & Certification
          </Link>
          <Link
            href="/yegna-ambulance"
            className={`hover:text-[#00d6c0] ${isActive("/yegna-ambulance")}`}
          >
            Yegna Ambulance
          </Link>
          <Link
            href="/consultancy"
            className={`hover:text-[#00d6c0] ${isActive("/consultancy")}`}
          >
            Consultancy
          </Link>
          <div className="w-1 rounded-full h-6 border bg-slate-900"></div>
          <Link
            href="/get-help"
            className={`hover:text-[#00d6c0] ${isActive("/get-help")}`}
          >
            Get help
          </Link>

          <Link
            href="#"
            className="bg-[#00d6c0] text-white rounded-md px-4 py-2 hover:scale-105 duration-200"
          >
            Courses
          </Link>
        </div>

        {/* Mobile Nav Button */}
        <button className="md:hidden" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <button className="text-black mb-4" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col space-y-4">
          <Link
            href="/what-we-do"
            className={`hover:text-[#00d6c0] ${isActive("/what-we-do")}`}
            onClick={toggleSidebar}
          >
            What we do
          </Link>
          <Link
            href="/training&certification"
            className={`hover:text-[#00d6c0] ${isActive(
              "/training&certification"
            )}`}
            onClick={toggleSidebar}
          >
            Training & Certification
          </Link>
          <Link
            href="/yegna-ambulance"
            className={`hover:text-[#00d6c0] ${isActive("/yegna-ambulance")}`}
            onClick={toggleSidebar}
          >
            Yegna Ambulance
          </Link>
          <Link
            href="/consultancy"
            className={`hover:text-[#00d6c0] ${isActive("/consultancy")}`}
            onClick={toggleSidebar}
          >
            Consultancy
          </Link>
          <Link
            href="/get-help"
            className={`hover:text-[#00d6c0] ${isActive("/get-help")}`}
            onClick={toggleSidebar}
          >
            Get help
          </Link>
          <Link
            href="#"
            className="bg-[#00d6c0] text-white rounded-md px-4 py-2 hover:scale-105 duration-200"
            onClick={toggleSidebar}
          >
            Courses
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
