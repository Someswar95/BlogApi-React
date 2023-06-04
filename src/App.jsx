import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import theme from "./assets/theme";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AuthRoutes from "./utils/AuthRoutes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateRoutes from "./utils/PrivateRoutes";
import AddPost from "./pages/post/AddPost";
import Error404 from "./components/Error404";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/user/AuthProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer position="bottom-right" />
          <Layout>
            <Routes>
              <Route>
                <Route exact path="/" element={<Home />} />
              </Route>
              <Route path="/" element={<AuthRoutes />}>
                <Route exact path="authorization/login" element={<Login />} />
                <Route
                  exact
                  path="authorization/register"
                  element={<Register />}
                />
              </Route>
              <Route path="/" element={<PrivateRoutes />}>
                <Route exact path="/addpost" element={<AddPost />} />
              </Route>
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
