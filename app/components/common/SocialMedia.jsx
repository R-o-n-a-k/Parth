"use client";
import React from "react";
import { socialMediaIcons } from "../Data";

const SocialMedia = () => {
  return (
    <>
      <div className="flex flex-row gap-6 md:text-2xl text-xl absolute md:top-24 top-18 right-6 text-subtitle-color">
        {socialMediaIcons.map((item, index) => (
          <a
            key={index}
            target="_blank"
            href={item.link}
            className="hover:text-accent"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
