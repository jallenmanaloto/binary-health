import React, { useState, useEffect, useContext } from "react";
import CurrentUser from "../../auth/CurrentUser";
import Grid from "@mui/material/Grid";
import MyActivitiesTable from "../tables/MyActivitiesTable";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";

const Activities = () => {
  // defining values of headers from context
  const { currentUser, headers } = useContext(CurrentUser);

  //setting state for table row
  const [userActivities, setUserActivities] = useState([]);

  //defining columns for the table
  const columns = [
    { id: 1, label: "Place Visit" },
    { id: 2, label: "Date Visit" },
    { id: 3, label: "Time Visit" },
  ];

  //getting data of all user's visit
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/v1/${currentUser.id}/activities`,
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => {
        setUserActivities(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Paper
      sx={{
        height: "90vh",
        mt: { xs: 0, sm: -1, md: -1, lg: 0 },
        overflowY: "auto",
      }}
    >
      <Grid container justifyContent="center">
        <Grid
          item
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
            My Activities
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MyActivitiesTable columns={columns} rows={userActivities} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Activities;
