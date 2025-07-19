"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SkillsAccordion = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-aos="zoom-in"
      className="border-grey-1 border-2 rounded-md mb-4 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm md:text-base cursor-pointer w-full px-4 py-3 flex justify-between items-center text-content font-medium bg-grey-1 hover:bg-grey-2 transition"
      >
        {title}
        {isOpen ? (
          <FaChevronUp className="text-sm text-accent" />
        ) : (
          <FaChevronDown className="text-sm text-accent" />
        )}
      </button>

      {isOpen && (
        <div className="px-2 py-2 text-sm text-content flex flex-wrap gap-x-3 gap-y-2 bg-background">
          {items.map((item, idx) => (
            <span
              key={idx}
              className="w-fit text-center px-2 py-1 rounded-full bg-transparent border-2 border-accent text-content text-xs md:text-sm font-medium shadow-lg"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsAccordion;
