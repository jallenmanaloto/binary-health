import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import { cellStyle } from "../../styles/Styles";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Users = () => {
  const classes = cellStyle();
  const [pageSize, setPageSize] = useState(8);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3001/api/v1/users",
    })
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      field: "email",
      headerName: "Email",
      width: 220,
      headerAlign: "center",
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 210,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "middleName",
      headerName: "Middle Name",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "covidStatus",
      headerName: "Covid Status",
      width: 250,
      headerAlign: "center",
      align: "center",
    },
  ];

  const rows = users.map((user) => {
    return {
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      middleName: user.middle_name,
      lastName: user.last_name,
      covidStatus: user.covid_status,
    };
  });
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8 }}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column", height: 640 }}
          >
            <Typography sx={{ pb: 3, color: "#3376b5" }} variant="h5">
              Users
            </Typography>
            <DataGrid
              className={classes.root}
              sx={{ color: "#545454", outline: "none" }}
              columns={columns}
              rows={rows}
              pageSize={pageSize}
              enableCellSelect={false}
              pagination
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Users;
