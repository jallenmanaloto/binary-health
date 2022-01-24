import React, { useState } from "react";
import AppointmentDisplay from "./AppointmentDisplay";
import AppointmentNavigation from "./AppointmentNavigation";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

const Appointment = () => {
  //setting state for upstream value of navigations
  const [myAppointmentsActive, setMyAppointmentsActive] = useState(true);
  const [makeAppointmentsActive, setMakeAppointmentsActive] = useState(false);

  return (
    <Container
      sx={{
        mt: { sm: 6, lg: 6 },
        height: "94vh",
      }}
      maxWidth="lg"
    >
      <Grid container spacing={3}>
        <Grid
          sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
          item
          md={0}
          lg={3}
        >
          <AppointmentNavigation
            setMyAppointmentsActive={setMyAppointmentsActive}
            setMakeAppointmentsActive={setMakeAppointmentsActive}
          />
        </Grid>
        <Grid sx={{ display: { md: "block" } }} item sm={12} md={12} lg={9}>
          <Paper>{myAppointmentsActive ? <AppointmentDisplay /> : null}</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Appointment;
