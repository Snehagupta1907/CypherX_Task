import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const MultilevelDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const [groupBy, setGroupBy] = useState("Status"); // Default grouping option
  const [sortBy, setSortBy] = useState("Title"); // Default sorting option

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.left + window.scrollX,
      });
    }
  }, [isOpen]);

  return (
    <div style={{ position: "relative" }}>
      <button
        ref={buttonRef}
        id="multiLevelDropdownButton"
        onClick={() => setIsOpen((prev) => !prev)}
        data-dropdown-toggle="multi-dropdown"
        className="text-black bg-white  focus:outline-none rounded-md text-sm px-3 py-2 text-center inline-flex items-center border border-gray-100 shadow-md"
        type="button"
      >
        <img
          className="mr-2.5"
          width="18"
          src="https://img.icons8.com/ios-glyphs/30/000000/horizontal-settings-mixer--v1.png"
          alt="horizontal-settings-mixer--v1"
        />
        Display
        {!isOpen ? (
          <FaChevronDown className="ml-4 text-gray-400 w-2.5" />
        ) : (
          <FaChevronUp className="ml-4 text-gray-400 w-2.5" />
        )}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          style={{
            position: "absolute",
            top: position.top + "px",
            left: position.left + "px",
          }}
          className=" w-[300px] h-[100px] bg-white rounded-md mt-2 z-50 shadow-md border border-gray-200"
        >
          <div className=" mb-6">
            <div className="flex justify-between">
              <label className="mt-3 ml-3 text-gray-500">Grouping</label>
              <select
                className="mt-3 mr-3 rounded border border-gray-200 text-gray-900"
                style={{ width: "90px" }}
                value={groupBy}
                onChange={(e) => setGroupBy(e.target.value)}
              >
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
            <div className="flex justify-between">
              <label className="mt-5 ml-3 text-gray-500">Ordering</label>
              <select
                className="mt-5 mr-3 rounded border border-gray-200 text-gray-900"
                style={{ width: "90px" }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="Title">Title</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultilevelDropdown;
