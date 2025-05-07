import React from "react";
import { Link } from "react-router-dom";
import donateImage from "../assets/donate-banner.jpg"

const Donate = () => {
  return (
    <div className="bg-gray-100 flex-col items-center py-12 text-gray-800">
      {/* Hero Section */}
     <section
        className="relative w-full bg-cover bg-center h-[450px] flex justify-center items-center text-white px-6" 
        style={{ backgroundImage: `url(${donateImage})`, position: "relative", zIndex: 0 }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-extrabold mb-4">Make an Impact Today</h1>
          <p className="text-lg mb-6">Your support provides education, meals, and hope for children at Lightstar Academy.</p>
          <a href="#donation-options" className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg text-lg font-semibold transition">Donate Now</a>
        </div>
     </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <p className="text-lg text-gray-600 mb-6">
          Your generosity changes lives! 100% of your donation supports children at <strong>Lightstar Academy</strong> by funding <strong>education, meals, school supplies, and better facilities</strong>.
        </p>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Choose How You Want to Give</h2>
      </section>

      {/* Donation Options */}
      <section id="donation-options" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {/* One-Time Donation */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">💳 One-Time Donation</h3>
              <p className="text-gray-700 mb-4">Support Lightstar Academy with a one-time gift.</p>
              <a href="/donate/one-time" className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Donate Once</a>
            </div>

            {/* Monthly Donation */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">🔁 Monthly Support</h3>
              <p className="text-gray-700 mb-4">Commit to helping children regularly with a monthly gift.</p>
              <a href="/donate/monthly" className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Give Monthly</a>
            </div>

            {/* Custom Donation */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">💛 Custom Giving</h3>
              <p className="text-gray-700 mb-4">Choose an amount and impact an area that matters most to you.</p>
              <a href="/donate/custom" className="bg-yellow-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">Give Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8">Where Your Donation Goes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">📚 Education</h3>
              <p className="text-gray-600">Funds school fees, books, and teacher salaries.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">🍽️ Meals & Nutrition</h3>
              <p className="text-gray-600">Ensures every child receives healthy meals daily.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">🏫 School Facilities</h3>
              <p className="text-gray-600">Helps maintain classrooms, desks, and learning materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Payment Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-8">Secure Payment Options</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-lg">
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">💳 Credit/Debit Card</h3>
            <p>Fast and secure payment processing.</p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">📱 Mobile Money</h3>
            <p>M-Pesa and other mobile payment options.</p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">🏦 Bank Transfer</h3>
            <p>Send donations via direct bank deposits.</p>
          </div>
        </div>

        {/* <a href="/payments" className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">Proceed to Payment</a> */}
        <Link to="/donations" className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">Proceed to Payment</Link>

      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Need Help?</h2>
        <p className="text-lg mb-4">Reach out to us for any donation inquiries.</p>

        <p>Email: <a href="mailto:admin@lightstaracademy.org" className="text-blue-600 hover:underline">admin@lightstaracademy.org</a></p>
        <p>Phone: +254 712 345 678</p>
      </section>
    </div>
  );
};

export default Donate;
