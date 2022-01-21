import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formStyle } from "../styles/Styles";
import Alerts from "../alerts/Alerts";
import Box from "@mui/material/Box";
import CurrentUser from "../auth/CurrentUser";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const UserLogin = () => {
  const form = formStyle();
  const navigate = useNavigate();

  //Setting context
  const { setCurrentUser, setHeaders, currentUser, headers } =
    useContext(CurrentUser);

  //Declaring states for textfields value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Setting state for any error on login
  const [error, setError] = useState(false);

  //Handling error display
  const handleError = () => {
    setError(true);
    setInterval(() => {
      setError(false);
    }, 4000);
  };
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
      .then((res) => {
        setCurrentUser({
          email: res.data.data.email,
          first_name: res.data.data.first_name,
          middle_name: res.data.data.middle_name,
          last_name: res.data.data.last_name,
          covid_status: res.data.data.covid_status,
          role: res.data.data.role,
        });

        const { "access-token": token } = res.headers;
        setHeaders({
          token: token,
          client: res.headers.client,
          expiry: res.headers.expiry,
          uid: res.headers.uid,
        });

        if (res.data.data.role === "admin") {
          navigate("/admin");
        }
      })
      .catch((err) => {
        handleError();
      });
  };

  //handling login on enter key
  const handleEnterKeyLogin = (e) => {
    if (e.key === "Enter") handleLogin(e);
  };

  return (
    <div>
      <Grid container>
        <Grid container item xl={12}>
          <Paper
            className={form.formContainer}
            sx={{ backgroundColor: "#fcfcfc" }}
            elevation={0}
          >
            {error ? <Alerts /> : null}
            <Grid item sm={8} md={4} xl={3}>
              <Paper
                sx={{ borderRadius: "12px", backgroundColor: "#fcfcfc" }}
                className={form.form}
                elevation={4}
              >
                <Typography
                  sx={{ fontWeight: "bold", color: "#4d4d4d" }}
                  variant="h4"
                >
                  Sign in
                </Typography>
                <TextField
                  onChange={handleEmail}
                  onKeyDown={handleEnterKeyLogin}
                  value={email}
                  sx={{
                    paddingBottom: "1.2rem",
                    marginTop: "2.7em",
                    width: "80%",
                    backgroundColor: "#fcfcfc",
                  }}
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  onChange={handlePassword}
                  onKeyDown={handleEnterKeyLogin}
                  value={password}
                  sx={{
                    paddingBottom: "1.2rem",
                    width: "80%",
                    backgroundColor: "#fcfcfc",
                  }}
                  label="Password"
                  variant="outlined"
                />
                <Button
                  onClick={handleLogin}
                  sx={{ height: "3.7em", fontWeight: "bold", width: "80%" }}
                  variant="contained"
                >
                  Login
                </Button>
                <div className={form.optionsContainer}>
                  <Paper className={form.signupContainer} elevation={0}>
                    <Typography
                      sx={{ paddingRight: "0.2rem", color: "#4d4d4d" }}
                    >
                      Don't have an account yet?
                    </Typography>
                    <Link
                      href="register"
                      sx={{ cursor: "pointer", fontWeight: "500" }}
                      underline="hover"
                    >
                      Sign up
                    </Link>
                  </Paper>
                </div>
              </Paper>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserLogin;
