import React from "react";

const AboutSchool = () => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center px-4" 
        style={{ backgroundImage: "url('/static/images/about-hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold">Indangalasia Lightstar Academy</h1>
          <p className="text-lg mt-4">
            Providing education and hope for children in need.
          </p>
        </div>
      </section>

      {/* ABOUT THE SCHOOL */}
      <section className="container mx-auto py-16 px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
          Facts About the School
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-gray-700 text-lg text-center">
            In many parts of Africa, education is not free, making it difficult for families to send their children to school.  
            Lightstar Academy was founded to bridge this gap and provide quality education to children in need.
          </p>

          <ul className="mt-6 text-gray-800 text-lg space-y-4">
            <li>
              <strong>📚 Number of Kids:</strong> <span className="text-blue-600">[Dynamically fetch from API]</span>
            </li>
            <li>
              <strong>📍 Location:</strong> Indangalasia, Matungu, Kakamega County, Kenya
            </li>
          </ul>

          <blockquote className="mt-8 bg-blue-100 p-6 border-l-4 border-blue-900 rounded-md">
            <p className="italic text-gray-700 text-lg">
              "6 out of 10 children get access to education. Your support can help make a difference."
            </p>
          </blockquote>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Help Change Lives</h2>
        <p className="text-lg text-gray-700 mt-4">
          Your sponsorship or donation can help a child access education and a better future.
        </p>
        <a href="/sponsorship" className="inline-block bg-yellow-500 text-white text-lg font-semibold px-6 py-3 rounded-full mt-6 hover:bg-yellow-600 transition">
          Sponsor a Child
        </a>
      </section>
    </div>
  );
};

export default AboutSchool;
