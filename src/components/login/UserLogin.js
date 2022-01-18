import React from "react";
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

  return (
    <Box>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} xl={12}>
          <Paper className={login.form} elevation={2}>
            <Grid container direction="column" xs={8} sm={8} md={6} xl={3}>
              <Grid item>
                <Typography sx={{ paddingBottom: "2em" }} variant="h3">
                  BETELGEUSE
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">Welcome back</Typography>
                <Typography
                  sx={{ fontSize: "1.1rem", paddingTop: "1rem" }}
                  variant="h5"
                >
                  Login to your account.
                </Typography>
              </Grid>
              <TextField
                sx={{ paddingBottom: "1.2rem", marginTop: "2.7em" }}
                label="Email"
                variant="outlined"
              />
              <TextField
                sx={{ paddingBottom: "1.2rem" }}
                label="Password"
                variant="outlined"
              />
              <Button
                sx={{ height: "3.2em", fontWeight: "bold" }}
                variant="contained"
              >
                Login
              </Button>
              <Grid item>
                <Paper className={login.signupContainer} elevation={0}>
                  <Typography sx={{ paddingRight: "0.2rem" }}>
                    Don't have ann account yet?
                  </Typography>
                  <Link sx={{ cursor: "pointer" }} underline="hover">
                    Sign up
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserLogin;
