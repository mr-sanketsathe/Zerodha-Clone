import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [refresh,setRefresh]=useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRes = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getuser`, {
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
   const logoutRes= await axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
      withCredentials: true,
    });
    console.log(logoutRes);
    window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`
  } catch (err) {
    console.error("Logout error:", err);
  }
};

export const useUser = () => useContext(UserContext);
export default logout;
