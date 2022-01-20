import React from "react";
import { homeDisplayStyle } from "../../styles/Styles";
import Cases from "./Cases";
import Charts from "./Charts";

const HomeDisplay = () => {
  const homeStyle = homeDisplayStyle();
  return (
    <div className={homeStyle.root}>
      <Cases />
      <Charts />
    </div>
  );
};

export default HomeDisplay;
