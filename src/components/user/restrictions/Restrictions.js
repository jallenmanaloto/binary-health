import React, { useState, useContext } from "react";
import CountryRestriction from "./CountryRestriction";
import CountrySearch from "../context/CountrySearch";
import SearchCountry from "./SearchCountry";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Restrictions = () => {
  //setting context for info on searched country
  const [countryRestriction, setCountryRestriction] = useState({
    details: false,
    countryName: "",
    summary: "",
    riskLevel: "",
    diseaseCases: "",
    declarationDocuments: "",
    travelDocumentationLink: "",
    entryRestrictionDate: "",
    entryRestrictionText: "",
    diseaseTestingDate: "",
    diseaseTestingText: "",
    tracingApplicationDate: "",
    tracingApplicationText: "",
    quarantineModalityDate: "",
    quarantineModalityText: "",
  });

  return (
    <CountrySearch.Provider
      value={{ countryRestriction, setCountryRestriction }}
    >
      <Container sx={{ mt: { xs: 2, sm: 6, md: 6, lg: 6 } }} maxWidth="md">
        <Paper sx={{ height: "90vh" }}>
          <Grid container justifyContent="center">
            <Grid container item>
              <Grid item sx={{ backgroundColor: "#3376b5" }} xs={12} lg={12}>
                <Typography
                  sx={{
                    p: 2,
                    textAlign: "left",
                    color: "whitesmoke",
                    fontWeight: 400,
                  }}
                  variant="h5"
                >
                  Travel Restrictions
                </Typography>
              </Grid>
              <Grid item xs={12} lg={12}>
                <SearchCountry />
              </Grid>
              <Grid item xs={12} lg={12}>
                <CountryRestriction />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </CountrySearch.Provider>
  );
};

export default Restrictions;
