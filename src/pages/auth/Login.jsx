import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/UserService";
import { doLogin } from "../../authorization/auth";
import { toast } from "react-toastify";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Login = () => {
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setCredentials({
      ...credentials,
      [field]: actualValue,
    });
  };

  const handlelogin = (event) => {
    event.preventDefault();
    loginUser(credentials)
      .then((data) => {
        doLogin(data, () => {
          navigate("/");
        });
        toast.success("Login Successful !!");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400 || error.response.status === 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on sever !!");
        }
      });
  };

  return (
    <React.Fragment>
      <Container sx={{ marginTop: "70px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box>
              {/* <Avatar
                alt="cover_login"
                src="./cover_1.svg"
                variant="square"
                sx={{ width: "85%", height: "85%" }}
              /> */}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography variant="body1" color="secondary">
                LOGIN
              </Typography>
              <Typography variant="h4" color="secondary.dark" fontWeight="800">
                Welcome back
              </Typography>
              <Typography variant="body1" color="secondary">
                Login to manage your account
              </Typography>
              <Box
                component="form"
                onSubmit={handlelogin}
                sx={{ marginTop: "30px" }}
              >
                <Box>
                  <Typography variant="body2" color="secondary.main">
                    Enter your email
                  </Typography>
                  <TextField
                    fullWidth
                    type="text"
                    label="Username"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={(e) => handleChange(e, "username")}
                    sx={{ marginTop: "10px" }}
                  />
                </Box>
                <Box sx={{ marginTop: "30px" }}>
                  <Grid container spacing={38}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="secondary.main">
                        Enter your password
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="caption" color="info.main">
                        Forgot your password?
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={(e) => handleChange(e, "password")}
                  sx={{ marginTop: "10px" }}
                />
                <Box sx={{ marginTop: "30px" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Typography variant="body2" color="secondary.main">
                        Don't have an account yet?{" "}
                        <Typography
                          display="inline"
                          variant="body2"
                          color="info.light"
                          component={NavLink}
                          to="/authorization/register"
                        >
                          Sign up here.
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained" type="submit">
                          Login
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* <form onSubmit={handlelogin}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={(e) => handleChange(e, "username")}
        />
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={(e) => handleChange(e, "password")}
        />
        <button>Create</button>
      </form> */}
    </React.Fragment>
  );
};

export default Login;
