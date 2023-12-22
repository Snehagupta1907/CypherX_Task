import { createContext, useContext, useState, useEffect,useReducer } from "react";

const CardContext = createContext();

// Initial state
const initialState = {
  data: {},
  grouping: "Status", // default grouping
};

// Actions
const SET_GROUPING = "SET_GROUPING";
const SET_DATA = "SET_DATA";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case SET_GROUPING:
      return { ...state, grouping: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const CardProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
      );

      const jsonData = await response.json();

      dispatch({ type: SET_DATA, payload: jsonData });
    };

    fetchData();
  }, []);

  const setGrouping = (grouping) => {
    dispatch({ type: SET_GROUPING, payload: grouping });
  };

  const value = {
    data: state.data,
    grouping: state.grouping,
    actions: {
      setGrouping,
    },
  };

  return (
    <CardContext.Provider value={value}>{children}</CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);

  return context;
};
