import React from "react";
import { userStyle } from "../styles/Styles";
import Grid from "@mui/material/Grid";
import UserAppbar from "./appbar/UserBottomAppbar";
import UserTopAppbar from "./appbar/UserTopAppbar";

const User = () => {
  const classes = userStyle();
  return (
    <div className={classes.root}>
      <UserTopAppbar />
      <UserAppbar />
    </div>
  );
};

export default User;
