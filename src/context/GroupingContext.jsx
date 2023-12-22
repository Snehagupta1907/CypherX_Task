/* eslint-disable react/prop-types */
import  { createContext, useContext, useState } from "react";

const GroupingContext = createContext();

export const useGrouping = () => {
  const context = useContext(GroupingContext);
  if (!context) {
    throw new Error("useGrouping must be used within a GroupingProvider");
  }
  return context;
};

export const GroupingProvider = ({ children }) => {
  const [grouping, setGrouping] = useState("Status");

  const value = {
    grouping,
    setGrouping,
  };

  return (
    <GroupingContext.Provider value={value}>
      {children}
    </GroupingContext.Provider>
  );
};
