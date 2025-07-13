"use client";
import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeIcon = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? (
        <CiLight className="md:text-2xl text-xl text-accent cursor-pointer stroke-[1.5]" />
      ) : (
        <CiDark className="md:text-2xl text-xl text-accent cursor-pointer stroke-[1.5]" />
      )}
    </div>
  );
};

export default ThemeIcon;
