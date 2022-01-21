import React from "react";
import Cases from "./Cases";
import Container from "@mui/material/Container";
import Charts from "./Charts";
import Establishments from "../establishment/Establishments";
import Grid from "@mui/material/Grid";
import Requests from "../request/Requests";
import Users from "./Users";
import { Paper } from "@mui/material";

const HomeDisplay = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        top: "10vh",
        right: "0",
        bottom: "0",
        left: { xs: "0", sm: "0", md: "25vw", lg: "25vw", xl: "13vw" },
        overflowX: "hidden",
        overflowY: "scroll",
        backgroundColor: "transparent",
      }}
      elevation={0}
    >
      <Grid container justifyContent="center">
        <Grid item sm={11} md={12} lg={12} xl={12}>
          <Cases />
          <Charts />
          <Users />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomeDisplay;
