import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full h-fit">
        <div className="banner w-full h-30 md:h-46 bg-gray-300"></div>
        <div className="flex flex-col -mt-15">
          <img
            src="/hero.png"
            alt="parth pala"
            className="w-24 h-24 md:w-36 md:h-36 self-start ml-4 md:ml-6 rounded-full border-4 border-white object-cover shadow-md"
          />
          <div className="p-4 md:p-6">
            <h1 className="mt-1 text-2xl font-bold text-[var(--text)]">
              Parth Pala
            </h1>
            <p className="text-subtext font-semibold text-m text-[var(--sub-text)]">
              Technology Analyst | Android Specialist
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
