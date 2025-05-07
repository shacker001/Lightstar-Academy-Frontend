import React from "react";
import { Link } from "react-router-dom";

const SponsorshipConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-xl">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg">
          Your sponsorship request has been received. We’ll contact you shortly to finalize the process.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipConfirmation;
