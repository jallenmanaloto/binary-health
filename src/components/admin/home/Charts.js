import React, { useEffect, useState } from "react";
import axios from "axios";
import { chartsStyle } from "../../styles/Styles";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Charts = () => {
  const classes = chartsStyle();
  const theme = useTheme();
  const [casesData, setCasesData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://covid19-api-philippines.herokuapp.com/api/timeline",
    })
      .then((res) => {
        setCasesData(res.data.data.reverse().slice(0, 30));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(casesData);
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper
            sx={{
              pt: 2,
              pr: 2,
              pb: 5,
              pl: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Typography
              sx={{ mb: 2 }}
              variant="h5"
              className={classes.chartTitle}
            >
              Cases
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={casesData}
                margin={{ top: 16, right: 16, bottom: 0, left: 8 }}
              >
                <Line
                  type="monotone"
                  dataKey="cases"
                  stroke={theme.palette.primary.main}
                  dot={false}
                />
                <CartesianGrid stroke="lightgray" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Charts;
