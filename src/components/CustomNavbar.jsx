import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { isAuthenticated } from "../authorization/auth";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const CustomNavbar = (props) => {
  const [login, setLogin] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    setLogin(isAuthenticated());
  }, [login]);

  return (
    <React.Fragment>
      <AppBar position="static">
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
              {!login ? (
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
              ) : (
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
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default CustomNavbar;
