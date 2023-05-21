import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  useScrollTrigger,
  CssBaseline,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";
import { doLogout, isLoggedIn } from "../authorization/auth";
import { NavLink, useNavigate } from "react-router-dom";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [login, setLogin] = React.useState(false);

  React.useEffect(() => {
    setLogin(isLoggedIn());
  });

  const navigate = useNavigate();

  const logout = () => {
    doLogout(() => {
      setLogin(false);
      if (localStorage.getItem()) {
        window.location.reload();
      }
    });
  };

  const menuItems = [{ text: "Add post", path: "/addpost" }];

  const authItems = [
    {
      text: "Login",
      path: "/authorization/login",
    },
    {
      text: "Register",
      path: "/authorization/register",
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography
                variant="h6"
                noWrap
                component={NavLink}
                to={"/"}
                color="primary.dark"
                sx={{
                  display: { xs: "none", sm: "block" },
                  textDecoration: "none",
                }}
              >
                {props.brand}
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <AiOutlineSearch />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
                {!login && (
                  <>
                    <Button variant="text">
                      <NavLink
                        to="/authorization/login"
                        style={({ isActive, isPending }) => {
                          return {
                            textDecoration: "none",
                            color: isActive ? "#B3B6B7" : "#797EF6",
                          };
                        }}
                        className={({ isActive, isPending }) => {
                          return isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : "";
                        }}
                      >
                        Login
                      </NavLink>
                    </Button>
                    <Button variant="contained">
                      <NavLink
                        to="/authorization/register"
                        style={({ isActive, isPending }) => {
                          return {
                            textDecoration: "none",
                            color: isActive ? "white" : "white",
                          };
                        }}
                        className={({ isActive, isPending }) => {
                          return isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : "";
                        }}
                      >
                        Register
                      </NavLink>
                    </Button>
                  </>
                )}
                {login && (
                  <>
                    <Button variant="text">
                      <NavLink
                        to="/addpost"
                        style={({ isActive, isPending }) => {
                          return {
                            textDecoration: "none",
                            color: isActive ? "#B3B6B7" : "#797EF6",
                          };
                        }}
                        className={({ isActive, isPending }) => {
                          return isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : "";
                        }}
                      >
                        Add post
                      </NavLink>
                    </Button>
                    <Button variant="text">
                      <NavLink
                        onClick={logout}
                        style={({ isActive, isPending }) => {
                          return {
                            textDecoration: "none",
                            color: isActive ? "#797EF6" : "#797EF6",
                          };
                        }}
                        className={({ isActive, isPending }) => {
                          return isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : "";
                        }}
                      >
                        Sign out
                      </NavLink>
                    </Button>
                  </>
                )}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </ElevationScroll>
    </React.Fragment>
  );
}
