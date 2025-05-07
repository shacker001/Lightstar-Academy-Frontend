import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SponsorshipCheckout = () => {
  const { id } = useParams();
  const [child, setChild] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
    amount: 20,
    duration: "12 months",
  });

  useEffect(() => {
    fetch(`http://localhost:8000/api/children/${id}/`)
      .then((res) => res.json())
      .then((data) => setChild(data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      full_name: form.fullName,
      email: form.email,
      message: form.message,
      child: child.id,  // assuming your model links to child
    };
  
    try {
      const res = await fetch("http://localhost:8000/api/sponsor/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (res.ok) {
        // Redirect to confirmation page
        window.location.href = "/sponsorship/confirmation";
      } else {
        const err = await res.json();
        console.error("Failed to submit:", err);
        alert("Failed to submit sponsorship form. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };
  

  if (!child) return <div className="text-center py-20">Loading child info...</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Sponsor {child.name}
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Child Summary */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={child.image}
            alt={child.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">{child.name}</h2>
            <p className="text-gray-600">{child.age} years old</p>
            <p className="text-sm text-gray-500 mt-2">Indangalasia, Kenya</p>
          </div>
        </div>

        {/* Sponsorship Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-6 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={form.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Optional Message
            </label>
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Summary */}
          <div className="border-t pt-4">
            <p className="text-gray-700">
              <strong>Monthly Donation:</strong> €{form.amount}
            </p>
            <p className="text-gray-700">
              <strong>Commitment:</strong> {form.duration}
            </p>
          </div>

          {/* Payment Options */}
          <div className="pt-4">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Payment Method
            </label>
            <select
              name="payment"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              disabled
            >
              <option>Mpesa (Coming Soon)</option>
              <option>Stripe (Coming Soon)</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-600 transition w-full"
          >
            Confirm Sponsorship
          </button>
        </form>
      </div>
    </div>
  );
};

export default SponsorshipCheckout;
