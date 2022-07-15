import React from "react";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";
import { useState} from "react";
import Login from "./Login";

function App() {
  const [token,changeToken] = useState(window.localStorage.getItem("token"));

  const login = ()=> {
    window.localStorage.setItem("token", token);
    changeToken(token);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    changeToken("");
  };
  const client = new ApiClient(
    token,
    logout
  );

  return (
    <>
      {token ? (
        <Dashboard client={client} />
      ) : (
        <Login loggedIn={(token) => login(token)} client={client} />
      )}
    </>
  );
}

export default App;
