import React, { useEffect, useState, useContext } from "react";
import { establishmentStyle } from "../../styles/Styles";
import axios from "axios";
import Container from "@mui/material/Container";
import CurrentUser from "../../auth/CurrentUser";
import EstablishmentTable from "../tables/EstablishmentTable";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const Establishments = () => {
  //setting headers value from context
  const { headers } = useContext(CurrentUser);

  //setting classes for styling
  const classes = establishmentStyle();

  //setting states for select value and rows for table
  const [id, setId] = useState("");
  const [visitors, setVisitors] = useState([]);

  //setting columns for the table
  const columns = [
    { id: 1, label: "First Name" },
    { id: 2, label: "Middle Name" },
    { id: 3, label: "Last Name" },
    { id: 4, label: "Email" },
    { id: 5, label: "Covid Status" },
    { id: 6, label: "Date Visit" },
  ];
  //handling changes on select
  const handleChange = (evt) => {
    setId(evt.target.value);
    axios({
      method: "GET",
      url: `http://localhost:3001/api/v1/get_users/${evt.target.value}`,
      headers: {
        "access-token": headers.token,
        client: headers.client,
        expiry: headers.expiry,
        uid: headers.uid,
      },
    })
      .then((res) => {
        setVisitors(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <Grid container flexDirection="column" spacing={3}>
        <Grid item lg={12}>
          <Paper sx={{ pb: 3 }}>
            <Typography
              sx={{ pt: 2, pl: 2, pb: 4, color: "#3376b5", fontWeight: "600" }}
              variant="h6"
            >
              Establishments Report
            </Typography>
            <div className={classes.selectContainer}>
              <Typography
                sx={{ pl: 2, pt: 3, pr: 2, color: "#545454" }}
                variant="body 2"
              >
                Choose establishment to display:
              </Typography>
              <FormControl sx={{ width: "40%", pr: 2 }} variant="standard">
                <InputLabel sx={{ fontSize: "0.9rem" }} id="establishments">
                  Choose establishments
                </InputLabel>
                <Select
                  labelId="establishments"
                  onChange={handleChange}
                  value={id}
                >
                  <MenuItem value={1}>SM Bacoor</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper>
            <EstablishmentTable columns={columns} rows={visitors} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Establishments;
