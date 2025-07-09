// src/context/UserContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// 1. Create Context
const UserContext = createContext();

// 2. Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [refresh,setRefresh]=useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRes = await axios.get("http://localhost:3002/getuser", {
          withCredentials: true,
        });

        const userData =[
         userRes.data.username,
         userRes.data.email,
         userRes.data._id,
        ]
        setUser(userData);
        console.log("from context:",refresh);
      } catch (err) {
        console.error(" Auth error:", err);
        setUser(null); 
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [refresh]); 

  return (
    <UserContext.Provider value={{ user, loading,refresh,setRefresh}}>
      {children}
    </UserContext.Provider>
  );
};

const logout = async () => {
  try {
    await axios.get("http://localhost:3002/logout", {
      withCredentials: true,
    });
    window.location.href = "http://localhost:3000/";
  } catch (err) {
    console.error("Logout error:", err);
  }
};


// 4. Custom hook to use the context
export const useUser = () => useContext(UserContext);
export default logout;
