import React from "react";
import { makeStyles } from "@mui/styles";

export const loginStyle = makeStyles({
  root: {
    backgroundColor: "lightcoral",
    height: "100vh",
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
    height: "70vh",
    width: "30vw",
    marginLeft: "15em",
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    height: "100vh",
  },
  signupContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  optionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
});
