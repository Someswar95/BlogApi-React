import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  Container,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { doLogout, isAuthenticated } from "../authorization/auth";

const authItems = [
  {
    text: "Sign In",
    path: "/authorization/login",
  },
  {
    text: "Get started",
    path: "/authorization/register",
  },
];

const navItems = [
  {
    text: "Write",
    path: "/addpost",
  },
];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const CustomNavbar = (props) => {
  const [login, setLogin] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    setLogin(isAuthenticated());
  });

  const handleLogout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/");
    });
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position="static" variant="outlined">
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{ marginLeft: "60px", marginRight: "60px" }}
            >
              {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                color="primary.main"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                }}
              >
                {props.brand}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                {login ? (
                  <>
                    {navItems.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.path}
                        onclick={item.text == "Sign out" ? handleLogout : ""}
                        style={({ isActive }) => {
                          return {
                            textDecoration: "none",
                            color: isActive ? "red" : "black",
                            marginLeft: "20px",
                          };
                        }}
                        className={({ isActive, isPending }) => {
                          return isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : "";
                        }}
                        end
                        caseSensitive
                      >
                        {item.text}
                      </NavLink>
                    ))}
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          textDecoration: "none",
                          color: isActive ? "red" : "black",
                          marginLeft: "20px",
                        };
                      }}
                      className={({ isActive, isPending }) => {
                        return isActive ? "active" : isPending ? "pending" : "";
                      }}
                      onClick={handleLogout}
                      end
                      caseSensitive
                    >
                      Sign out
                    </NavLink>
                  </>
                ) : (
                  <>
                    {authItems.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.path}
                        style={({ isActive }) => {
                          return {
                            textDecoration: "none",
                            color: isActive ? "red" : "black",
                            marginLeft: "20px",
                          };
                        }}
                        className={({ isActive, isPending }) => {
                          return isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : "";
                        }}
                        end
                        caseSensitive
                      >
                        {item.text}
                      </NavLink>
                    ))}
                  </>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      {/* <Toolbar /> */}
    </React.Fragment>
  );
};

export default CustomNavbar;
