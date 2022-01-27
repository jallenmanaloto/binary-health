import React, { useState, useContext } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LogoutIcon from "@mui/icons-material/Logout";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";
import QrCodeIcon from "@mui/icons-material/QrCode";
import Typography from "@mui/material/Typography";
import UserDetailsNav from "../context/UserDetailsNav";

const DetailsNavDrawer = () => {
  //setting context
  const {
    activities,
    setActivities,
    personal,
    setPersonal,
    qr,
    setQr,
    userNavActive,
    setUserNavActive,
  } = useContext(UserDetailsNav);

  //handling navigations
  const handlePersonal = () => {
    setPersonal(true);
    setActivities(false);
    setQr(false);
  };
  const handleActivities = () => {
    setPersonal(false);
    setActivities(true);
    setQr(false);
  };
  const handleQr = () => {
    setPersonal(false);
    setActivities(false);
    setQr(true);
  };

  //handling drawer close
  const handleDrawerClose = () => {
    setUserNavActive(false);
  };
  return (
    <Drawer
      sx={{ width: "50%" }}
      anchor="left"
      open={userNavActive}
      onClose={handleDrawerClose}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "90vh",
          position: "relative",
        }}
        elevation={0}
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
          My Details
        </Typography>
        <List sx={{ mt: 0, width: "100%" }} component="nav">
          <ListItemButton
            sx={{ display: "flex", justifyContent: "start" }}
            onClick={handlePersonal}
          >
            <ListItemIcon>
              {personal ? (
                <PersonIcon sx={{ ml: 2, color: "#3376b5" }} />
              ) : (
                <PersonIcon sx={{ ml: 2 }} />
              )}
            </ListItemIcon>
            {personal ? (
              <Typography
                sx={{ fontSize: "1.1rem", color: "#3376b5", pr: 7 }}
                variant="h6"
                component="h6"
              >
                Personal
              </Typography>
            ) : (
              <Typography
                sx={{ fontSize: "1.1rem", color: "gray" }}
                variant="h6"
              >
                Personal
              </Typography>
            )}
          </ListItemButton>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "start" }}
            onClick={handleQr}
          >
            <ListItemIcon>
              {qr ? (
                <QrCodeIcon sx={{ ml: 2, color: "#3376b5" }} />
              ) : (
                <QrCodeIcon sx={{ ml: 2 }} />
              )}
            </ListItemIcon>
            {qr ? (
              <Typography
                sx={{ fontSize: "1.1rem", color: "#3376b5" }}
                variant="h6"
                component="h6"
              >
                QR Code
              </Typography>
            ) : (
              <Typography
                sx={{ fontSize: "1.1rem", color: "gray" }}
                variant="h6"
              >
                QR Code
              </Typography>
            )}
          </ListItemButton>
          <ListItemButton
            sx={{ display: "flex", justifyContent: "start" }}
            onClick={handleActivities}
          >
            <ListItemIcon>
              {activities ? (
                <LocalActivityIcon sx={{ ml: 2, color: "#3376b5" }} />
              ) : (
                <LocalActivityIcon sx={{ ml: 2 }} />
              )}
            </ListItemIcon>
            {activities ? (
              <Typography
                sx={{ fontSize: "1.1rem", color: "#3376b5" }}
                variant="h6"
                component="h6"
              >
                Activities
              </Typography>
            ) : (
              <Typography
                sx={{ fontSize: "1.1rem", color: "gray" }}
                variant="h6"
              >
                Activities
              </Typography>
            )}
          </ListItemButton>
        </List>
        <List sx={{ position: "absolute", bottom: 40, left: 0, width: "100%" }}>
          <ListItemButton
            sx={{ width: "100%", display: "flex", justifyContent: "start" }}
          >
            <ListItemIcon sx={{ ml: 2 }}>
              <LogoutIcon />
            </ListItemIcon>
            <Typography
              sx={{ fontSize: "1.1rem", color: "gray", ml: -2 }}
              variant="h6"
            >
              Logout
            </Typography>
          </ListItemButton>
        </List>
      </Paper>
    </Drawer>
  );
};

export default DetailsNavDrawer;
