import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import AppbarNavigation from "../context/AppbarNavigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import TodayIcon from "@mui/icons-material/Today";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

const UserAppbar = () => {
  //setting context
  const { setHome, setRestrictions, setScheduleRequests } =
    useContext(AppbarNavigation);

  //setting state for active navigation
  const [homeNav, setHomeNav] = useState(true);
  const [userNav, setUserNav] = useState(false);
  const [restrictionsNav, setRestrictionsNav] = useState(false);
  const [calendarNav, setCalendarNav] = useState(false);

  //handling active navigations
  const handleHomeNav = () => {
    setHomeNav(true);
    setUserNav(false);
    setRestrictionsNav(false);
    setCalendarNav(false);
    setHome(true);
    setScheduleRequests(false);
    setRestrictions(false);
  };
  const handleUserNav = () => {
    setUserNav(true);
    setHomeNav(false);
    setRestrictionsNav(false);
    setCalendarNav(false);
    setHome(false);
    setScheduleRequests(false);
    setRestrictions(false);
  };
  const handleRestrictionsNav = () => {
    setRestrictionsNav(true);
    setHomeNav(false);
    setUserNav(false);
    setCalendarNav(false);
    setHome(false);
    setScheduleRequests(false);
    setRestrictions(true);
  };
  const handleCalendarNav = () => {
    setCalendarNav(true);
    setHomeNav(false);
    setUserNav(false);
    setRestrictionsNav(false);
    setHome(false);
    setScheduleRequests(true);
    setRestrictions(false);
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
            spacing={0}
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
                onClick={handleRestrictionsNav}
              >
                {restrictionsNav ? (
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
