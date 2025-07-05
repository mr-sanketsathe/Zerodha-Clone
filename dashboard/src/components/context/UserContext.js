// src/context/UserContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRes = await axios.get("http://localhost:3002/getuser", {
          withCredentials: true,
        });
       setUser(userRes.data.username);
      } catch (err) {
        console.error("❌ Auth error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
export default async function Logout(){
   try {
        const userRes = await axios.get("http://localhost:3002/logout", {
          withCredentials: true,
        });
        window.location.href = "http://localhost:3000/";
        console.log(userRes);
      }catch(err){
        console.log(err);
      }
}
export const useUser = () => useContext(UserContext);

