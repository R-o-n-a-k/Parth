"use client";
import React from "react";
import { socialMediaIcons } from "../Data";

const SocialMedia = () => {
  return (
    <>
      <div className="flex flex-row gap-6 md:text-2xl text-xl absolute md:top-24 top-18 right-6 text-subtitle-color">
        {socialMediaIcons.map((item) => (
          <a
            key={item.name}
            target={item.name === "phone" ? undefined : "_blank"}
            rel={item.name === "phone" ? undefined : "noopener noreferrer"}
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
