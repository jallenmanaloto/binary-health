import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import CurrentUser from "../../auth/CurrentUser";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Tables from "../home/tables/Table";
import Typography from "@mui/material/Typography";

const Requests = () => {
  //setting headers value from context
  const { headers } = useContext(CurrentUser);

  //setting columns for table
  const columns = [
    { id: 1, label: "Request Type", maxWidth: 140 },
    { id: 2, label: "Request", maxWidth: 150 },
    { id: 3, label: "Request By", maxWidth: 200 },
    { id: 4, label: "Email", maxWidth: 200 },
    { id: 5, label: "Request Date", maxWidth: 150 },
    { id: 6, label: "Status", maxWidth: 150 },
  ];
  const [rows, setRows] = useState([]);

  //Send request to get all requests made by users
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/api/v1/requests",
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => {
        setRows(res.data.requests);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
        <Grid item sm={10} lg={12}>
          <Paper sx={{ p: 2 }}>
            <Typography sx={{ color: "#3376b5" }} variant="h5">
              Requests from users
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={10} lg={12}>
          <Tables columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Requests;
