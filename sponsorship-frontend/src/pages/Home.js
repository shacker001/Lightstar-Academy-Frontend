import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpeg";

const Home = () => {
  const [children, setChildren] = useState([]);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); // 👈 Add hover state
  const [sexFilter, setSexFilter] = useState("All");
  const [minAge, setMinAge] = useState(4);
  const [maxAge, setMaxAge] = useState(15);
  const [country, setCountry] = useState("All");


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/children/")
      .then((response) => response.json())
      .then((data) => setChildren(data))
      .catch((error) => console.error("Error fetching children:", error));
  }, []);

  // Auto-scroll (with pause on hover)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 1;
    const scrollInterval = 60;

    const intervalId = setInterval(() => {
      if (!isHovered) {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += scrollAmount;
        }
      }
    }, scrollInterval);

    return () => clearInterval(intervalId);
  }, [isHovered]); // 👈 Depend on hover state


  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})`, position: "relative", zIndex: 0 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <h1 className="text-white text-4xl md:text-5xl font-bold relative z-10 text-center">
          Empower a Child's Future
        </h1>
      </div>

      {/* Main Sections with Links */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* About Section */}
        <div className="bg-white shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">About</h2>
          <ul className="text-blue-600 mt-2 space-y-2">
            <li><Link to="/about-school" className="hover:underline">About the School</Link></li>
            <li><Link to="/history" className="hover:underline">History</Link></li>
          </ul>
        </div>

        {/* Academic Section */}
        <div className="bg-white shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Academic</h2>
          <ul className="text-blue-600 mt-2 space-y-2">
            <li><Link to="/academics" className="hover:underline">Our Achievements</Link></li>
          </ul>
        </div>

        {/* Sponsorship Section */}
        <div className="bg-white shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Sponsorship</h2>
          <ul className="text-blue-600 mt-2 space-y-2">
            <li><Link to="/sponsor-involvement" className="hover:underline">My Involvement as a Sponsor</Link></li>
            <li><Link to="/how-to-sponsor" className="hover:underline">How to Become a Sponsor</Link></li>
            <li><Link to="/funds-usage" className="hover:underline">How is the Money Used?</Link></li>
            <li><Link to="/contact-sponsorship" className="hover:underline">Speak to Somebody About Sponsoring a Child</Link></li>
          </ul>
        </div>

        {/* Other Ways to Support Section */}
        <div className="bg-white shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Other Ways to Support</h2>
          <ul className="text-blue-600 mt-2 space-y-2">
            <li><Link to="/volunteer" className="hover:underline">Volunteer</Link></li>
            <li><Link to="/support-once" className="hover:underline">One-time Donations</Link></li>
          </ul>
        </div>
      </div>

      {/* Sponsor a Child CTA */}
      <div className="text-center py-12 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold">Sponsor a child for as little as €20/month</h2>
        <p className="text-lg mt-4">Your support gives a child access to free education and improves their life at home.</p>
        <Link
          to="/sponsorship"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 font-semibold rounded-lg hover:bg-gray-100"
        >
          Get Started
        </Link>
      </div>

      {/* Sponsor Preference + Children Cards in a Row */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Children in Need of Sponsorship
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Panel (Sticky/Non-scrolling) */}
          <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6 flex-shrink-0 h-fit">
            <h2 className="blpck mb-2 text-2xl font-medium text-center text-gray-700 mb-6">
              I'm interested in sponsoring a:
            </h2>

            {/* Gender Filter */}
            <div className="flex justify-center gap-4 mb-6">
              {["boy", "girl", "All"].map((g) => (
                <button
                  key={g}
                  onClick={() => setSexFilter(g === "All" ? "All" : g)}
                  className={`px-6 py-2 rounded-full border ${
                    sexFilter === g || (g === "All" && sexFilter === "All")
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-400 text-gray-800"
                  }`}
                >
                  {g === "boy" ? "Boy" : g === "girl" ? "Girl" : "Either"}
                </button>
              ))}
            </div>

            {/* Age Range */}
            <div className="mb-6 text-center">
              <label className="block mb-2 font-medium text-gray-700">Between the ages of:</label>
              <div className="flex justify-center items-center gap-4">
                <input
                  type="range"
                  min="4"
                  max="15"
                  value={minAge}
                  onChange={(e) => setMinAge(Number(e.target.value))}
                  className="w-1/3"
                />
                <span className="font-bold text-blue-600">{minAge}</span>
                <span className="text-gray-500">to</span>
                <span className="font-bold text-blue-600">{maxAge}</span>
                <input
                  type="range"
                  min="4"
                  max="15"
                  value={maxAge}
                  onChange={(e) => setMaxAge(Number(e.target.value))}
                  className="w-1/3"
                />
              </div>
            </div>

            {/* Country Filter */}
            <div className="mb-6 text-center">
              <label className="block mb-2 font-medium text-gray-700">Who comes from:</label>
              <select
                className="px-4 py-2 border rounded-md w-full"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="All">All Countries</option>
                <option value="Kenya">Kenya</option>
              </select>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={() =>
                  document
                    .getElementById("children-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
              >
                Sponsor A Child
              </button>
            </div>
          </div>

          {/* Scrolling Children Cards */}
          <div className="w-74vw md:w-2/3" id="children-section">
            <div
              className="overflow-x-auto whitespace-nowrap px-1 py-2 scrollbar-hide"
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex space-x-6 snap-x snap-mandatory">
                {children
                  .filter((child) =>
                    (sexFilter === "All" || child.sex === sexFilter) &&
                    child.age >= minAge &&
                    child.age <= maxAge &&
                    (country === "All" || child.country === country)
                  )
                  .map((child) => (
                    <Link
                      to={`/sponsorship/${child.id}`}
                      key={child.id}
                      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out snap-start min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] flex-shrink-0"
                    >
                      <div className="relative w-full h-60 overflow-hidden">
                        <img
                          src={`http://localhost:8000${child.image}`}
                          alt={child.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                        <h3 className="text-xl font-bold text-gray-800">{child.name}</h3>
                        <p className="text-sm text-gray-600">{child.age} years old</p>
                        <p className="text-sm text-gray-600">{child.sex}</p>
                        <p className="text-xs text-gray-500 mt-1">Indangalasia, Kenya</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
