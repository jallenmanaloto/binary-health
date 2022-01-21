import React, { useState } from "react";
import { adminStyle } from "../styles/Styles";
import AdminNavigation from "./context/AdminNavigations";
import Appbar from "./Appbar";
import Drawer from "./Drawer";
import Establishments from "./establishment/Establishments";
import HomeDisplay from "./home/HomeDisplay";
import Requests from "./request/Requests";

const Admin = () => {
  const adminTheme = adminStyle();
  const [navigation, setNavigation] = useState("home");
  return (
    <div className={adminTheme.root}>
      <AdminNavigation.Provider value={{ navigation, setNavigation }}>
        <Drawer />
        <Appbar />
        {navigation === "home" ? <HomeDisplay /> : null}
        {navigation === "request" ? <Requests /> : null}
        {navigation === "establishment" ? <Establishments /> : null}
      </AdminNavigation.Provider>
    </div>
  );
};

export default Admin;
