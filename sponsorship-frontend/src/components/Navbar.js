import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-lg font-bold text-gray-800 ml-2">
            Indangalasia Lightstar Academy
          </span>
        </Link>

        {/* Hamburger Button for Mobile */}
        <button 
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`lg:flex space-x-6 absolute lg:static bg-white w-full lg:w-auto left-0 top-16 lg:top-0 px-6 py-4 lg:p-0 shadow-md lg:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"}`}>
          <Link to="/about" className="block lg:inline-block text-gray-700 hover:text-blue-600 py-2">About</Link>
          <Link to="/academics" className="block lg:inline-block text-gray-700 hover:text-blue-600 py-2">Academics</Link>
          <Link to="/sponsorship" className="block lg:inline-block text-gray-700 hover:text-blue-600 py-2">Sponsorship</Link>

          {/* Other Ways to Support Dropdown */}
          <div 
            className="relative block lg:inline-block"
            onMouseEnter={() => setSupportOpen(true)}
            onMouseLeave={() => setSupportOpen(false)}
          >
            <button className="text-gray-700 hover:text-blue-600 py-2 w-full text-left lg:text-center">
              Other Ways to Support
            </button>
            {supportOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-64 left-0 lg:left-auto">
                <Link to="/volunteer" className="block px-4 py-2 hover:bg-gray-200">Volunteer</Link>
                <Link to="/support-once" className="block px-4 py-2 hover:bg-gray-200">One-time Donation</Link>
              </div>
            )}
          </div>

          {/* Login */}
          <Link to="/login" className="block lg:inline-block text-gray-700 hover:text-blue-600 py-2">Login</Link>

          {/* Donate Button */}
          <Link to="/donate" className="block lg:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Donate</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
