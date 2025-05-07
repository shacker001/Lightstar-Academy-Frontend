import React, { useState } from "react";
import axios from "axios";

const Donations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: 20,
    method: "card",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.amount < 20) {
      alert("Minimum donation is €20.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/donate/", formData);
      if (response.status === 200) {
        setSubmitted(true);
        alert("Payment Initiated!");
      }
    } catch (error) {
      alert("Payment Failed! Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Donate to Support</h2>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border p-2 w-full mb-3"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount (€)"
          className="border p-2 w-full mb-3"
          min="20"
          onChange={handleChange}
          required
        />

        {/* Payment Method Selection */}
        <select name="method" className="border p-2 w-full mb-3" onChange={handleChange}>
          <option value="card">💳 Credit/Debit Card</option>
          <option value="mpesa">📱 M-Pesa</option>
          <option value="bank">🏦 Bank Transfer</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
          Donate Now
        </button>
      </form>

      {submitted && <p className="text-green-600 mt-4">Thank you for your support!</p>}
    </div>
  );
};

export default Donations;
