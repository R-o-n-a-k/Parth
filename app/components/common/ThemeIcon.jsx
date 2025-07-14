"use client";
import { useTheme } from "next-themes";
import { CiLight, CiDark } from "react-icons/ci";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    const next = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    setTheme(next);
  };

  return (
    <div onClick={handleToggle} className="cursor-pointer relative w-4 h-4">
      <FaSun className="absolute inset-0 hidden dark:block md:text-xl text-lg text-[#FFE28A]" />
      <FaMoon className="absolute inset-0 block dark:hidden md:text-xl text-lg text-[#93C5FD]" />
    </div>
  );
};

export default ThemeIcon;
