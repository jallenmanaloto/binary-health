import React from "react";
import MyAppointments from "../calendars/MyAppointments";
import Requests from "./Requests";

const UserHome = () => {
  return (
    <div>
      <MyAppointments />
      <Requests />
    </div>
  );
};

export default UserHome;
