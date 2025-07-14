import React from "react";
import SocialMedia from "./SocialMedia";
import { FaAngleDoubleDown } from "react-icons/fa";
import { introduction } from "../Data";
import ThemeIcon from "./ThemeIcon";

const Header = () => {
  return (
    <>
      <div className="w-full h-fit">
        <div
          className="banner w-full h-26 md:h-42 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/banner.webp')" }}
        ></div>
        <div className="relative flex flex-col -mt-15">
          <img
            src="/hero.webp"
            alt="parth pala"
            className="w-24 h-24 md:w-36 md:h-36 self-start ml-4 md:ml-6 rounded-full border-4 border-white object-cover shadow-md"
          />
          <SocialMedia />

          <div className="p-4 md:p-6 mb-10">
            <div className="flex items-center gap-2">
              <h1 className="tracking-wider leading-relaxed mt-1 text-2xl md:text-3xl font-bold text-title-color">
                {introduction.name}
              </h1>
              <ThemeIcon />
            </div>
            <p className="text-subtitle-color leading-relaxed font-semibold text-base md:text-lg">
              {introduction.designation}
            </p>
            <p className="italic text-sm md:text-base text-grey-4">
              {introduction.location}
            </p>
            <a
              href="/ParthPala_Resume.pdf"
              download
              className="btn-normal mt-5"
              // className="inline-flex text-sm md:text-base items-center gap-1 tracking-wider mt-5 px-4 py-2 bg-accent cursor-pointer font-semibold text-white rounded-2xl hover:bg-accent-hover hover:shadow-inner"
            >
              Download CV
              <FaAngleDoubleDown className="animate-bounce font-bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
