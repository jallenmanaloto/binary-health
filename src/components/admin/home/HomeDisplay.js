import React from "react";
import { homeDisplayStyle } from "../../styles/Styles";

const HomeDisplay = () => {
  const homeStyle = homeDisplayStyle();
  return <div className={homeStyle.root}>hello</div>;
};

export default HomeDisplay;
