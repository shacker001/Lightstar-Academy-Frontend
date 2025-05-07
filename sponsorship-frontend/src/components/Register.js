import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", user);
      alert("Registration Successful! You can now log in.");
      window.location.href = "/login"; // Redirect user
    } catch (error) {
      alert("Registration Failed!");
    }
  };

  return (
    <div className="p-6 mt-16 max-w-md mx-auto bg-white shadow-md rounded"> {/* mt-16 ensures content is below navbar */}
      <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="border p-2 mt-3 w-full"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border p-2 mt-3 w-full"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="border p-2 mt-3 w-full"
        onChange={handleChange}
      />
      <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded mt-3 w-full">
        Register
      </button>
      <Link to="/login" className="hover:underline text-center mb-4 px-14 py-2">Already have Account? Login</Link>
    </div>
  );
};

export default Register;
