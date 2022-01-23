import React from "react";
import Container from "@mui/material/Container";
import MyAppointments from "../calendars/MyAppointments";
import Requests from "./Requests";

const Main = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        backgroundColor: "lightslategray",
        pt: 10,
        overflowY: "scroll",
      }}
    >
      <Requests />
      <MyAppointments />
    </Container>
  );
};

export default Main;
