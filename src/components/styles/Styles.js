import React from "react";
import { makeStyles } from "@mui/styles";

export const adminStyle = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f5f5f5",
  },
});

export const appbarStyle = makeStyles({
  root: {
    width: "87vw",
  },
  accountButton: {
    position: "absolute",
    right: "4em",
  },
  accountCircle: {
    color: "whitesmoke",
  },
});

export const drawerStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
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
