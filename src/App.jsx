import React from "react";
import Header from "./compoenet/header/page";
import UserContextProvider from "./context/UserContextProvider";
import SignIn from "./compoenet/auth/SignIn";
import SIgnUp from "./compoenet/auth/SIgnUp";
import AuthDetails from "./compoenet/auth/AuthDetails";
import HomePage from "./compoenet/homepage/page";
import Routers from "./routes";
import Routersz from "./routes";

function App() {
  return (
    <UserContextProvider>
    <Routersz />
    </UserContextProvider>
  );
}

export default App;
