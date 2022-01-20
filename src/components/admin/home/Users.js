import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Users = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column", height: 540 }}
          >
            <Typography variant="h5">Users</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Users;
