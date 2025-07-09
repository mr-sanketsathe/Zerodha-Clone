import React, { useState } from "react";
import {  Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://zerodhabackend-zyfe.onrender.com/login",
        { email, password },
        { withCredentials: true }
      );

      if (data.success) {
        toast.success("Login successful!");
        setTimeout(() => {
         window.location.href = process.env.REACT_APP_ORIGIN;
        }, 1500);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Login failed. Please try again.");
    }

    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center text-primary mb-4">Login to Zerodha</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <small>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </small>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default LoginPage;
