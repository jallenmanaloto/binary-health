import React, { useState } from "react";
import { userStyle } from "../styles/Styles";
import AppbarNavigation from "./context/AppbarNavigation";
import DrawerLeft from "./schedulerequests/DrawerLeft";
import Main from "./main/Main";
import ScheduleRequestContext from "./context/ScheduleRequestContext";
import UserAppbar from "./appbar/UserBottomAppbar";
import UserTopAppbar from "./appbar/UserTopAppbar";

const User = () => {
  const classes = userStyle();

  //handling navigations for appbar
  const [home, setHome] = useState(true);
  const [menuActive, setMenuActive] = useState(false);
  const [restrictions, setRestrictions] = useState(false);
  const [scheduleRequests, setScheduleRequests] = useState(false);

  //hanndling navigations for requests
  const [myAppointmentsActive, setMyAppointmentsActive] = useState(true);
  const [makeAppointmentsActive, setMakeAppointmentsActive] = useState(false);
  const [myRequestsActive, setMyRequestsActive] = useState(false);
  const [makeRequestsActive, setMakeRequestsActive] = useState(false);

  return (
    <AppbarNavigation.Provider
      value={{
        home,
        setHome,
        menuActive,
        setMenuActive,
        restrictions,
        setRestrictions,
        scheduleRequests,
        setScheduleRequests,
      }}
    >
      <ScheduleRequestContext.Provider
        value={{
          myAppointmentsActive,
          setMyAppointmentsActive,
          makeAppointmentsActive,
          setMakeAppointmentsActive,
          myRequestsActive,
          setMyRequestsActive,
          makeRequestsActive,
          setMakeRequestsActive,
        }}
      >
        <div className={classes.root}>
          <UserTopAppbar />
          <DrawerLeft />
          <Main />
          <UserAppbar />
        </div>
      </ScheduleRequestContext.Provider>
    </AppbarNavigation.Provider>
  );
};

export default User;
