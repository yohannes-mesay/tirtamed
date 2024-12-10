"use client";
import React from "react";
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import banner1 from "@/public/tirtabanner.jpg";

function ContactBanner() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Paper
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${banner1.src})`,
        color: "white",
        height: isSmallScreen ? "20vh" : isMedium ? "25vh" : "45vh",
        width: "100%",
        padding: isSmallScreen ? "10px" : "20px",
      }}
    >
      <div className="text-5xl font-semibold">
        <h1 className="">Contact Us</h1>
        {/* <div className=" top-0 pt-serif-bold tracking-wider text-second text-5xl  relative font-semibold slide-in-right ">
          Quality Health
        </div>
        <div className="slide-in-left  text-black text-md sm:text-lg md:text-xl relative  sm:max-w-[28rem] slide-in-bottom ">
          Empowering Healthcare Professionals to Deliver Quality Services
        </div>
        <div className="slide-in-left flex gap-9">
          <Link
            href="/about"
            className="bg-second rounded-3xl px-5 max-sm:px-3 max-sm:text-xs max-sm:py-0.5 py-2"
          >
            Read More
          </Link>
          <Link
            href="/contact"
            className="bg-brand rounded-3xl px-5 max-sm:px-3 max-sm:text-xs max-sm:py-0.5 py-2"
          >
            Contact Us
          </Link>
        </div> */}
      </div>
    </Paper>
  );
}

export default ContactBanner;
