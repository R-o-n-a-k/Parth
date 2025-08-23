import SocialMedia from "./SocialMedia";
import { FaAngleDoubleDown } from "react-icons/fa";
import { introduction } from "../Data";
import ThemeIcon from "./ThemeIcon";

const Header = () => {
  return (
    <>
      <div className="w-full h-fit">
        <div
          data-aos="fade-down"
          className="banner w-full h-26 md:h-42 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/banner.webp')" }}
        ></div>
        <div className="relative flex flex-col -mt-15">
          <img
            data-aos="zoom-in"
            src={introduction.image}
            alt={introduction.name}
            className="w-24 h-24 md:w-36 md:h-36 self-start ml-4 md:ml-6 rounded-full border-4 border-white dark:border-grey-2 object-cover shadow-md"
          />
          <SocialMedia />

          <div className="p-4 md:p-6 mb-10">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="flex items-center gap-2"
            >
              <h1 className="tracking-wider leading-relaxed mt-1 text-2xl md:text-3xl font-bold text-title-color">
                {introduction.name}
              </h1>
              <ThemeIcon />
            </div>
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-subtitle-color leading-relaxed font-semibold text-base md:text-lg"
            >
              {introduction.designation}
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="italic text-sm md:text-base text-grey-4"
            >
              {introduction.location}
            </p>
            <a
              data-aos="zoom-in"
              data-aos-delay="500"
              href={introduction.resume}
              download
              className="btn-normal mt-5"
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
