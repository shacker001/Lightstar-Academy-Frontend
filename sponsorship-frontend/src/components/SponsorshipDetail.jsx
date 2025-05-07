import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SponsorshipDetail = () => {
  const { id } = useParams();
  const [child, setChild] = useState(null);

  useEffect(() => {
    const fetchChild = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/children/${id}/`);
        const data = await res.json();
        setChild(data);
      } catch (err) {
        console.error("Error fetching child details:", err);
      }
    };
    fetchChild();
  }, [id]);

  if (!child) return <div className="text-center py-20">Loading...</div>;

  return (
    
    <div className="bg-white min-h-screen pt-10">
      {/* Hero Section */}
      <div className="relative w-full max-w-[700px] h-[400px] mx-auto rounded-lg overflow-hidden shadow-xl">
        <img
          src={child.image}
          alt={child.name}
          className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-sm">{child.name}</h1>
            <p className="text-lg md:text-xl mt-2 font-medium">{child.age} years old</p>
          </div>
        </div>
      </div>

      {/* Child Info Section */}
      <div className="max-w-4xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          About {child.name}
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Gender:</strong> {child.sex} <br />
          <strong>Location:</strong> Indangalasia, Matungu, Kenya <br />
          <strong>Background:</strong> {child.background || "Lives in a rural village with limited access to basic needs."}
        </p>

        {/* Why Sponsor? */}
        <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">
          <p className="text-gray-800 text-lg italic">
            Sponsoring {child.name} helps provide access to education, food,
            and hope for a better future. Your monthly support creates real,
            lasting change in this child's life.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10 p-6 bg-blue-50 rounded-lg border border-blue-300 text-center">
          <p className="text-2xl font-bold text-blue-800 mb-4">
            Sponsor {child.name} for just $20/month
          </p>
          <Link
            to={`/sponsorship/${child.id}/checkout`}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sponsor This Child
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipDetail;
