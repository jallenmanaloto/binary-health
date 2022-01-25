import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import AppointmentDisplay from "./AppointmentDisplay";
import ScheduleAppointmentNavigation from "./AppointmentNavigation";
import MakeAppointment from "./MakeAppointment";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Appointment = () => {
  const theme = useTheme();
  //setting state for upstream value of navigations
  const [myAppointmentsActive, setMyAppointmentsActive] = useState(true);
  const [makeAppointmentsActive, setMakeAppointmentsActive] = useState(false);
  const [myRequestsActive, setMyRequestsActive] = useState(false);
  const [makeRequestsActive, setMakeRequestsActive] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          mt: { sm: 6, lg: 6 },
          height: "94vh",
        }}
        maxWidth="lg"
      >
        <Grid container spacing={3}>
          <Grid
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
            item
            md={0}
            lg={3}
          >
            <ScheduleAppointmentNavigation
              setMyAppointmentsActive={setMyAppointmentsActive}
              setMakeAppointmentsActive={setMakeAppointmentsActive}
              setMyRequestsActive={setMyRequestsActive}
              setMakeRequestsActive={setMakeRequestsActive}
            />
          </Grid>
          <Grid
            sx={{ display: { md: "block" } }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={9}
          >
            {myAppointmentsActive ? (
              <AppointmentDisplay />
            ) : (
              <MakeAppointment />
            )}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Appointment;
