import { useState } from "react";
import UserLogin from "./components/login/UserLogin";
import CurrentUser from "./components/auth/CurrentUser";

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
        <UserLogin />
      </CurrentUser.Provider>
    </div>
  );
}

export default App;
