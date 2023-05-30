import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { doLogout, isAuthenticated } from "../authorization/auth";

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
      {/* <CssBaseline /> */}
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
                sx={{ display: { xs: "none", md: "flex", columnGap: "20px" } }}
              >
                {login ? (
                  <>
                    <Button
                      variant="text"
                      component={Link}
                      to="/addpost"
                      sx={{
                        my: 2,
                        display: "block",
                        "&.MuiButtonBase-root:hover": {
                          bgcolor: "transparent",
                        },
                      }}
                    >
                      Write
                    </Button>
                    <Box>
                      <Tooltip title="Open settings">
                        <IconButton
                          onClick={handleOpenUserMenu}
                          sx={{ p: 0, ":hover": { background: "none" } }}
                        >
                          <Avatar alt="Remy Sharp" src="" />
                          <MdKeyboardArrowDown />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Button textAlign="center" onClick={handleLogout}>
                            Logout
                          </Button>
                        </MenuItem>
                      </Menu>
                    </Box>
                  </>
                ) : (
                  <>
                    <Button
                      variant="text"
                      component={Link}
                      to="/authorization/login"
                      sx={{
                        my: 2,
                        display: "block",
                        "&.MuiButtonBase-root:hover": {
                          bgcolor: "transparent",
                        },
                      }}
                    >
                      Sign In
                    </Button>
                    <Button
                      variant="contained"
                      component={Link}
                      to="/authorization/register"
                      sx={{
                        my: 2,
                        display: "block",
                        borderRadius: "20px",
                      }}
                    >
                      Get started
                    </Button>
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
