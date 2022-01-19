import React from "react";
import { adminStyle } from "../styles/Styles";
import Drawer from "./Drawer";

const Admin = () => {
  const adminTheme = adminStyle();
  return (
    <div className={adminTheme.root}>
      <Drawer />
    </div>
  );
};

export default Admin;
