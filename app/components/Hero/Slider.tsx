"use client";
import React from "react";
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import banner1 from "@/public/banner1.jpg";
import Link from "next/link";

function Slider() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Paper
      style={{
        textAlign: "center",
        display: "flex",
        border: "none",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${banner1.src})`,
        color: "white",
        height: isSmallScreen ? "50vh" : isMedium ? "65vh" : "80vh",
        width: "100%",
        objectFit: "contain",
        padding: isSmallScreen ? "10px" : "20px",
      }}
    >
      <div className="absolute flex flex-col text-start left-5 max-sm:w-3/4  md:left-20 gap-5">
        <div className=" top-0 pt-serif-bold tracking-wider text-second  text-5xl max-sm:text-2xl sm:max-w-[40rem]  relative font-semibold slide-in-right ">
          Community-Focused Healthcare Solutions
        </div>
        <div className="slide-in-left  text-black text-md sm:text-lg text-xs md:text-xl relative  sm:max-w-[28rem] slide-in-bottom ">
          TirtaMed, where our name embodies the essence of pulsatility!
        </div>
        <div className="slide-in-left flex gap-9">
          <Link
            href="/about"
            className="bg-brand rounded-3xl px-5 max-sm:px-3 max-sm:text-xs max-sm:py-0.5 py-2"
          >
            Read More
          </Link>
          {/* <Link
            href="/contact"
            className="bg-brand rounded-3xl px-5 max-sm:px-3 max-sm:text-xs max-sm:py-0.5 py-2"
          >
            Contact Us
          </Link> */}
        </div>
      </div>
    </Paper>
  );
}

export default Slider;
