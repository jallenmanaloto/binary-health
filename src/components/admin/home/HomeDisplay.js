import React from "react";
import Cases from "./Cases";
import Container from "@mui/material/Container";
import Charts from "./Charts";
import Grid from "@mui/material/Grid";
import Users from "./Users";

const HomeDisplay = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        position: "absolute",
        top: "10vh",
        right: "0",
        bottom: "0",
        left: { xs: "0", sm: "0", md: "30vw", lg: "30vw", xl: "13vw" },
        overflowX: "hidden",
        overflowY: "scroll",
      }}
    >
      <Grid container>
        <Grid item sm={11} md={6} lg={12}>
          <Cases />
          <Charts />
          <Users />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeDisplay;
