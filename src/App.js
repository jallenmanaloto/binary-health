import { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import CurrentUser from "./components/auth/CurrentUser";
import Dashboard from "./components/dashboard/Dashboard";
import Registration from "./components/registration/Registration";
import User from "./components/user/User";
import UserLogin from "./components/login/UserLogin";
import "./App.css";

function App() {
  //setting context for user's details
  const [currentUser, setCurrentUser] = useState({
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    covid_status: "",
    role: "",
  });

  //setting context for auth headers
  const [headers, setHeaders] = useState({
    token: "",
    client: "",
    expiry: "",
    uid: "",
  });

  //setting context for amadeus api covid details
  const [amadeus, setAmadeus] = useState({
    token: "",
  });

  useEffect(() => {
    localStorage.getItem("userAuth")
      ? setHeaders(JSON.parse(localStorage.getItem("userAuth")))
      : setHeaders(JSON.parse(sessionStorage.getItem("userAuth")));
  }, []);

  return (
    <div className="App">
      <CurrentUser.Provider
        value={{
          amadeus,
          setAmadeus,
          currentUser,
          setCurrentUser,
          headers,
          setHeaders,
        }}
      >
        <Routes>
          <Route path="user" element={<Dashboard />} />
          {headers.client !== "" ? (
            <Route path="user" element={<Dashboard />} />
          ) : (
            <Route path="login" element={<UserLogin />} />
          )}
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<UserLogin />} />
        </Routes>
        {/* <User /> */}
      </CurrentUser.Provider>
    </div>
  );
}

export default App;
