import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import CasesTable from "../tables/CasesTable";
import CurrentUser from "../../auth/CurrentUser";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Cases = () => {
  //setting headers value from context
  const { headers } = useContext(CurrentUser);

  //setting state for response
  const [positiveUsers, setPositiveUsers] = useState([]);

  //defining columns for table
  const columns = [
    { id: 1, label: "First Name" },
    { id: 2, label: "Middle Name" },
    { id: 3, label: "Last Name" },
    { id: 4, label: "Email" },
    { id: 5, label: "Covid Status" },
  ];

  //sending request to get all users with positive status
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://health-users-api.herokuapp.com/api/v1/users/all_positive",
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => {
        setPositiveUsers(res.data.positive);
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
      spacing={2}
    >
      <Grid container>
        <Grid item lg={12}>
          <Paper>
            <Typography sx={{ p: 2, color: "#3376b5" }} variant="h5">
              Positive Cases
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <CasesTable columns={columns} rows={positiveUsers} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cases;
