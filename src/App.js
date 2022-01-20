import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import CurrentUser from "./components/auth/CurrentUser";
import Registration from "./components/registration/Registration";
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

  return (
    <div className="App">
      <CurrentUser.Provider
        value={{ currentUser, setCurrentUser, headers, setHeaders }}
      >
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="sign-in" element={<UserLogin />} />
          <Route path="register" element={<Registration />} />
        </Routes>
      </CurrentUser.Provider>
    </div>
  );
}

export default App;
