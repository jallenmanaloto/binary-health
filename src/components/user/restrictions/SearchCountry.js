import React, { useState, useContext } from "react";
import axios from "axios";
import countries from "./Countries";
import CountrySearch from "../context/CountrySearch";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const SearchCountry = () => {
  //setting contexts for getting info on restrictions
  const { countryRestriction, setCountryRestriction } =
    useContext(CountrySearch);

  //setting state for value of search input
  const [searchTerm, setSearchTerm] = useState("");

  //handling value of search input
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedCountry = countries
    .filter((country) => {
      if (searchTerm === "") {
        return;
      } else if (
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.code.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return country.name;
      }
      return false;
    })
    .map((country) => {
      const handleGetCountry = () => {
        // axios({
        //   method: "GET",
        //   url: `https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=${country.code}`,
        //   headers: {
        //     Authorization: `Bearer t6G3L9dUGX8Mn2RyXgvLAqLMbSO8`,
        //   },
        // })
        //   .then((res) => {
        //     setCountryRestriction({
        //       countryName: res.data.data.area.name,
        //       summary: res.data.data.summary,
        //       riskLevel: res.data.data.diseaseRiskLevel,
        //       diseaseCases: res.data.data.diseaseCases.confirmed,
        //       declarationDocumentsDate:
        //         res.data.data.areaAccessRestriction.declarationDocuments.date,
        //       declarationDocumentsText:
        //         res.data.data.areaAccessRestriction.declarationDocuments.text,
        //       travelDocumentationLink:
        //         res.data.data.areaAccessRestriction.declarationDocuments
        //           .travelDocumentationLink,
        //       entryRestrictionDate:
        //         res.data.data.areaAccessRestriction.entry.date,
        //       entryRestrictionText:
        //         res.data.data.areaAccessRestriction.entry.text,
        //       diseaseTestingDate:
        //         res.data.data.areaAccessRestriction.diseaseTesting.date,
        //       diseaseTestingText:
        //         res.data.data.areaAccessRestriction.diseaseTesting.text,
        //       tracingApplicationDate:
        //         res.data.data.areaAccessRestriction.tracingApplication.date,
        //       tracingApplicationText:
        //         res.data.data.areaAccessRestriction.tracingApplication.text,
        //       quarantineModalityDate:
        //         res.data.data.areaAccessRestriction.quarantineModality.date,
        //       quarantineModalityText:
        //         res.data.data.areaAccessRestriction.quarantineModality.text,
        //     });
        //   })
        //   .catch((err) => console.log(err));
      };
      return (
        <MenuItem key={country.name} onClick={handleGetCountry}>
          {country.name}
        </MenuItem>
      );
    });

  console.log(countryRestriction);

  return (
    <Grid sx={{ height: "12em" }} container justifyContent="center">
      <Grid
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        item
        xs={10}
        lg={10}
      >
        <TextField
          type="text"
          fullWidth
          placeholder="Search country"
          InputProps={{
            autoComplete: "off",
            endAdornment: (
              <InputAdornment position="end">
                <SearchRoundedIcon sx={{ color: "gray", cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
          onChange={handleSearchTerm}
        />
        <Paper
          sx={{
            minHeight: 0,
            maxHeight: "11em",
            width: "100%",
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {searchedCountry}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchCountry;
