import React, { Fragment } from "react";
import { Box } from "@mui/material";
import CustomNavbar from "./CustomNavbar";

const Navbar = React.lazy(() => import("./Navbar"));
const Footer = React.lazy(() => import("./Footer"));

const Layout = ({ title = "Welcome to our website", children }) => {
  return (
    <Fragment>
      <Box>
        {/* <Navbar brand="Blogify" /> */}
        <CustomNavbar brand="Blogify" />
        {children}
        {/* <Footer /> */}
      </Box>
    </Fragment>
  );
};

export default Layout;
