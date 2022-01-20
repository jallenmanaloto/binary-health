import React from "react";
import { homeDisplayStyle } from "../../styles/Styles";
import Cases from "./Cases";
import Container from "@mui/material/Container";
import Charts from "./Charts";
import Grid from "@mui/material/Grid";

const HomeDisplay = () => {
  const homeStyle = homeDisplayStyle();
  return (
    <Container
      sx={{
        position: "absolute",
        top: "10vh",
        right: "0",
        bottom: "0",
        left: { xs: "0", sm: "0", md: "30vw", lg: "30vw", xl: "13vw" },
      }}
      className={homeStyle.root}
    >
      <Grid container>
        <Grid item sm={11} md={6} lg={12}>
          <Cases />
          <Charts />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeDisplay;
