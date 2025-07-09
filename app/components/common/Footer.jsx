import React from "react";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="bg-purple-400 text-white font-medium text-center p-4 text-sm">
      Copyright | <i className="fa-regular fa-copyright"></i> {currentYear} All
      rights reserved.
    </div>
  );
};

export default Footer;
