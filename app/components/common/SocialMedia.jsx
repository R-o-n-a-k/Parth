"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  const socialMediaIcons = [
    {
      link: "https://www.instagram.com/thecopyartist_/",
      icon: <FaInstagram />,
    },
    {
      link: "https://www.linkedin.com/in/parth-pala/",
      icon: <FaLinkedin />,
    },
    { link: "https://github.com/parthpala", icon: <FaGithub /> },
  ];

  return (
    <>
      <div className="flex flex-row gap-6 md:text-2xl absolute md:top-24 top-18 right-6 text-[var(--sub-text)] ">
        {socialMediaIcons.map((item, index) => (
          <a
            key={index}
            target="_blank"
            href={item.link}
            className="hover:text-purple-400"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
