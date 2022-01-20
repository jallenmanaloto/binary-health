import React from "react";
import { homeDisplayStyle } from "../../styles/Styles";
import Cases from "./Cases";

const HomeDisplay = () => {
  const homeStyle = homeDisplayStyle();
  return (
    <div className={homeStyle.root}>
      hello
      <Cases />
    </div>
  );
};

export default HomeDisplay;
