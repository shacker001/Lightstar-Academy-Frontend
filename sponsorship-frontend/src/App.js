import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sponsorship from "./pages/Sponsorship";
import Donate from "./pages/Donate";
import Login from "./pages/Login";
import Volunteer from "./pages/Volunteer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import About from "./pages/About";
import AboutSchool from "./pages/AboutSchool";
import History from "./pages/History";
import Academics from "./pages/Academics";
import Payments from "./pages/Payments";
import FundsUsage from "./pages/FundsUsage";
import Support from "./pages/Support";
import Register from "./components/Register";
import ApplicationForm from "./pages/ApplicationForm";
import Donations from "./pages/Donations";
import SupportOnce from "./pages/SupportOnce";
import SponsorshipDetail from './components/SponsorshipDetail';
import SponsorshipCheckout from "./components/SponsorshipCheckout";
import SponsorshipConfirmation from "./components/SponsorshipConfirmation";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> 
        <div className="flex-grow">  {/* Ensures content pushes footer down */} 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-school" element={<AboutSchool />} />
            <Route path="/history" element={<History />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/funds-usage" element={<FundsUsage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/application-form" element={<ApplicationForm/>} />
            <Route path="/donations" element={<Donations/>} />
            <Route path="/support-once" element={<SupportOnce />} />
            <Route path="/sponsorship/:id" element={<SponsorshipDetail />} />
            <Route path="/sponsorship/:id/checkout" element={<SponsorshipCheckout />} />
            <Route path="/sponsorship/confirmation" element={<SponsorshipConfirmation />} />
          </Routes>
        </div>
        <Footer />  {/* Add Footer Here */}
      </div>
    </Router>
  );
};

export default App;




