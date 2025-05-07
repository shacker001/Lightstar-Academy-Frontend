import React from "react";

const History = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Our History
      </h1>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <p className="text-gray-700">
          Indangalasia Lightstar Academy was started in <strong>January 2014</strong> to help
          children from remote areas in Western Kenya, particularly in Kakamega County,
          Matungu Sub-county, and Indangalasia Sub-location.
        </p>
        <p className="text-gray-700 mt-4">
          The school was founded by <strong>Pastor Michael Otsieno Wanzala</strong> of
          Ambassadors of the Living Christ Sanctuary Ministry in Kenya, with
          the goal of supporting children who cannot afford expensive schools.
        </p>
        <p className="text-gray-700 mt-4">
          However, the school faces several challenges, including a lack of
          facilities, limited meals, and difficulty in paying teachers' salaries.
        </p>
        <p className="text-gray-700 font-semibold mt-4">
          Kindly consider partnering with us to support this school and provide
          education to many more children in the community.
        </p>
      </div>
    </div>
  );
};

export default History;
