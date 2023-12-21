import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const MultilevelDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        
      <button
        id="multiLevelDropdownButton"
        onClick={() => setIsOpen((prev) => !prev)}
        data-dropdown-toggle="multi-dropdown"
        className="text-black bg-white focus:ring-4 focus:outline-none  font-medium rounded-md text-sm px-5 py-2 text-center inline-flex items-center border border-gray-100 shadow-md"
        type="button"
      >
        <img className="mr-2.5" width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/000000/horizontal-settings-mixer--v1.png" alt="horizontal-settings-mixer--v1"/>
        Dispaly
        {!isOpen ? (
          <FaChevronDown className="ml-4" />
        ) : (
          <FaChevronUp className="ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="mt-5 w-[300px] h-[100px] bg-blue-200 rounded-md ">
    <div className="text-black mb-6">
        <div className="flex justify-between">
      <label className="mt-5 ml-3">Grouping</label>
      <select className="mt-5 mr-3 rounded">
        <option value="User">User</option>
        <option value="Status">Status</option>
        <option value="Priority">Priority</option>
      </select>
      </div>
      <div className="flex justify-between">
      <label className="mt-5 ml-3">Ordering</label>
      <select className="mt-5 mr-3 rounded">
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
