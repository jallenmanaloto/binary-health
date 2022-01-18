import React, { useState } from "react";
import axios from "axios";
import { loginStyle } from "../styles/Styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const UserLogin = () => {
  const login = loginStyle();
  //Declaring states for textfields value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handling onchange for value of textfields
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //Handling login post request to api
  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/auth/sign_in",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //handling login on enter key
  const handleEnterKeyLogin = (e) => {
    if (e.key === "Enter") handleLogin(e);
  };

  return (
    <Box>
      <Grid container>
        <Grid item sm={0} xl={4}>
          <Paper sx={{ backgroundColor: "lightcoral", height: "100vh" }}>
            hello
          </Paper>
        </Grid>
        <Grid item sm={8} xl={8}>
          <Paper className={login.formContainer} elevation={0}>
            <Paper className={login.form}>
              <Typography sx={{ paddingBottom: "2em" }} variant="h3">
                BETELGEUSE
              </Typography>
              <Typography variant="h4">Welcome back</Typography>
              <Typography
                sx={{ fontSize: "1.1rem", paddingTop: "1rem" }}
                variant="h5"
              >
                Login to your account.
              </Typography>
              <TextField
                onChange={handleEmail}
                onKeyDown={handleEnterKeyLogin}
                value={email}
                sx={{
                  paddingBottom: "1.2rem",
                  marginTop: "2.7em",
                  width: "80%",
                }}
                label="Email"
                variant="outlined"
              />
              <TextField
                onChange={handlePassword}
                onKeyDown={handleEnterKeyLogin}
                value={password}
                sx={{ paddingBottom: "1.2rem", width: "80%" }}
                label="Password"
                variant="outlined"
              />
              <Button
                onClick={handleLogin}
                sx={{ height: "3.2em", fontWeight: "bold", width: "80%" }}
                variant="contained"
              >
                Login
              </Button>
              <div className={login.optionsContainer}>
              <Paper className={login.signupContainer} elevation={0}>
                <Typography sx={{ paddingRight: "0.2rem" }}>
                  Don't have an account yet?
                </Typography>
                <Link sx={{ cursor: "pointer", fontWeight: '500' }} underline="none">
                  Sign up
                </Link>
              </Paper>
              <Link sx={{marginTop: "2rem", fontWeight: '400', cursor: 'pointer'}} underline='none'>Forgot Password</Link>
              </div>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserLogin;
