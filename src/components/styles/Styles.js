import React from "react";
import { makeStyles } from "@mui/styles";

export const formStyle = makeStyles({
  display: {
    backgroundColor: "lightcoral",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    padding: "0",
    marginBottom: "12em",
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  },
  signupContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  optionsContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  optionsContainerRegister: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingTop: "1rem",
  },
});

export const adminStyle = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f5f5f5",
  },
});

export const drawerStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "13vw",
    backgroundColor: "white",
    borderRight: "1px solid #e0e0e0",
  },
  expandIcon: {
    color: "#707070",
  },
  navigationText: {
    color: "#575757",
  },
});
