import { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import CurrentUser from "./components/auth/CurrentUser";
import Registration from "./components/registration/Registration";
import User from "./components/user/User";
import UserLogin from "./components/login/UserLogin";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    covid_status: "",
    role: "",
  });

  const [headers, setHeaders] = useState({
    token: "",
    client: "",
    expiry: "",
    uid: "",
  });
  useEffect(() => {
    localStorage.getItem("userAuth")
      ? setHeaders(JSON.parse(localStorage.getItem("userAuth")))
      : setHeaders(JSON.parse(sessionStorage.getItem("userAuth")));
  }, []);

  return (
    <div className="App">
      <CurrentUser.Provider
        value={{ currentUser, setCurrentUser, headers, setHeaders }}
      >
        {/* <Routes>
          {headers.client !== "" ? (
            <Route path="admin" element={<Admin />} />
          ) : (
            <Route path="login" element={<UserLogin />} />
          )}
          <Route path="register" element={<Registration />} />
          <Route path="logout" element={<UserLogin />} />
        </Routes> */}
        <User />
      </CurrentUser.Provider>
    </div>
  );
}

export default App;
