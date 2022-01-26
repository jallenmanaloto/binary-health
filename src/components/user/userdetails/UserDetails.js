import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UserDetailsNavigation from "./UserDetailsNavigation";

const UserDetails = () => {
  return (
    <Container
      sx={{ mt: { xs: 2, sm: 5, lg: 6 }, height: "94vh" }}
      maxWidth="lg"
    >
      <Grid container spacing={3}>
        <Grid item md={0} lg={3}>
          <UserDetailsNavigation />
        </Grid>
        <Grid item xs={12} lg={9}>
          Content
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetails;
