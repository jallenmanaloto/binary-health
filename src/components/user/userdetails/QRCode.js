import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import QRCode from "qrcode.react";

const MyQRCode = () => {
  const qrCode = require("qrcode.react");
  return (
    <Paper sx={{ height: "90vh", mt: { xs: 0, sm: -1, md: -1, lg: 0 } }}>
      <Grid container justifyContent="center">
        <Grid
          item
          sx={{ backgroundColor: "#3376b5" }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Typography
            sx={{
              p: 2,
              textAlign: "left",
              color: "whitesmoke",
              fontWeight: 400,
            }}
            variant="h5"
          >
            My QR Code
          </Typography>
        </Grid>
        <Grid item>
          <qrCode value="https://www.google.com" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MyQRCode;
