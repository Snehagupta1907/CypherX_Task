import { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import MultilevelDropdown from "./MultiLevelDropdown";
import useTheme from "../context/Theme";


const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!isDarkMode);
  };

  const {themeMode, lightTheme, darkTheme} = useTheme()
  const onChangeBtn = (e) => {
      const darkModeStatus = e.currentTarget.checked
      if (darkModeStatus) {
          darkTheme()
      } else {
          lightTheme()
      }
  }

  return (
    <nav className="flex justify-between items-center py-2 px-4 bg-white text-white">
      <MultilevelDropdown />

      <div className="flex items-center">
        <button
          onClick={handleThemeToggle}
          className="text-black focus:outline-none"
        >
          {isDarkMode ? <BiSun size={20} /> : <BiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
