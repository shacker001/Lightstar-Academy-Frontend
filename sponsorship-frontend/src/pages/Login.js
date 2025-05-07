import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Store tokens in localStorage
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      
      alert("Login Successful!");
      window.location.href = "/"; // Redirect user
    } catch (error) {
      console.error("Login error:", error.response?.data);
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="mt-16 p-6 max-w-md mx-auto bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        placeholder="Username"
        className="border p-2 mt-3 w-full"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 mt-3 w-full"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />

      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded mt-3 w-full">
        Login
      </button>
      <Link to="/register" className="hover:underline text-center mb-4">Don't have Account? Sign up</Link>
    </div>
  );
};

export default Login;
