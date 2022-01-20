import React from "react";
import { adminStyle } from "../styles/Styles";
import Appbar from "./Appbar";
import Drawer from "./Drawer";
import HomeDisplay from "./home/HomeDisplay";

const Admin = () => {
  const adminTheme = adminStyle();
  return (
    <div className={adminTheme.root}>
      <Drawer />
      <Appbar />
      <HomeDisplay />
    </div>
  );
};

export default Admin;
