import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import CurrentUser from "../../auth/CurrentUser";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

const AppointmentDisplay = () => {
  //setting headers value from context
  const { currentUser, headers } = useContext(CurrentUser);

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
            key={date.id}
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
              {item.atime}
            </Typography>
          </div>
          <Divider />
        </>
      );
    });

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://health-users-api.herokuapp.com/api/v1/appointment/index/${currentUser.id}`,
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => {
        setAppointments(res.data.appointments);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} lg={12}>
          <Paper elevation={0}>
            <StaticDatePicker
              toolbarTitle="Your appointments"
              orientation="landscape"
              openTo="day"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Paper
            sx={{ pb: 6, height: "100%", overflowY: "auto" }}
            elevation={0}
          >
            <Typography
              sx={{
                backgroundColor: "#3376b5",
                color: "whitesmoke",
                p: 2,
                fontWeight: 400,
              }}
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
    </LocalizationProvider>
  );
};

export default AppointmentDisplay;
