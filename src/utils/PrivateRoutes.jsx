import React from "react";
import { isAuthenticated } from "../authorization/auth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/authorization/login" />
  );
};

export default PrivateRoutes;
