import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/UserService";

const Register = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setUser({
      ...user,
      [field]: actualValue,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    registerUser(user)
      .then((data) => {
        navigate("/authorization/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <Container sx={{ marginTop: "70px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box>
              <Typography variant="body1" color="secondary">
                SIGNUP
              </Typography>
              <Typography variant="h4" color="secondary.dark" fontWeight="800">
                Create an account
              </Typography>
              <Typography variant="body1" color="secondary">
                Fill out the form to get started.
              </Typography>
              <Box
                component="form"
                onSubmit={handleRegister}
                sx={{ marginTop: "30px" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="secondary.main">
                      Enter your name
                    </Typography>
                    <TextField
                      fullWidth
                      type="text"
                      label="Name"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={(e) => handleChange(e, "name")}
                      sx={{ marginTop: "10px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="secondary.main">
                      Enter your email
                    </Typography>
                    <TextField
                      fullWidth
                      type="text"
                      label="Email"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={(e) => handleChange(e, "email")}
                      sx={{ marginTop: "10px" }}
                    />
                  </Grid>
                </Grid>

                <Typography
                  variant="body2"
                  color="secondary.main"
                  sx={{ marginTop: "30px" }}
                >
                  Enter your password
                </Typography>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={(e) => handleChange(e, "password")}
                  sx={{ marginTop: "10px" }}
                />
                <Box sx={{ marginTop: "30px" }}>
                  <Grid container spacing={20}>
                    <Grid item xs={8}>
                      <Typography variant="body2" color="secondary.main">
                        Already have an account?{" "}
                        <Typography
                          display="inline"
                          variant="body2"
                          color="info.light"
                          component={NavLink}
                          to="/authorization/login"
                        >
                          Sign in here.
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained" type="submit">
                          Sign up
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ marginTop: "150px", marginLeft: "70px" }}>
              {/* <Avatar
                alt="cover_login"
                src="./cover_2.svg"
                variant="square"
                sx={{ width: "95%", height: "95%" }}
              /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Register;
