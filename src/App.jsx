import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import theme from "./assets/theme";
import AuthRoutes from "./utils/AuthRoutes";
import AddPost from "./pages/post/AddPost";
import PrivateRoutes from "./utils/PrivateRoutes";
import { ToastContainer } from "react-toastify";

// dynamic import
const Layout = lazy(() => import("./components/Layout"));
const Error404 = React.lazy(() => import("./components/Error404"));
const Home = lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ToastContainer position="bottom-right" />
        <Suspense fallback={<div>Page is Loading...</div>}>
          <Layout>
            <Routes>
              <Route>
                <Route exact path="/" element={<Home />} />
              </Route>
              <Route path="/" element={<AuthRoutes />}>
                <Route path="authorization/login" element={<Login />} />
                <Route path="authorization/register" element={<Register />} />
              </Route>
              <Route path="/" element={<PrivateRoutes />}>
                <Route path="/addpost" element={<AddPost />} />
              </Route>
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
