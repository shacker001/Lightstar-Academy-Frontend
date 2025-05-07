import React from "react";

const FundsUsage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        How is the Money Used
      </h1>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <p className="text-gray-700">
          50% of your financial aid will pay for the running of the school, such as teachers, building maintenace, mels. The other 50% will go directly to their parents or guardians.
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

export default FundsUsage;
