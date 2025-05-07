import React from "react";
import VolunteerImage from "../assets/support.jpg"

const Volunteer = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[450px] flex flex-col justify-center items-center text-white px-6" 
      style={{ backgroundImage: `url(${VolunteerImage})`, position: "relative", zIndex: 0 }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-extrabold mb-4">Make a Difference</h1>
          <p className="text-lg mb-6">Volunteer with Lightstar Academy and change lives.</p>
          <a href="/apply" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition">Apply Now</a>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <p className="text-lg text-gray-600 mb-6">
          Join us in making education accessible to children in need. Whether you're a teacher, professional, or just someone with a big heart, there's a place for you at Lightstar Academy.
        </p>
        <blockquote className="text-xl font-semibold italic text-blue-600 border-l-4 border-blue-500 pl-4">
          “I loved my month teaching here. The children are eager to learn and incredibly polite. It was a joyful experience!”
        </blockquote>
        <p className="mt-2 text-gray-700 font-bold">— Lynne White</p>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10">Volunteer Opportunities</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Teaching Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">📚 Teaching Roles</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Subjects: English, Kiswahili, Math, Science, Social Studies, CRE.</li>
                <li>Students: Ages 4-14.</li>
                <li>Minimum commitment: 1 week.</li>
              </ul>
            </div>

            {/* Non-Teaching Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3">💡 Non-Teaching Roles</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Administrative support, event coordination.</li>
                <li>Building maintenance and school improvements.</li>
                <li>Extracurricular activities: sports, music, art.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8">Why Volunteer?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">🌍 Cultural Exchange</h3>
              <p className="text-gray-600">Experience a new culture while making a lasting impact.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">📖 Personal Growth</h3>
              <p className="text-gray-600">Gain valuable skills and hands-on experience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">💙 Meaningful Impact</h3>
              <p className="text-gray-600">Directly contribute to children's education and futures.</p>
            </div>
          </div>
        </div>
      </section>

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

        <a href="/application-form" className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition">Start Your Application</a>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Have Questions?</h2>
        <p className="text-lg mb-4">Contact us for more details on volunteering.</p>

        <p>Email: <a href="mailto:admin@lightstaracademy.org" className="text-blue-600 hover:underline">admin@lightstaracademy.org</a></p>
        <p>Phone: +254 712 345 678</p>
      </section>
    </div>
  );
};

export default Volunteer;
