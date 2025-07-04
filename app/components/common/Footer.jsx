import React from "react";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="bg-[var(--accent)] text-[var(--background)] text-center p-4 text-sm">
      Copyright | <i className="fa-regular fa-copyright"></i> {currentYear} All
      rights reserved.
    </div>
  );
};

export default Footer;
