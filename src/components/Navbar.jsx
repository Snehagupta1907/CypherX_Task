// Navbar.js
import { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import MultilevelDropdown from "./MultiLevelDropdown";

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
    // Add logic to toggle your dark/light theme
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-white">
      <MultilevelDropdown />

      <div className="flex items-center">
        <button
          onClick={handleThemeToggle}
          className="text-black focus:outline-none"
        >
          {isDarkMode ? <BiSun size={24} /> : <BiMoon size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
