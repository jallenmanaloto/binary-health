import React, { useState } from "react";
import { userStyle } from "../styles/Styles";
import AppbarNavigation from "./context/AppbarNavigation";
import DrawerLeft from "./schedulerequests/DrawerLeft";
import Main from "./main/Main";
import ScheduleRequestContext from "./context/ScheduleRequestContext";
import UserAppbar from "./appbar/UserBottomAppbar";
import UserDetailsNav from "./context/UserDetailsNav";
import UserTopAppbar from "./appbar/UserTopAppbar";

const User = () => {
  const classes = userStyle();

  //handling navigations for appbar
  const [home, setHome] = useState(true);
  const [menuActive, setMenuActive] = useState(false);
  const [restrictions, setRestrictions] = useState(false);
  const [scheduleRequests, setScheduleRequests] = useState(false);
  const [userDetails, setUserDetails] = useState(false);

  //handling navigations for requests
  const [myAppointmentsActive, setMyAppointmentsActive] = useState(true);
  const [makeAppointmentsActive, setMakeAppointmentsActive] = useState(false);
  const [myRequestsActive, setMyRequestsActive] = useState(false);
  const [makeRequestsActive, setMakeRequestsActive] = useState(false);

  //handling navigation for user details
  const [personal, setPersonal] = useState(true);
  const [qr, setQr] = useState(false);
  const [activities, setActivities] = useState(false);
  const [userNavActive, setUserNavActive] = useState(false);

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
        userDetails,
        setUserDetails,
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
        <UserDetailsNav.Provider
          value={{
            activities,
            setActivities,
            personal,
            setPersonal,
            qr,
            setQr,
            userNavActive,
            setUserNavActive,
          }}
        >
          <div className={classes.root}>
            <UserTopAppbar />
            <DrawerLeft />
            <Main />
            <UserAppbar />
          </div>
        </UserDetailsNav.Provider>
      </ScheduleRequestContext.Provider>
    </AppbarNavigation.Provider>
  );
};

export default User;
