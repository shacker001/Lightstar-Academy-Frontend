import React, { useState } from "react";
import axios from "axios"; // Import Axios for API requests

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    motivation: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.experience || !formData.motivation) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/applications/", formData);
      setSubmitted(true);
    } catch (error) {
      alert("Submission Failed. Please try again!");
    }
  };

  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      {/* Application Process */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-8">How to Apply</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8 text-lg">
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">1️⃣ Apply Online</h3>
            <p>Fill out a short form and tell us about yourself.</p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">2️⃣ Interview</h3>
            <p>Attend a virtual interview to discuss your role.</p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">3️⃣ Background Check</h3>
            <p>We ensure child safety through a quick screening.</p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">4️⃣ Training</h3>
            <p>Receive an orientation and teaching guidelines.</p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-2xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Form</h3>

        {submitted ? (
          <p className="text-green-600 text-lg font-semibold">✅ Your application has been submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="border p-2 w-full mb-3"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 w-full mb-3"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border p-2 w-full mb-3"
              onChange={handleChange}
              required
            />
            <textarea
              name="experience"
              placeholder="Describe your experience (if any)"
              className="border p-2 w-full mb-3"
              onChange={handleChange}
              required
            ></textarea>
            <textarea
              name="motivation"
              placeholder="Why do you want to apply?"
              className="border p-2 w-full mb-3"
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Submit Application
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ApplicationForm;
