import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tables from "./Table";

const Requests = () => {
  const columns = [
    { id: 1, label: "Request Type", maxWidth: 140 },
    { id: 2, label: "Request", maxWidth: 150 },
    { id: 3, label: "Request By", maxWidth: 200 },
    { id: 4, label: "Email", maxWidth: 200 },
    { id: 5, label: "Request Date", maxWidth: 150 },
  ];
  const [rows, setRows] = useState([]);

  //Send request to get all requests made by users
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/api/v1/requests",
    })
      .then((res) => {
        setRows(res.data.requests);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <Container
      maxWidth="lg"
      sx={{
        position: "absolute",
        top: "10vh",
        right: "0",
        bottom: "0",
        left: { xs: "0", sm: "0", md: "30vw", lg: "30vw", xl: "13vw" },
      }}
    >
      <Grid container>
        <Grid item sm={10} lg={12}>
          <Tables columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Requests;
