import React from "react";
import { userStyle } from "../styles/Styles";
import Grid from "@mui/material/Grid";
import UserAppbar from "./appbar/UserBottomAppbar";

const User = () => {
  const classes = userStyle();
  return (
    <div className={classes.root}>
      <UserAppbar />
    </div>
  );
};

export default User;
