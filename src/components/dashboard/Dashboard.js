import React, { useContext } from "react";
import CurrentUser from "../auth/CurrentUser";
import Admin from "../admin/Admin";
import User from "../user/User";

const Dashboard = () => {
  const { currentUser } = useContext(CurrentUser);
  return (
    <div>
      {currentUser.role === "admin" ? <Admin /> : null}
      {currentUser.role === "health_user" ? <User /> : null}
    </div>
  );
};

export default Dashboard;
