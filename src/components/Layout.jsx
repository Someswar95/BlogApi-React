import React, { Fragment } from "react";
import { Box } from "@mui/material";

const Navbar = React.lazy(() => import("./Navbar"));
const Footer = React.lazy(() => import("./Footer"));

const Layout = ({ title = "Welcome to our website", children }) => {
  return (
    <Fragment>
      <Box>
        <Navbar brand="Blogify" />
        {children}
        {/* <Footer /> */}
      </Box>
    </Fragment>
  );
};

export default Layout;
