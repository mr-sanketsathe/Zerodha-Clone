import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";

const AuthCheck = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/dashboard`, {
          withCredentials: true,
        });
        if (res.status === 200 ||res.token) {
          setIsAuth(true);
          localStorage.setItem("token", res.token);
          
        }
      } catch (err) {
        window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
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
