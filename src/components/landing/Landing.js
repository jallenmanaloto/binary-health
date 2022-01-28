import React from "react";
import { landingStyle } from "../styles/Styles";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import HeroFirst from "../../images/HeroFirst.svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import LandingBrand from "../../images/LandingBrand.svg";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Landing = () => {
  let navigate = useNavigate();
  const classes = landingStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <div className={classes.firstPage}>
          <Grid container justifyContent="space-between">
            <Grid item lg={7}>
              <img className={classes.brand} src={LandingBrand} alt="brand" />
            </Grid>
            <Grid sx={{ mt: 4 }} item lg={5}>
              <div className={classes.navContainer}>
                <div className={classes.affiliation}>
                  <Typography
                    sx={{
                      color: "#3d3d3d",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                    variant="h6"
                  >
                    Affiliations
                  </Typography>
                  <ArrowDropDownIcon />
                </div>
                <Typography
                  sx={{
                    color: "#3d3d3d",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  About
                </Typography>
                <Typography
                  sx={{
                    color: "#3d3d3d",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  Careers
                </Typography>
                <Button
                  sx={{
                    width: "7.5em",
                    height: "3.2em",
                    backgroundColor: "#3376b5",
                  }}
                  variant="contained"
                  onClick={() => navigate("login")}
                >
                  Login
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6}>
              <div className={classes.summaryContainer}>
                <Typography
                  sx={{
                    ml: 8,
                    mt: 6,
                    width: "80%",
                    color: "#3d3d3d",
                    lineHeight: "1.35em",
                    fontWeight: "bold",
                  }}
                  variant="h2"
                >
                  Experience health service like a never-ending breeze.
                </Typography>
                <Typography
                  sx={{ ml: 8, mt: 6, width: "50%", lineHeight: "2.1rem" }}
                  variant="h6"
                >
                  Health app that provides a full-range of online services to
                  ensure that each indivual are given the most quality of care.
                </Typography>
                <Button
                  sx={{
                    ml: 8,
                    mt: 8,
                    width: "12.8em",
                    height: "4.2em",
                    backgroundColor: "#3376b5",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  Learn more
                </Button>
              </div>
            </Grid>
            <Grid item lg={6}>
              <img
                className={classes.heroFirst}
                src={HeroFirst}
                alt="hero-first"
              />
            </Grid>
          </Grid>
        </div>
        <div></div>
      </Container>
    </div>
  );
};

export default Landing;
