import React, { useContext } from "react";
import CountrySearch from "../context/CountrySearch";
import { countryRestrictionStyle } from "../../styles/Styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CountryRestriction = () => {
  //setting style layout
  const classes = countryRestrictionStyle();

  //setting context
  const { countryRestriction } = useContext(CountrySearch);

  return (
    <Grid
      sx={{ height: "65vh", overflow: "auto" }}
      container
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
    >
      <Grid className={classes.grid} item xs={10} lg={10}>
        <div className={classes.container}>
          {countryRestriction.details ? (
            <Typography variant="body1" sx={{ fontWeight: 600, pr: 1 }}>
              Country:
            </Typography>
          ) : null}
          <Typography>{countryRestriction.countryName}</Typography>
        </div>
      </Grid>
      <Grid className={classes.grid} item xs={10} lg={10}>
        <div className={classes.container}>
          {countryRestriction.details ? (
            <Typography variant="body1" sx={{ fontWeight: 600, pr: 1 }}>
              Risk Level:
            </Typography>
          ) : null}
          <Typography>{countryRestriction.riskLevel}</Typography>
        </div>
      </Grid>
      <Grid className={classes.grid} item xs={10} lg={10}>
        <div className={classes.container}>
          {countryRestriction.details ? (
            <Typography variant="body1" sx={{ fontWeight: 600, pr: 1 }}>
              Confirmed Cases:
            </Typography>
          ) : null}
          <Typography>{countryRestriction.dieaseCases}</Typography>
        </div>
      </Grid>
      <Grid className={classes.grid} item xs={10} lg={10}>
        <div className={classes.statements}>
          {countryRestriction.details ? (
            <Typography variant="body1" sx={{ fontWeight: 600, pr: 1 }}>
              Summary:
            </Typography>
          ) : null}
          <div
            dangerouslySetInnerHTML={{
              __html: countryRestriction.summary,
            }}
          />
        </div>
      </Grid>

      <Grid className={classes.grid} item xs={10} lg={10}>
        <div className={classes.statements}>
          {countryRestriction.details ? (
            <Typography variant="body1" sx={{ fontWeight: 600, pr: 1 }}>
              Documents:
            </Typography>
          ) : null}
          <div
            dangerouslySetInnerHTML={{
              __html: countryRestriction.declarationDocumentsText,
            }}
          />
        </div>
      </Grid>
      <Grid className={classes.grid} item xs={10} lg={10}>
        <div className={classes.statements}>
          {countryRestriction.details ? (
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, pr: 1, width: "40%" }}
            >
              Entry Restriction:
            </Typography>
          ) : null}
          <div
            dangerouslySetInnerHTML={{
              __html: countryRestriction.entryRestrictionText,
            }}
          />
        </div>
      </Grid>
      <Grid className={classes.grid} item xs={10} lg={10}>
        <div className={classes.statements}>
          <div
            dangerouslySetInnerHTML={{
              __html: countryRestriction.diseaseTestingText,
            }}
          />
        </div>
      </Grid>
      <Grid className={classes.grid} item xs={10} lg={10}>
        <div className={classes.statements}>
          {countryRestriction.details ? (
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, pr: 1, width: "40%" }}
            >
              Tracing application:
            </Typography>
          ) : null}
          <div
            dangerouslySetInnerHTML={{
              __html: countryRestriction.tracingApplicationText,
            }}
          />
        </div>
      </Grid>
      <Grid className={classes.grid} item xs={10} lg={10}>
        <div className={classes.statements}>
          {countryRestriction.details ? (
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, pr: 1, width: "40%" }}
            >
              Quarantine Regulation:
            </Typography>
          ) : null}
          <div
            dangerouslySetInnerHTML={{
              __html: countryRestriction.quarantineModalityText,
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default CountryRestriction;
