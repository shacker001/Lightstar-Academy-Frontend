import React from "react";
import { Link } from "react-router-dom";
import supportImage from "../assets/support.jpg"

const Sponsorship = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[450px] flex flex-col justify-center items-center text-white px-6" 
      style={{ backgroundImage: `url(${supportImage})`, position: "relative", zIndex:0 }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-extrabold mb-4">Transform a Child's Future</h1>
          <p className="text-lg mb-6">Your sponsorship provides education, food, and hope for children at Lightstar Academy.</p>
          <a href="#ways-to-help" className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg text-lg font-semibold transition">Get Involved</a>
        </div>
      </div>

      {/* Why Sponsor Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Why Sponsorship Matters</h2>
        <p className="text-lg text-gray-600 mb-6">
          Education is a right, but many children in Kenya cannot afford it. Sponsorship helps provide <strong>tuition, meals, and learning materials</strong>, ensuring every child has a brighter future.
        </p>
      </section>

      {/* Ways to Get Involved */}
      <section id="ways-to-help" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Ways to Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Sponsor a Child */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">👶 Sponsor a Child</h3>
              <p className="text-gray-700 mb-4">For just $20/month, you can give a child access to education and daily meals.</p>
              <a href="/sponsor-a-child" className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Sponsor Now</a>
            </div>

            {/* Volunteer */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">🤝 Volunteer</h3>
              <p className="text-gray-700 mb-4">Teach at Lightstar Academy and make a lasting impact on children’s lives.</p>
              <a href="/volunteer" className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Join Us</a>
            </div>

            {/* One-Time Donation */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">💰 One-Time Donation</h3>
              <p className="text-gray-700 mb-4">Make a one-time contribution to support school operations and facilities.</p>
              <a href="/donate" className="bg-yellow-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">Donate</a>
            </div>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8">Where Your Contribution Goes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">📚 Education</h3>
              <p className="text-gray-600">Funds tuition fees, books, and teacher salaries.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">🍽️ Meals & Nutrition</h3>
              <p className="text-gray-600">Provides daily meals for students in need.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">🏫 School Facilities</h3>
              <p className="text-gray-600">Supports classroom maintenance and supplies.</p>
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
            <p>Fast and secure online payments.</p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">📱 Mobile Money (M-Pesa)</h3>
            <p>Quick donations via mobile.</p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">🏦 Bank Transfer</h3>
            <p>Make direct deposits to our account.</p>
          </div>
        </div>

        {/* <a href="/donate/payment" className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">Proceed to Payment</a> */}
        <Link to="/payments" className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">Proceed to Payment</Link>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Need Help?</h2>
        <p className="text-lg mb-4">Reach out to us for any sponsorship inquiries.</p>

        <p>Email: <a href="mailto:admin@lightstaracademy.org" className="text-blue-600 hover:underline">admin@lightstaracademy.org</a></p>
        <p>Phone: +254 712 345 678</p>
      </section>
    </div>
  );
};

export default Sponsorship;
