import React from "react";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className=" bg-grey-1 text-content font-medium text-center p-4 md:text-xs text-xs">
      Copyright | <i className="fa-regular fa-copyright"></i> {currentYear} All
      rights reserved.
    </div>
  );
};

export default Footer;
