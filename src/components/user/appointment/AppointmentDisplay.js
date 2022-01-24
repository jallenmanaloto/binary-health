import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

const AppointmentDisplay = () => {
  //setting state for date in calendar
  const [date, setDate] = useState(new Date());

  //setting state for response from api
  const [appointments, setAppointments] = useState([]);

  const filterDate = String(date).slice(0, 15);
  const appointmentToday = appointments
    .filter((date) => date.adate.slice(0, 15) === filterDate)
    .map((item) => {
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{ p: 2, color: "#4d4d4d" }}
              key={item.id}
              variant="h6"
            >
              {item.aname}
            </Typography>
            <Typography sx={{ p: 2, color: "#4d4d4d" }} variant="body1">
              8:00am
            </Typography>
          </div>
          <Divider />
        </>
      );
    });

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/api/v1/appointment/index/3",
    })
      .then((res) => {
        setAppointments(res.data.appointments);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container sx={{ pt: 4, height: "90vh" }} maxWidth="lg">
        <Grid container justifyContent="center" spacing={12}>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Paper elevation={0}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                openTo="day"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper
              sx={{ pt: 5, height: "100%", overflowY: "auto" }}
              elevation={0}
            >
              <Typography
                sx={{ color: "#3376b5", p: 2, fontWeight: 600 }}
                variant="h6"
              >
                My Appointments
              </Typography>
              {appointmentToday.length > 0 ? (
                appointmentToday
              ) : (
                <Typography sx={{ p: 2, color: "#4d4d4d" }} variant="body1">
                  No appointments today
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </LocalizationProvider>
  );
};

export default AppointmentDisplay;