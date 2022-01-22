import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TodayIcon from "@mui/icons-material/Today";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

const UserAppbar = () => {
  //setting state for active navigation
  const [homeNav, setHomeNav] = useState(true);
  const [userNav, setUserNav] = useState(false);
  const [requestNav, setRequestNav] = useState(false);
  const [calendarNav, setCalendarNav] = useState(false);

  //handling active navigations
  const handleHomeNav = () => {
    setHomeNav(true);
    setUserNav(false);
    setRequestNav(false);
    setCalendarNav(false);
  };
  const handleUserNav = () => {
    setUserNav(true);
    setHomeNav(false);
    setRequestNav(false);
    setCalendarNav(false);
  };
  const handleRequesteNav = () => {
    setRequestNav(true);
    setHomeNav(false);
    setUserNav(false);
    setCalendarNav(false);
  };
  const handleCalendarNav = () => {
    setCalendarNav(true);
    setHomeNav(false);
    setUserNav(false);
    setRequestNav(false);
  };
  return (
    <div>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ top: "auto", bottom: 0, display: { xs: "block", sm: "none" } }}
      >
        <Toolbar>
          <Grid
            container
            flexDirection="row"
            justifyContent="center"
            spacing={2}
          >
            <Grid item xs={3}>
              <IconButton
                sx={{
                  borderRadius: 3,
                  width: "100%",
                  p: 1,
                }}
                onClick={handleHomeNav}
              >
                {homeNav ? (
                  <HomeIcon sx={{ color: "#3376b5", fontSize: "2.25rem" }} />
                ) : (
                  <HomeOutlinedIcon sx={{ fontSize: "2.25rem" }} />
                )}
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton
                sx={{
                  borderRadius: 3,
                  width: "100%",
                }}
                onClick={handleCalendarNav}
              >
                {calendarNav ? (
                  <TodayIcon sx={{ color: "#3376b5", fontSize: "2.25rem" }} />
                ) : (
                  <TodayOutlinedIcon sx={{ fontSize: "2.25rem" }} />
                )}
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton
                sx={{
                  borderRadius: 3,
                  width: "100%",
                }}
                onClick={handleRequesteNav}
              >
                {requestNav ? (
                  <AssignmentIcon
                    sx={{ color: "#3376b5", fontSize: "2.25rem" }}
                  />
                ) : (
                  <AssignmentOutlinedIcon sx={{ fontSize: "2.25rem" }} />
                )}
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton
                sx={{
                  borderRadius: 3,
                  width: "100%",
                }}
                onClick={handleUserNav}
              >
                {userNav ? (
                  <AccountCircleIcon
                    sx={{ color: "#3376b5", fontSize: "2.25rem" }}
                  />
                ) : (
                  <AccountCircleOutlinedIcon sx={{ fontSize: "2.25rem" }} />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default UserAppbar;
