import React from "react";
import academicImage from "../assets/hero.jpeg"

const Academics = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${academicImage})`, position: "relative", zIndex:0 }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold">Academic Excellence</h1>
          <p className="text-lg mt-4">
            Nurturing young minds through quality education and innovation.
          </p>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="container mx-auto py-16 px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
          Our Achievements
        </h2>
        <div className="bg-yellow-100 shadow-lg rounded-lg p-8">
          <p className="text-gray-700 text-lg text-center">
            Over the years, our school has consistently ranked among the top institutions in academic performance.
          </p>

          <ul className="mt-6 text-gray-800 text-lg space-y-4 list-disc list-inside">
            <li>📚 Top 5 in national examinations for the last 5 years</li>
            <li>🎓 Over 90% secondary school admission rate</li>
            <li>🏆 Winners of the National Science and Innovation Challenge</li>
            <li>🎤 Outstanding performance in extracurricular activities such as debate and music festivals</li>
          </ul>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Join Our Academic Journey</h2>
        <p className="text-lg text-gray-700 mt-4">
          Your support helps us continue providing quality education and opportunities for young learners.
        </p>
        <a
          href="/sponsorship"
          className="inline-block bg-yellow-500 text-white text-lg font-semibold px-6 py-3 rounded-full mt-6 hover:bg-yellow-600 transition"
        >
          Support a Student
        </a>
      </section>
    </div>
  );
};

export default Academics;
