import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";

const AuthCheck = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get("https://zerodhabackend-zyfe.onrender.com/dashboard", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setIsAuth(true);
          
        }
      } catch (err) {
        window.location.href = "http://localhost:3000/login";
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, []);

  if (loading) return <p>Loading...</p>;

  return isAuth ? <Home /> : null;
};

export default AuthCheck;
