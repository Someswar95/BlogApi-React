import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../authorization/auth";

const PrivateRoutes = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/authorization/login" />;
};

export default PrivateRoutes;
