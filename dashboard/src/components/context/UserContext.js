// src/context/UserContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// 1. Create Context
const UserContext = createContext();

// 2. Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]); // use null instead of {} initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRes = await axios.get("http://localhost:3002/getuser", {
          withCredentials: true,
        });
        console.log(userRes);
        const userData =[
         userRes.data.username,
         userRes.data.email,
         userRes.data._id,
        ]
        setUser(userData);
      } catch (err) {
        console.error("❌ Auth error:", err);
        setUser(null); // optional: reset user on error
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // 🔴 Important: DO NOT put `user` in dependency array here

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Logout Function — this should NOT be inside the context file
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
