import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const MultilevelDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

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
        className="text-black bg-white  focus:outline-none rounded-md text-md px-5 py-2 text-center inline-flex items-center border border-gray-100 shadow-md"
        type="button"
      >
        <img
          className="mr-2.5"
          width="20"
          height="20"
          src="https://img.icons8.com/ios-glyphs/30/000000/horizontal-settings-mixer--v1.png"
          alt="horizontal-settings-mixer--v1"
        />
        Display
        {!isOpen ? (
          <FaChevronDown className="ml-4" />
        ) : (
          <FaChevronUp className="ml-4" />
        )}
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: position.top + "px",
            left: position.left + "px",
          }}
          className=" w-[300px] h-[100px] bg-white rounded-md mt-2"
        >
          <div className=" mb-6">
            <div className="flex justify-between">
              <label className="mt-3 ml-3 text-gray-400" >Grouping</label>
              <select className="mt-3 mr-3 rounded border border-gray-200 text-gray-900" style={{ width: "90px" }}>
                <option value="User">User</option>
                <option value="Status">Status</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
            <div className="flex justify-between">
              <label className="mt-5 ml-3 text-gray-400" >Ordering</label>
              <select className="mt-5 mr-3 rounded border border-gray-200 text-gray-900" style={{ width: "90px" }}>
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
