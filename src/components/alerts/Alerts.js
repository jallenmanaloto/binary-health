import React from "react";
import Alert from "@mui/material/Alert";
import { loginErrorAlert } from "../styles/Styles";

const Alerts = () => {
  const alertStyle = loginErrorAlert();
  return (
    <div className={alertStyle.root}>
      <Alert severity="error">Invalid login credentials</Alert>
    </div>
  );
};

export default Alerts;
