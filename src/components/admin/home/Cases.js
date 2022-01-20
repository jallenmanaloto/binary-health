import React, { useEffect, useState } from "react";
import { caseStyle } from "../../styles/Styles";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Cases = () => {
  const classes = caseStyle();
  const [headlines, setHeadlines] = useState([
    {
      name: "Total Cases",
      data: "",
    },
    {
      name: "Active Cases",
      data: "",
    },
    {
      name: "Recoveries",
      data: "",
    },
    {
      name: "Deaths",
      data: "",
    },
  ]);
  const [reportDate, setReportDate] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://covid19-api-philippines.herokuapp.com/api/summary",
    })
      .then((res) => {
        setHeadlines([
          {
            name: "Total Cases",
            data: res.data.data.total,
          },
          {
            name: "Active Cases",
            data: res.data.data.active_cases,
          },
          {
            name: "Recoveries",
            data: res.data.data.recoveries,
          },
          {
            name: "Deaths",
            data: res.data.data.deaths,
          },
        ]);
        setReportDate(res.data.last_update.slice(0, 9));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const casesReport = headlines.map((item) => {
    return (
      <Grid item key={item.name} xs={12} sm={6} md={3} lg={3}>
        <Paper className={classes.casePaper}>
          <Typography className={classes.caseTitle} variant="h5" component="h3">
            {item.name}
          </Typography>
          <Typography
            className={classes.caseData}
            sx={{ marginTop: "0.75rem" }}
            variant="h4"
            conponent="h4"
          >
            {numberWithCommas(item.data)}
          </Typography>
          <Typography
            sx={{ fontSize: "1rem", marginTop: "0.45rem" }}
            variant="h6"
            className={classes.caseDate}
          >
            {`as of ${reportDate}`}
          </Typography>
        </Paper>
      </Grid>
    );
  });

  return (
    <>
      <Container sx={{ display: "flex" }}>
        <Grid container spacing={2}>
          {casesReport}
        </Grid>
      </Container>
    </>
  );
};

export default Cases;
