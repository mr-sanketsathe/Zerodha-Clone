import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { UserProvider } from "./context/UserContext";
const Home = () => {
  return (
    <>
    <UserProvider>
      <TopBar />
      <Dashboard />
    </UserProvider>
    </>
  );
};

export default Home;