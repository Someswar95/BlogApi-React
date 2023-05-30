import React from "react";
import { isAuthenticated } from "../authorization/auth";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  return !isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
