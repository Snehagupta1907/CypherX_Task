import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

const CardContext = createContext();

const initialState = {
  data: {},
  grouping: "Status",
  ordering: "Priority", 
  isLoading: true,
};

const SET_GROUPING = "SET_GROUPING";
const SET_ORDERING = "SET_ORDERING";
const SET_DATA = "SET_DATA";
const SET_LOADING = "SET_LOADING";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_GROUPING:
      return { ...state, grouping: action.payload };
      case SET_ORDERING: 
      return { ...state, ordering: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload, isLoading: false };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: SET_LOADING, payload: true });

      try {
        const response = await fetch(
          "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
        );

        const jsonData = await response.json();

        dispatch({ type: SET_DATA, payload: jsonData });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const setGrouping = (grouping) => {
    dispatch({ type: SET_GROUPING, payload: grouping });
  };

  const setOrdering = (ordering) => {
    dispatch({ type: SET_ORDERING, payload: ordering });
  };

  const value = {
    data: state.data,
    grouping: state.grouping,
    ordering: state.ordering, 
    isLoading: state.isLoading,
    actions: {
      setGrouping,
      setOrdering,
    },
  };

  return (
    <CardContext.Provider value={value}>
      {state.isLoading ? <p>Loading...</p> : children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);

  return context;
};
