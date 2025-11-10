"use client";
import { socialMediaIcons } from "../Data";

const SocialMedia = () => {
  return (
    <>
      <div className="flex flex-row gap-6 md:text-2xl text-xl absolute md:top-22 top-18 right-6 text-muted-foreground">
        {socialMediaIcons.map((item) => (
          <a
            data-aos="zoom-in"
            key={item.name}
            target={item.name === "phone" ? undefined : "_blank"}
            rel={item.name === "phone" ? undefined : "noopener noreferrer"}
            href={item.link}
            className="hover:text-primary"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialMedia;
