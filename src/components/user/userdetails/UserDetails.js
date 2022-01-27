import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UserDetailsNavigation from "./UserDetailsNavigation";
import UserPersonal from "./UserPersonal";

const UserDetails = () => {
  return (
    <Container
      sx={{ mt: { xs: 2, sm: 5, lg: 6 }, height: "94vh" }}
      maxWidth="lg"
    >
      <Grid container spacing={3}>
        <Grid
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
          item
          md={0}
          lg={3}
        >
          <UserDetailsNavigation />
        </Grid>
        <Grid item xs={12} lg={9}>
          <UserPersonal />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetails;
