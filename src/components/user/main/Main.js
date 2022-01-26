import React, { useContext } from "react";
import AppbarNavigation from "../context/AppbarNavigation";
import Container from "@mui/material/Container";
import Restrictions from "../restrictions/Restrictions";
import SchedulesRequests from "../schedulerequests/SchedulesRequests";
import UserDetails from "../userdetails/UserDetails";
import UserHome from "../userhome/UserHome";

const Main = () => {
  //setting context
  const { home, restrictions, scheduleRequests, userDetails } =
    useContext(AppbarNavigation);

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        pt: { xs: 0, sm: 5, md: 5, lg: 5 },
        overflowY: "scroll",
      }}
    >
      {home ? <UserHome /> : null}
      {scheduleRequests ? <SchedulesRequests /> : null}
      {restrictions ? <Restrictions /> : null}
      {userDetails ? <UserDetails /> : null}
    </Container>
  );
};

export default Main;
