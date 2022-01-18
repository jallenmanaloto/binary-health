import React from "react";
import { makeStyles } from "@mui/styles";

export const loginStyle = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
  },
  display: {
    backgroundColor: "lightcoral",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  signupContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
});
