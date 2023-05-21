import React from "react";
import { isLoggedIn } from "../authorization/auth";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = () => {
  return !isLoggedIn() ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
