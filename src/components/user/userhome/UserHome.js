import React from "react";
import { userStyle } from "../../styles/Styles";
import Headlines from "./Headlines";
import MyAppointments from "../calendars/MyAppointments";
import Requests from "./Requests";

const UserHome = () => {
  //setting style layout
  const classes = userStyle();
  return (
    <div className={classes.homeRoot}>
      <MyAppointments />
      <Requests />
      <Headlines />
    </div>
  );
};

export default UserHome;
