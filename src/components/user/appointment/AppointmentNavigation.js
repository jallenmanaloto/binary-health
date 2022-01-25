import React, { useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import Divider from "@mui/material/Divider";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Typography from "@mui/material/Typography";

const ScheduleAppointmentNavigation = ({
  setMyAppointmentsActive,
  setMakeAppointmentsActive,
  setMyRequestsActive,
  setMakeRequestsActive,
}) => {
  //setting state for navigation of appointment
  const [myAppointments, setMyAppointments] = useState(true);
  const [makeAppointments, setMakeAppointments] = useState(false);
  const [myRequests, setMyRequests] = useState(false);
  const [makeRequests, setMakeRequests] = useState(false);

  //handling active navigation
  const handleMyAppointments = () => {
    setMyAppointments(true);
    setMakeAppointments(false);
    setMyRequests(false);
    setMakeRequests(false);
    setMyAppointmentsActive(true);
    setMakeAppointmentsActive(false);
    setMyRequestsActive(false);
    setMakeRequestsActive(false);
  };

  const handleMakeAppointments = () => {
    setMyAppointments(false);
    setMakeAppointments(true);
    setMyRequests(false);
    setMakeRequests(false);
    setMyAppointmentsActive(false);
    setMakeAppointmentsActive(true);
    setMyRequestsActive(false);
    setMakeRequestsActive(false);
  };

  const handleMyRequests = () => {
    setMyAppointments(false);
    setMakeAppointments(false);
    setMyRequests(true);
    setMakeRequests(false);
    setMyAppointmentsActive(false);
    setMakeAppointmentsActive(true);
    setMyRequestsActive(true);
    setMakeRequestsActive(false);
  };

  const handleCreateRequests = () => {
    setMyAppointments(false);
    setMakeAppointments(false);
    setMyRequests(false);
    setMakeRequests(true);
    setMyAppointmentsActive(false);
    setMakeAppointmentsActive(false);
    setMyRequestsActive(false);
    setMakeRequestsActive(true);
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
            fontWeight: 400,
            width: "90%",
          }}
          variant="h6"
          component="h4"
        >
          Appointment
        </Typography>
        <List sx={{ mt: 0, width: "100%" }} component="nav">
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

        <Typography
          sx={{
            pt: 2,
            color: "#3376b5",
            fontWeight: 400,
            width: "90%",
          }}
          variant="h6"
          component="h4"
        >
          Requests
        </Typography>
        <List sx={{ mt: 0, width: "100%" }} component="nav">
          <ListItemButton
            sx={{ display: "flex", justifyContent: "start" }}
            onClick={handleMyRequests}
          >
            <ListItemIcon>
              {myRequests ? (
                <ArticleIcon sx={{ ml: 2, color: "#3376b5" }} />
              ) : (
                <ArticleIcon sx={{ ml: 2 }} />
              )}
            </ListItemIcon>
            {myRequests ? (
              <Typography
                sx={{ fontSize: "1.1rem", color: "#3376b5" }}
                variant="h6"
                component="h6"
              >
                My Requests
              </Typography>
            ) : (
              <Typography
                sx={{ fontSize: "1.1rem", color: "gray" }}
                variant="h6"
              >
                My Requests
              </Typography>
            )}
          </ListItemButton>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "start" }}
            onClick={handleCreateRequests}
          >
            <ListItemIcon>
              {makeRequests ? (
                <PostAddIcon sx={{ ml: 2, color: "#3376b5" }} />
              ) : (
                <PostAddIcon sx={{ ml: 2 }} />
              )}
            </ListItemIcon>
            {makeRequests ? (
              <Typography
                sx={{ fontSize: "1.1rem", color: "#3376b5" }}
                variant="h6"
                component="h6"
              >
                Create Request
              </Typography>
            ) : (
              <Typography
                sx={{ fontSize: "1.1rem", color: "gray" }}
                variant="h6"
              >
                Create Request
              </Typography>
            )}
          </ListItemButton>
        </List>
      </Paper>
    </div>
  );
};

export default ScheduleAppointmentNavigation;
