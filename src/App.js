import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CurrentUser from "./components/auth/CurrentUser";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/landing/Landing";
import NotFound from "./components/404/NotFound";
import Registration from "./components/registration/Registration";
import UserLogin from "./components/login/UserLogin";
import "./App.css";

function App() {
  //setting context for user's details
  const [currentUser, setCurrentUser] = useState({
    id: "",
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    covid_status: "",
    role: "",
    gender: "",
    address: "",
    birthday: "",
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
          <Route path="/" element={<Landing />} />
          <Route path="user" element={<Dashboard />} />
          {headers.client !== "" ? (
            <Route path="user" element={<Dashboard />} />
          ) : (
            <Route path="login" element={<UserLogin />} />
          )}
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="user" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUser.Provider>
    </div>
  );
}

export default App;
