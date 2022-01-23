import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CurrentUser from "../../auth/CurrentUser";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RequestsTable from "../tables/RequestsTable";

const Requests = () => {
  // defining values of headers from context
  const { headers } = useContext(CurrentUser);
  // setting state for table row
  const [userRequest, setUserRequest] = useState([]);

  //defining columns for the table
  const columns = [
    { id: 1, label: "Request Type" },
    { id: 2, label: "Request Name" },
    { id: 3, label: "Date" },
    { id: 4, label: "Status" },
  ];

  //Fetching data for user's request
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/api/v1/users/user_requests/3",
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => {
        setUserRequest(res.data.requests);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(userRequest);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} lg={12}>
          <RequestsTable columns={columns} rows={userRequest} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Requests;
