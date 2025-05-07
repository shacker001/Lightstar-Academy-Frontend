import React from "react";
import { Link } from "react-router-dom";

const SupportOnce = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white text-center py-16 px-6 w-full">
        <h1 className="text-4xl font-bold">Give a One-Time Gift</h1>
        <p className="text-lg mt-3">Your support changes lives. Make a difference today.</p>
      </div>

      {/* Donation Content */}
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Where Your Donation Helps</h2>
        <p className="text-gray-700 mb-6">
          Your one-time gift helps improve the lives of children by providing support for:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
          <div className="p-4 bg-gray-100 rounded-lg">
            <span className="text-blue-600 text-xl font-bold">🏫</span>
            <p className="text-sm mt-2">Building Maintenance</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <span className="text-green-600 text-xl font-bold">📚</span>
            <p className="text-sm mt-2">Teaching Supplies</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <span className="text-yellow-600 text-xl font-bold">🍲</span>
            <p className="text-sm mt-2">Food & Nutrition</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <span className="text-red-600 text-xl font-bold">⚽</span>
            <p className="text-sm mt-2">School Activities</p>
          </div>
        </div>

        <p className="text-gray-700 text-center mb-6">
          Every donation, big or small, makes a lasting impact. Thank you for your generosity!
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/payments"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportOnce;
