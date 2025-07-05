import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AuthCheck from "./components/AuthCheck";
import { UserProvider } from "./components/context/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
       <UserProvider>
      <Routes>
        <Route path="/*" element={<AuthCheck />} />
      </Routes>
     </UserProvider>
    </BrowserRouter>

);