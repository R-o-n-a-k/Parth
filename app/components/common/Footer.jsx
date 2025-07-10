import React from "react";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="bg-accent text-white font-medium text-center p-4 md:text-sm text-xs">
      Copyright | <i className="fa-regular fa-copyright"></i> {currentYear} All
      rights reserved.
    </div>
  );
};

export default Footer;
