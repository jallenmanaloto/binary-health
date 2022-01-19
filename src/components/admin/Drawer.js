import React from "react";
import { drawerStyle } from "../styles/Styles";

const Drawer = () => {
  const drawerStyles = drawerStyle();
  return <div className={drawerStyles.root}>hello</div>;
};

export default Drawer;
