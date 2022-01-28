import React, { useState, useContext } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import AppbarNavigation from "../context/AppbarNavigation";
import AppointmentDisplay from "./AppointmentDisplay";
import CreateRequest from "./CreateRequest";
import Container from "@mui/material/Container";
import DrawerLeft from "./DrawerLeft";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import MakeAppointment from "./MakeAppointment";
import MenuIcon from "@mui/icons-material/Menu";
import MyRequests from "./MyRequests";
import ScheduleRequestContext from "../context/ScheduleRequestContext";
import ScheduleRequestsNavigation from "./ScheduleRequestsNavigation";

const SchedulesRequests = () => {
  const theme = useTheme();

  const {
    myAppointmentsActive,
    makeAppointmentsActive,
    myRequestsActive,
    makeRequestsActive,
  } = useContext(ScheduleRequestContext);

  const { setMenuActive } = useContext(AppbarNavigation);
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          mt: { xs: 2, sm: 5, lg: 6 },
          height: "94vh",
        }}
        maxWidth="lg"
      >
        <MenuIcon
          sx={{
            color: "gray",
            fontSize: "2.25rem",
            cursor: "pointer",
            position: "fixed",
            top: 18,
            left: 12,
            zIndex: "10",
            display: { xs: "none", sm: "block", lg: "none" },
          }}
          onClick={() => setMenuActive(true)}
        />
        <DrawerLeft />
        <Grid container spacing={3}>
          <Grid
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
            item
            md={0}
            lg={3}
          >
            <ScheduleRequestsNavigation />
          </Grid>
          <Grid
            sx={{ display: { md: "block" } }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={9}
          >
            {myAppointmentsActive ? <AppointmentDisplay /> : null}
            {makeAppointmentsActive ? <MakeAppointment /> : null}
            {myRequestsActive ? <MyRequests /> : null}
            {makeRequestsActive ? <CreateRequest /> : null}
          </Grid>
        </Grid>
        <Fab
          sx={{
            position: "absolute",
            right: "2em",
            bottom: "6em",
            display: { xs: "block", sm: "none" },
          }}
          color="primary"
        >
          <MenuIcon onClick={() => setMenuActive(true)} />
        </Fab>
      </Container>
    </ThemeProvider>
  );
};

export default SchedulesRequests;
