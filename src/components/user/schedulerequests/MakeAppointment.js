import React, { useState, useContext } from "react";
import axios from "axios";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import CurrentUser from "../../auth/CurrentUser";
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
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import TimePicker from "@mui/lab/TimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

const MakeAppointment = () => {
  //setting context for current user
  const { currentUser, headers } = useContext(CurrentUser);

  //setting value for appointment type
  const [appointmentType, setAppointmentType] = useState("");
  const [error, setError] = useState(false);

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

  // defining snackbar
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const snack = (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
        message={snackMessage}
      />
    </div>
  );

  //handling making an appointment
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `https://health-users-api.herokuapp.com/api/v1/appointment/make_appointment/${currentUser.id}`,
      data: {
        aname: appointmentType,
        atype: appointmentType,
        adate: String(appointmentDate),
        atime: convertTime(appointmentDate),
      },
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => {
        setOpen(true);
        setSnackMessage("Appointment request submitted");
        setAppointmentType("");
      })
      .catch((err) => {
        setOpen(true);
        setSnackMessage("Error occurred, try again later");
      });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ height: "90vh", mt: { xs: 0, sm: -1, md: -1, lg: 0 } }}>
        <Grid container justifyContent="center">
          <Grid
            sx={{ backgroundColor: "#3376b5" }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Typography
              sx={{
                p: 2,
                textAlign: "left",
                color: "whitesmoke",
                fontWeight: 400,
              }}
              variant="h5"
            >
              Make an appointment
            </Typography>
          </Grid>
          <Grid
            sx={{
              mt: { xs: 2, sm: 2, lg: 5 },
              display: "flex",
              flexDirection: "column",
            }}
            item
            xs={10}
            lg={10}
          >
            <Typography
              sx={{
                pr: 3,
                pb: 2,
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#5c5c5c",
              }}
              variant="h6"
            >
              Appointment Type:
            </Typography>
            <FormControl sx={{ width: "100%" }}>
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
              flexDirection: "column",
            }}
            item
            xs={10}
            lg={10}
          >
            <Typography
              sx={{
                pr: 3,
                pb: 2,
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#5c5c5c",
              }}
              variant="h6"
            >
              Appointment Date:
            </Typography>
            {isSmallScreen ? (
              <MobileDatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={appointmentDate}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "100%" }} />
                )}
              />
            ) : (
              <DesktopDatePicker
                label="Date"
                inputFormat="MM/dd/yyyy"
                value={appointmentDate}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "100%" }} />
                )}
              />
            )}
          </Grid>
          <Grid
            sx={{
              mt: 6,
              display: "flex",
              flexDirection: "column",
            }}
            item
            xs={10}
            lg={10}
          >
            <Typography
              sx={{
                pr: 3,
                pb: 2,
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#5c5c5c",
              }}
              variant="h6"
            >
              Appointment Time:
            </Typography>
            {isSmallScreen ? (
              <MobileTimePicker
                label="Time"
                value={appointmentDate}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "100%" }} />
                )}
              />
            ) : (
              <TimePicker
                label="Time"
                value={appointmentDate}
                onChange={handleDateChange}
                minutesStep={30}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "100%" }} />
                )}
              />
            )}
          </Grid>
          <Grid
            sx={{
              mt: 6,
              display: "flex",
              flexDirection: "column",
            }}
            item
            xs={10}
            lg={10}
          >
            <Typography
              sx={{
                pr: 3,
                pb: 2,
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#5c5c5c",
              }}
              variant="h6"
            >
              Instructions:
            </Typography>
            <TextField
              error={error}
              sx={{ width: "100%" }}
              label="Disclosure"
              placeholder="Special conditions"
              rows={4}
              multiline
            />
          </Grid>
          <Grid container item justifyContent="center">
            <Grid item xs={10} lg={10}>
              <Button
                variant="contained"
                sx={{
                  mt: { xs: 4, sm: 3, md: 3, lg: 2, xl: 10 },
                  ml: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                  height: "3em",
                  backgroundColor: "#3376b5",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {snack}
      </Paper>
    </LocalizationProvider>
  );
};

export default MakeAppointment;
