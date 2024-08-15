import { DARK, LIGHT, STORAGETHME } from "@/constants/themes";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ToogleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle(DARK, !isDarkMode);
    localStorage.setItem(STORAGETHME, !isDarkMode ? DARK : LIGHT);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGETHME) || DARK;
    if (savedTheme) {
      setIsDarkMode(savedTheme === DARK);
      document.documentElement.classList.toggle(DARK, savedTheme === DARK);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle(DARK, prefersDark);
    }
  }, []);
  return (
    <button
      type="button"
      className="text-textPrimary dark:text-dark-textPrimary"
      onClick={toggleTheme}
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ToogleTheme;
