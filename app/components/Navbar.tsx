"use client";
import { useState } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="flex md:px-0 py-1 px-4 justify-between lg:mx-24 mx-4 items-center  bg-white top-0 z-50 ">
        <Link href="/">
          <Image src={logo} alt="logo" className="max-w-24" />
        </Link>
        <div className="flex gap-4 max-md:hidden tracking-wider text-xs items-center justify-around pt-2">
          <Link
            href="/"
            className="text-[1.1rem] text-black hover:text-[#00d6c0]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[1.1rem] text-black hover:text-[#00d6c0]"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-[1.1rem] text-black hover:text-[#00d6c0]"
          >
            Services
          </Link>
          {/* <Link
            href="/pricing"
            className="text-[1.1rem] text-black hover:text-[#00d6c0]"
          >
            Pricing
          </Link> */}
          <Link
            href="/contact"
            className="text-[1.1rem] text-black hover:text-[#00d6c0]"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-brand text-white rounded-3xl px-5 max-sm:px-3 max-lg:text-sm text-lg max-sm:py-0.5 py-2"
          >
            Make Appointment
          </Link>
        </div>

        <button className="md:hidden text-black" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6 text-brand"
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

      <div
        className={`fixed top-0 right-0 h-full border-none bg-white p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <button className="text-black mb-4" onClick={toggleSidebar}>
          <svg
            className="w-6 h-6 text-brand"
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
            href="/"
            className="text-black hover:text-[#00d6c0]"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            href="/user"
            className="text-black hover:text-[#00d6c0]"
            onClick={toggleSidebar}
          >
            User
          </Link>
          <Link
            href="/admin"
            className="text-black hover:text-[#00d6c0]"
            onClick={toggleSidebar}
          >
            Admin
          </Link>
          <Link
            href="/pricing"
            className="text-black hover:text-[#00d6c0]"
            onClick={toggleSidebar}
          >
            Pricing
          </Link>
          <Link
            href="/login"
            className="text-black py-1 rounded-md hover:text-[#00d6c0]"
            onClick={toggleSidebar}
          >
            Log in
          </Link>
          <Link
            href="/subscribe"
            className="bg-[#00d6c0] text-white px-4 py-2 rounded hover:bg-[#00bfa5]"
            onClick={toggleSidebar}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
