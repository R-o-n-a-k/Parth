"use client";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
      <Sun className="theme-icon hidden dark:block text-[#FFE28A]" />
      <Moon className="theme-icon block dark:hidden text-[#93C5FD]" />
    </div>
  );
};

export default ThemeIcon;
