import React from "react";

const Support = () => {
  return (
    <div className="w-full">
      {/* HEADER */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Other Ways to Support</h1>
        </div>
      </header>

      {/* VOLUNTEERING SECTION */}
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-bold text-center">Volunteering</h2>
        <p className="text-center mt-4">
          You can volunteer to teach at Lightstar Academy for a minimum of a week.
          We have openings for teaching children aged <strong>4 to 14</strong> in the following subjects:
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>English</li>
          <li>Kiswahili</li>
          <li>Maths</li>
          <li>Social Studies</li>
          <li>CRE</li>
          <li>Science</li>
        </ul>
        <p className="text-center mt-4">
          Teaching at Lightstar Academy is primarily in <strong>English</strong>, with Swahili translations where necessary.  
          This is an excellent opportunity for aspiring teachers, retirees, or anyone passionate about education.
        </p>

        <blockquote className="mt-6 p-6 border-l-4 border-blue-600 bg-gray-100">
          <p className="italic">
            "I loved my month teaching here, the children are so keen to learn and super polite.  
            You will have no discipline problems, just much joy!"
          </p>
          <p className="font-semibold text-right">— Lynne White</p>
        </blockquote>
      </section>

      {/* ONE-TIME DONATIONS SECTION */}
      <section className="container mx-auto py-10 bg-gray-100">
        <h2 className="text-2xl font-bold text-center">One-Time Donations</h2>
        <p className="text-center mt-4">
          If you are interested in supporting this work, you can make a **one-time donation**.
          You can also specify where you'd like your support to go:
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>Building maintenance</li>
          <li>Teaching supplies</li>
          <li>Food</li>
          <li>School activities</li>
        </ul>
        <div className="text-center mt-6">
          <a href="/payment-methods" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
            View Payment Methods
          </a>
        </div>
      </section>
    </div>
  );
};

export default Support;
