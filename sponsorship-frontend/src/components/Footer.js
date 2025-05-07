import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-8">
      <p>&copy; {new Date().getFullYear()} Indangalasia Lightstar Academy</p>
      <div className="flex justify-center mt-4 space-x-6">
        <a href="#" className="hover:text-grey-400">Facebook</a>
        <a href="#" className="hover:text-grey-400">Twitter</a>
        <a href="#" className="hover:text-grey-400">Instagram</a>
      </div>
      <p className="mt-4">
        Designed & developed by <a href="https://shacker001.github.io/Sh4cker" className="text-blue-400 hover:underline">Sh4cker</a>
      </p>
    </footer>
  );
};

export default Footer;
