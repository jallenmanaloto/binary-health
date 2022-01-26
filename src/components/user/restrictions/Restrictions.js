import React, { useState, useContext } from "react";
import CountrySearch from "../context/CountrySearch";
import SearchCountry from "./SearchCountry";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Restrictions = () => {
  //setting context for info on searched country
  const [countryRestriction, setCountryRestriction] = useState({
    //summary: , res.data.data.summary - for the summary of country's restrictions
    //riskLevel: , //res.data.data.diseaseRiskLevel - for the level of risk e.g 'extreme'
    //diseaseCases: res.data.data.diseaseCases.confirmed - for the number of confirmed cases
    //declarationDocuments: res.data.areaAccessRestriction.declarationDocuments - for the requirements for entering the country
    //travelDocumentationLink: res.data.areaAccessRestriction.declarationDocuments.travelDocumentationLink - for the link on documents required to enter the country
    //entryRestrictionDate: res.data.areaAccessRestriction.entry.date - date for the implementation of entry restriction
    //entryRestrictionText: res.data.areaAccessRestriction.entry.text - statement for the restriction on entry to country
    //diseaseTestingDate: res.data.areaAccessRestriction.diseaseTesting.date - date for the implementation of testing requirements
    //diseaseTestingText: res.data.areaAccessRestriction.diseaseTesting.text - requirements for entering the country (Additional)
    //tracingApplicationDate: res.data.areaAccessRestriction.tracingApplication.date - date for implementation on tracing
    //tracingApplicationText: res.data.areaAccessRestriction.tracingApplication.text - statement for tracing application of country
    //quarantineModalityDate: res.data.areaAccessRestriction.quarantineModality.date - date for implementation on quarantine requirement of country
    //quarantineModalityText:  res.data.areaAccessRestriction.quarantineModality.text - statement for quarantine of inbound travellers from specified country

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
              <Grid item>
                <div
                  dangerouslySetInnerHTML={{
                    __html: countryRestriction.entryRestrictionText,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </CountrySearch.Provider>
  );
};

export default Restrictions;
