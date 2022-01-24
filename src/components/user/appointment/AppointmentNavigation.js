import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const AppointmentNavigation = ({
  setMyAppointmentsActive,
  setMakeAppointmentsActive,
}) => {
  //setting state for navigation of appointment
  const [myAppointments, setMyAppointments] = useState(true);
  const [makeAppointments, setMakeAppointments] = useState(false);

  //handling active navigation
  const handleMyAppointments = () => {
    setMyAppointments(true);
    setMakeAppointments(false);
    setMyAppointmentsActive(true);
    setMakeAppointmentsActive(false);
  };

  const handleMakeAppointments = () => {
    setMyAppointments(false);
    setMakeAppointments(true);
    setMyAppointmentsActive(false);
    setMakeAppointmentsActive(true);
  };

  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Typography
          sx={{
            pt: 2,
            color: "#3376b5",
            fontWeight: 600,
            width: "90%",
            textAlign: "center",
          }}
          variant="h6"
          component="h4"
        >
          Appointment
          <Divider sx={{ mt: 1, backgroundColor: "#3376b5" }} />
        </Typography>
        <List sx={{ mt: 15, width: "100%" }} component="nav">
          <ListItemButton
            sx={{ display: "flex", justifyContent: "start" }}
            onClick={handleMyAppointments}
          >
            <ListItemIcon>
              {myAppointments ? (
                <EventNoteIcon sx={{ ml: 2, color: "#3376b5" }} />
              ) : (
                <EventNoteIcon sx={{ ml: 2 }} />
              )}
            </ListItemIcon>
            {myAppointments ? (
              <Typography
                sx={{ fontSize: "1.1rem", color: "#3376b5" }}
                variant="h6"
                component="h6"
              >
                My Appointments
              </Typography>
            ) : (
              <Typography
                sx={{ fontSize: "1.1rem", color: "gray" }}
                variant="h6"
              >
                My Appointments
              </Typography>
            )}
          </ListItemButton>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "start" }}
            onClick={handleMakeAppointments}
          >
            <ListItemIcon>
              {makeAppointments ? (
                <LibraryAddCheckIcon sx={{ ml: 2, color: "#3376b5" }} />
              ) : (
                <LibraryAddCheckIcon sx={{ ml: 2 }} />
              )}
            </ListItemIcon>
            {makeAppointments ? (
              <Typography
                sx={{ fontSize: "1.1rem", color: "#3376b5" }}
                variant="h6"
                component="h6"
              >
                Make Appointment
              </Typography>
            ) : (
              <Typography
                sx={{ fontSize: "1.1rem", color: "gray" }}
                variant="h6"
              >
                Make Appointment
              </Typography>
            )}
          </ListItemButton>
        </List>
      </Paper>
    </div>
  );
};

export default AppointmentNavigation;
