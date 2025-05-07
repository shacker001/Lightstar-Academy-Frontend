import React, { useState } from "react";

const Payments = ({ initiatePayment }) => {
  const [amount, setAmount] = useState(20); // Defiult minimum of €20
  const [paymentMethod, setPaymentMethod] = useState(""); // Track payment method

  const handlePayment = (e) => {
    e.preventDefault();
    const amountNum = parseFloat(amount);

    if (!amountNum || amountNum < 20) {
      alert("Minimum donation amount is 20 Euros.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    // Call the parent function to initiate payment
    initiatePayment(paymentMethod, amountNum);
  };

  return (
    <div className="pt-16 bg-gray-100 min-h-screen">
      {/* Payment Options */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-8">Secure Payment Options</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-lg">
          {/* Credit/Debit Card */}
          <div
            className={`p-6 bg-white text-gray-800 rounded-lg shadow-lg flex flex-col items-center cursor-pointer ${
              paymentMethod === "card" ? "border-2 border-blue-600" : ""
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            <h3 className="text-xl font-semibold">💳 Credit/Debit Card</h3>
            <p className="text-center">Fast and secure payment processing.</p>
          </div>

          {/* Mobile Money */}
          <div
            className={`p-6 bg-white text-gray-800 rounded-lg shadow-lg flex flex-col items-center cursor-pointer ${
              paymentMethod === "mpesa" ? "border-2 border-blue-600" : ""
            }`}
            onClick={() => setPaymentMethod("mpesa")}
          >
            <h3 className="text-xl font-semibold">📱 Mobile Money</h3>
            <p className="text-center">M-Pesa and other mobile payment options.</p>
            <p className="text-sm text-gray-600 mt-2">
              Send payment to: <strong>+254 123 456 789</strong>
            </p>
          </div>

          {/* Bank Transfer */}
          <div
            className={`p-6 bg-white text-gray-800 rounded-lg shadow-lg flex flex-col items-center cursor-pointer ${
              paymentMethod === "bank" ? "border-2 border-blue-600" : ""
            }`}
            onClick={() => setPaymentMethod("bank")}
          >
            <h3 className="text-xl font-semibold">🏦 Bank Transfer</h3>
            <p className="text-center">Send donations via direct bank deposits.</p>
            <p className="text-sm text-gray-600 mt-2">
              Account Name: <strong>Lightstar Academy</strong>
              <br />
              Account No: <strong>123456789</strong>
              <br />
              Bank: <strong>XYZ Bank</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="max-w-2xl mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Enter Payment Amount</h3>
        <form onSubmit={handlePayment}>
          <input
            type="number"
            min="20"
            placeholder="Enter amount (min €20)"
            className="border p-2 w-full mb-3"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full"
          >
            Proceed with Payment
          </button>
        </form>
      </section>
    </div>
  );
};

export default Payments;
