import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import aboutImage from "../assets/about.jpeg";

const About = () => {
  const [kidCount, setKidCount] = useState(null);

  useEffect(() => {
    const fetchKids = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/children/");
        setKidCount(response.data.length); // assuming response is an array
      } catch (error) {
        console.error("Failed to fetch number of kids:", error);
      }
    };

    fetchKids();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex-col items-center py-12">
      {/* HERO SECTION */}
      <section
        className="relative w-full bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${aboutImage})`, position: "relative", zIndex: 0 }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white text-center py-16">
          <h1 className="text-5xl font-bold">About Indangalasia Lightstar Academy</h1>
          <p className="text-lg mt-4">Empowering children through education and hope.</p>
        </div>
      </section>

      {/* ABOUT THE SCHOOL */}
      <section id="school-facts" className="container mx-auto py-16 px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Facts About the School</h2>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-gray-700 text-lg text-center">
            Education is not free in many parts of Africa, making it difficult for families to send their children to school.  
            Lightstar Academy was established to bridge this gap and provide quality education to children in need.
          </p>

          <ul className="mt-6 text-gray-800 text-lg space-y-4">
            <li>
              <strong>📚 Number of Kids:</strong>{" "}
              <span className="text-blue-600">
                {kidCount !== null ? kidCount : "Loading..."}
              </span>
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

      {/* HISTORY SECTION */}
      <section id="history" className="container mx-auto py-16 px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Our History</h2>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-gray-700 text-lg">
            Indangalasia Lightstar Academy was founded in <strong>January 2014</strong> to help
            children from remote areas in Western Kenya, particularly in Kakamega County,
            Matungu Sub-county, and Indangalasia Sub-location.
          </p>
          <p className="text-gray-700 text-lg mt-4">
            The school was established by <strong>Pastor Michael Otsieno Wanzala</strong> of
            Ambassadors of the Living Christ Sanctuary Ministry in Kenya. His vision was to
            support children who cannot afford expensive schools.
          </p>
          <p className="text-gray-700 text-lg mt-4">
            However, the school faces several challenges, including a lack of facilities, limited meals, and difficulty in paying teachers' salaries.
          </p>
          <blockquote className="mt-6 bg-yellow-100 p-6 border-l-4 border-yellow-500 rounded-md">
            <p className="italic text-gray-700 text-lg">
              "Your support can help us provide education and hope to more children in need."
            </p>
          </blockquote>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Join Us in Making a Difference</h2>
        <p className="text-lg text-gray-700 mt-4">
          Your support through sponsorship or donations helps provide education and a brighter future for these children.
        </p>
        <Link
          to="/sponsorship"
          className="inline-block bg-yellow-500 text-white text-lg font-semibold px-6 py-3 rounded-full mt-6 hover:bg-yellow-600 transition"
        >
          Sponsor a Child
        </Link>
      </section>
    </div>
  );
};

export default About;
