import React, { useState } from "react";
import axios from "axios";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

const MakeAppointment = () => {
  //setting value for appointment type
  const [appointmentType, setAppointmentType] = useState("");

  //setting date for datepicker
  const [appointmentDate, setAppointmentDate] = useState(new Date());

  //handling changes for breakpoint on mobile
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  //handling changes on appointment type
  const handleAppointmentType = (event) => {
    setAppointmentType(event.target.value);
  };

  //handling change on datepicker
  const handleDateChange = (newDate) => {
    setAppointmentDate(newDate);
  };

  // function to convert time to readable value
  const convertTime = (duration) => {
    const time = String(duration);
    const hours = time.slice(16, 18);
    const minutes = time.slice(19, 21);
    const ampm = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 === 0 ? 12 : hours % 12}:${minutes} ${ampm}`;
  };

  //handling making an appointment
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/api/v1/appointment/make_appointment/3",
      data: {
        aname: appointmentType,
        atype: appointmentType,
        adate: String(appointmentDate),
        atime: convertTime(appointmentDate),
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ height: "90vh", mt: { xs: 2, sm: -1, md: -1, lg: 0 } }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              sx={{
                p: 2,
                textAlign: "center",
                color: "#3376b5",
                fontWeight: 600,
              }}
              variant="h5"
            >
              Make an appointment
            </Typography>
          </Grid>
          <Grid
            sx={{
              mt: 14,
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
            item
            xs={10}
            lg={10}
          >
            <Typography sx={{ pr: 3, pl: 8, fontSize: "1.1rem" }} variant="h6">
              Appointment Type:
            </Typography>
            <FormControl sx={{ width: "50%" }}>
              <InputLabel>Choose appointment type</InputLabel>
              <Select
                value={appointmentType}
                onChange={handleAppointmentType}
                label="Choose appointment type"
              >
                <MenuItem value="Doctor's Consultation">
                  Doctor's Consultation
                </MenuItem>
                <MenuItem value="Clinic Checkup">Clinic Checkup</MenuItem>
                <MenuItem value="Swab Test">Swab Test</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            sx={{
              mt: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
            item
            xs={10}
            lg={10}
          >
            <Typography
              sx={{ pr: 3, pb: 3, pl: 8, fontSize: "1.1rem", color: "#4d4d4d" }}
              variant="h6"
            >
              Appointment Date:
            </Typography>
            {isSmallScreen ? (
              <MobileDatePicker
                label="Date mobile"
                inputFormat="MM/dd/yyyy"
                value={appointmentDate}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "50%" }} />
                )}
              />
            ) : (
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={appointmentDate}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "50%" }} />
                )}
              />
            )}
          </Grid>
          <Grid
            sx={{
              mt: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
            item
            xs={10}
            lg={10}
          >
            <Typography
              sx={{ pr: 3, pb: 3, pl: 8, fontSize: "1.1rem", color: "#4d4d4d" }}
              variant="h6"
            >
              Appointment Time:
            </Typography>
            <TimePicker
              label="Time"
              value={appointmentDate}
              onChange={handleDateChange}
              minutesStep={30}
              renderInput={(params) => (
                <TextField {...params} sx={{ width: "50%" }} />
              )}
            />
          </Grid>
          <Grid
            sx={{
              mt: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
            item
            xs={10}
            lg={10}
          >
            <Typography
              sx={{
                pr: 3,
                pb: 12,
                pl: 8,
                fontSize: "1.1rem",
                color: "#4d4d4d",
              }}
              variant="h6"
            >
              Instructions:
            </Typography>
            <TextField
              sx={{ ml: { xs: 5, sm: 6.5 }, width: "50%" }}
              label="Disclosure"
              placeholder="Special conditions"
              rows={4}
              multiline
            />
          </Grid>
          <Grid container item justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  mt: { xs: 4, sm: 8, lg: 10 },
                  ml: "50%",
                  transform: "translateX(-50%)",
                  width: "10em",
                  height: "3em",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </LocalizationProvider>
  );
};

export default MakeAppointment;
