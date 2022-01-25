import React, { useState } from "react";
import { userStyle } from "../styles/Styles";
import AppbarNavigation from "./context/AppbarNavigation";
import Main from "./main/Main";
import UserAppbar from "./appbar/UserBottomAppbar";
import UserTopAppbar from "./appbar/UserTopAppbar";

const User = () => {
  const classes = userStyle();

  //handling navigations for appbar
  const [home, setHome] = useState(true);
  const [scheduleRequests, setScheduleRequests] = useState(false);

  return (
    <AppbarNavigation.Provider
      value={{ home, setHome, scheduleRequests, setScheduleRequests }}
    >
      <div className={classes.root}>
        <UserTopAppbar />
        <Main />
        <UserAppbar />
      </div>
    </AppbarNavigation.Provider>
  );
};

export default User;
