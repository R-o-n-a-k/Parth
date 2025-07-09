import React from "react";
import SocialMedia from "./SocialMedia";
import { IoMdDownload } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="w-full h-fit">
        <div
          className="banner w-full h-30 md:h-46 bg-gray-300 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/banner1.png')" }}
        ></div>
        <div className="relative flex flex-col -mt-15">
          <img
            src="/hero.png"
            alt="parth pala"
            className="w-24 h-24 md:w-36 md:h-36 self-start ml-4 md:ml-6 rounded-full border-4 border-white object-cover shadow-md"
          />
          <SocialMedia />

          <div className="p-4 md:p-6 mb-10">
            <h1 className="tracking-wider leading-relaxed mt-1 text-3xl font-bold text-[var(--text)]">
              Parth Pala
            </h1>
            <p className="text-subtext leading-relaxed font-semibold text-m text-[var(--sub-text)]">
              Technology Analyst | Android Specialist
            </p>
            <p className="text-subtext italic text-m text-[var(--sub-text)]">
              Mumbai, India
            </p>
            <a
              href="/ParthPala_Resume.pdf"
              download
              className="inline-flex items-center gap-1 tracking-wider mt-5 px-4 py-2 bg-purple-400 cursor-pointer font-semibold text-white rounded-2xl hover:bg-purple-700 hover:shadow-inner"
            >
              DOWNLOAD CV <IoMdDownload />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
