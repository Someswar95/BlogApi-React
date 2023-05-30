import * as React from "react";
import { Box } from "@mui/material";
import CustomNavbar from "./CustomNavbar";
// import Footer from "./Footer";

const Layout = ({ title = "Welcome to our website", children }) => {
  return (
    <React.Fragment>
      <Box>
        <CustomNavbar brand="Blogify" />
        {children}
        {/* <Footer /> */}
      </Box>
    </React.Fragment>
  );
};

export default Layout;
