import  { createContext, useContext, useState, useEffect } from 'react';

const CardContext = createContext();

// eslint-disable-next-line react/prop-types
const CardProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
        console.log(response)
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <CardContext.Provider value={{ data }}>
      {children}
    </CardContext.Provider>
  );
};

const useCardContext = () => {
  const context = useContext(CardContext);

  return context;
};

export { CardProvider, useCardContext };
