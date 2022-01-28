import React from "react";
import NotFoundImage from "../../images/NotFoundImage.svg";
import { NotFoundStyle } from "../styles/Styles";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const NotFound = () => {
  const classes = NotFoundStyle();
  return (
    <div className={classes.root}>
      <img className={classes.image} src={NotFoundImage} alt="NotFound" />
      <Link
        href="login"
        sx={{
          position: "absolute",
          bottom: 100,
          cursor: "pointer",
          fontSize: "1.5em",
        }}
        underline="hover"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
