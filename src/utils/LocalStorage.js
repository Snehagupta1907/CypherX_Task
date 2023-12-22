// helpers/localStorage.js

// Save filter settings to localStorage
export const saveFilterSettings = (grouping, ordering) => {
    localStorage.setItem("filterSettings", JSON.stringify({ grouping, ordering }));
  };
  
  // Retrieve filter settings from localStorage
  export const getFilterSettings = () => {
    const savedSettings = localStorage.getItem("filterSettings");
    return savedSettings ? JSON.parse(savedSettings) : { grouping: "Status", ordering: "Priority" };
  };
  