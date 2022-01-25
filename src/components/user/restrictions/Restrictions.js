import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Restrictions = () => {
  return (
    <Container sx={{ mt: { xs: 2, sm: 6, md: 6, lg: 6 } }} maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper sx={{ height: "90vh" }}></Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Restrictions;
