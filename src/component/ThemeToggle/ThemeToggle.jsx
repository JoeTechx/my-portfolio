import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
