"use client";
import React, { useState } from "react";
import { skills } from "./Data";

const Skills = () => {
  // return (
  //   <section className="max-w-3xl mx-auto p-6">
  //     {Object.entries(skills).map(([category, items]) => (
  //       <details
  //         key={category}
  //         className="mb-4 bg-gray-100 rounded-lg group border border-[#9B5DE5] overflow-hidden"
  //       >
  //         <summary className="cursor-pointer px-4 py-3 font-semibold text-lg text-[#9B5DE5] hover:bg-[#f3e8ff] transition-colors">
  //           {category}
  //         </summary>
  //         <ul className="px-6 py-4 list-disc pl-5 text-[#364153] text-sm bg-white">
  //           {items.map((skill) => (
  //             <li key={skill}>{skill}</li>
  //           ))}
  //         </ul>
  //       </details>
  //     ))}
  //   </section>
  // );
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="accordion-collapse"
      className="w-full max-w-3xl mx-auto mt-6 space-y-2"
    >
      {Object.entries(skills).map(([category, items], index) => {
        const isOpen = openIndex === index;
        return (
          <div key={category}>
            <h2 id={`accordion-heading-${index}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 rounded-t-xl gap-3 transition-colors
                  ${
                    isOpen
                      ? "bg-[#9B5DE5] text-white"
                      : "text-gray-700 hover:bg-[#f3e8ff] border-[#9B5DE5]"
                  }`}
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
                aria-controls={`accordion-body-${index}`}
              >
                <span>{category}</span>
                <svg
                  className={`w-3 h-3 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-body-${index}`}
              className={`${
                isOpen ? "block" : "hidden"
              } border border-t-0 border-[#9B5DE5] rounded-b-xl bg-white text-[#364153]`}
              aria-labelledby={`accordion-heading-${index}`}
            >
              <div className="p-5">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
