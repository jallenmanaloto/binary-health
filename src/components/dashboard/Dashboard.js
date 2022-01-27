import React, { useContext, useEffect } from "react";
import CurrentUser from "../auth/CurrentUser";
import Admin from "../admin/Admin";
import User from "../user/User";

const Dashboard = () => {
  const { currentUser, setCurrentUser, setHeaders } = useContext(CurrentUser);
  useEffect(() => {
    localStorage.getItem("userAuth")
      ? setHeaders(JSON.parse(localStorage.getItem("userAuth")))
      : setHeaders(JSON.parse(sessionStorage.getItem("userAuth")));

    localStorage.getItem("userDetails")
      ? setCurrentUser(JSON.parse(localStorage.getItem("userDetails")))
      : setCurrentUser(JSON.parse(sessionStorage.getItem("userDetails")));
  }, []);
  return (
    <div>
      {currentUser.role === "admin" ? <Admin /> : null}
      {currentUser.role === "health_user" ? <User /> : null}
    </div>
  );
};

export default Dashboard;
