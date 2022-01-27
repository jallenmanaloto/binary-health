import React, { useContext } from "react";
import Activities from "./Activities";
import Container from "@mui/material/Container";
import DetailsNavDrawer from "./DetailsNavDrawer";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import UserDetailsNav from "../context/UserDetailsNav";
import UserDetailsNavigation from "./UserDetailsNavigation";
import UserPersonal from "./UserPersonal";
import QRCode from "./QRCode";

const UserDetails = () => {
  //setting context for navigation
  const { activities, personal, qr, setUserNavActive } =
    useContext(UserDetailsNav);

  return (
    <Container
      sx={{ mt: { xs: 2, sm: 5, lg: 6 }, height: "94vh" }}
      maxWidth="lg"
    >
      <MenuIcon
        sx={{
          color: "gray",
          fontSize: "2.25rem",
          cursor: "pointer",
          position: "fixed",
          top: 18,
          left: 25,
          zIndex: "10",
          display: { xs: "none", sm: "block", lg: "none" },
        }}
        onClick={() => setUserNavActive(true)}
      />
      <DetailsNavDrawer />
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
          {personal ? <UserPersonal /> : null}
          {qr ? <QRCode /> : null}
          {activities ? <Activities /> : null}
        </Grid>
      </Grid>
      <Fab
        sx={{
          position: "absolute",
          right: "2em",
          bottom: "6em",
          display: { xs: "block", sm: "none" },
        }}
        color="primary"
      >
        <MenuIcon onClick={() => setUserNavActive(true)} />
      </Fab>
    </Container>
  );
};

export default UserDetails;
