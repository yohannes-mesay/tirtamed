import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CustomNavButtonProps {
  next: boolean;
  onClick: () => void;
}

const CustomNavButton: React.FC<CustomNavButtonProps> = ({ next, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        borderRadius: "4px", // Make it rectangular
        padding: "10px",
        backgroundColor: "#00d6c0",
        color: "white",
        margin: "10px",
      }}
    >
      {next ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
    </IconButton>
  );
};

export default CustomNavButton;
