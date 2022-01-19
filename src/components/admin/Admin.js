import React from "react";
import { adminStyle } from "../styles/Styles";
import Appbar from "./Appbar";
import Drawer from "./Drawer";

const Admin = () => {
  const adminTheme = adminStyle();
  return (
    <div className={adminTheme.root}>
      <Drawer />
      <Appbar />
    </div>
  );
};

export default Admin;
