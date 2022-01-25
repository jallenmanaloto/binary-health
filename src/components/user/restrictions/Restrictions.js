import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Restrictions = () => {
  return (
    <Container sx={{ backgroundColor: "red" }} maxWidth="lg">
      <Grid container>
        <Grid item lg={12}>
          <Paper sx={{ mt: 5 }}>hello</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Restrictions;
