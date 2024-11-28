"use client";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";
import { AppBar } from "@mui/material";

const drawerWidth = 200;

interface NavbarProps {
  window?: () => Window;
}

function Navbar(props: NavbarProps) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const homeHandler = () => {};
  const companyHandler = () => {};
  const departmentHandler = () => {};
  const serviceHandler = () => {};
  const contactHandler = () => {};

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" onClick={homeHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Company" onClick={companyHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              primary="Out Department"
              onClick={departmentHandler}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Services" onClick={serviceHandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText onClick={contactHandler} primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        boxSizing: "border-box",
        // backgroundColor: "#fff",
        position: "sticky",
        top: "0",
        zIndex: "15",
      }}
    >
      {/* <Image src={logo} className="w-24 ml-24" alt="logo" /> */}
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            position: "relative",
            left: "0px",
            justifyContent: "center",
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            color="Black"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              position: "relative",
              left: { sm: "10%", md: "40%" },
            }}
          >
            <button
              className="text-black px-2 outline-none  cursor-pointer text-lg hover:text-[#00d6c0] hover:bg-transparent"
              // onClick={homeHandler}
              // sx={{
              //   color: "black",
              //   fontWeight: "500",
              //   fontSize: "1.1rem",
              //   letterSpacing: "0.05rem",
              //   textTransform: "none", // Add this line
              //   "&:hover": {
              //     color: "#00d6c0",
              //     backgroundColor: "transparent",
              //   },
              // }}
            >
              <Link href="/">Home</Link>
            </button>
            <button
              onClick={companyHandler}
              className="text-black px-2 outline-none  cursor-pointer text-lg hover:text-[#00d6c0] hover:bg-transparent"
            >
              <Link href="/about">About us</Link>
            </button>
            <button
              onClick={departmentHandler}
              className="text-black px-2 outline-none  cursor-pointer text-lg hover:text-[#00d6c0] hover:bg-transparent"
            >
              <Link href="department">Our Department</Link>
            </button>
            <button
              onClick={serviceHandler}
              className="text-black px-2 outline-none  cursor-pointer text-lg hover:text-[#00d6c0] hover:bg-transparent"
            >
              <Link href="services">Services</Link>
            </button>
            <button
              onClick={contactHandler}
              className="text-black px-2 outline-none  cursor-pointer text-lg hover:text-[#00d6c0] hover:bg-transparent"
            >
              <Link href="contact">Contact</Link>
            </button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
