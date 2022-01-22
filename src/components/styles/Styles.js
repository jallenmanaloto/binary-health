import React from "react";
import { makeStyles } from "@mui/styles";

export const adminStyle = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    backgroundColor: "#f5f5f5",
  },
});

export const appbarStyle = makeStyles({
  accountButton: {
    position: "absolute",
    right: "4em",
    display: "flex",
    alignItems: "center",
  },
  accountCircle: {
    color: "whitesmoke",
  },
});

export const caseStyle = makeStyles({
  casePaper: {
    paddingTop: "1.5rem",
    paddingBottom: "1.3em",
  },
  caseTitle: {
    color: "#3376b5",
    textAlign: "center",
  },
  caseData: {
    color: "#545454",
    textAlign: "center",
  },
  caseDate: {
    color: "#737373",
    textAlign: "center",
  },
});

export const chartsStyle = makeStyles({
  chartTitle: {
    color: "#3376b5",
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

export const establishmentStyle = makeStyles({
  selectContainer: {
    display: "flex",
    justifyContent: "start",
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

export const cellStyle = makeStyles({
  root: {
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
      outline: "none",
    },
  },
});

export const loginErrorAlert = makeStyles({
  root: {
    position: "absolute",
    width: "25%",
    top: "3em",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

export const loginImage = makeStyles({
  root: {
    height: "66vh",
    position: "absolute",
    top: "9%",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "12%",
    zindex: 1,
    opacity: 0.15,
  },
  Title: {},
});

export const userStyle = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
});
