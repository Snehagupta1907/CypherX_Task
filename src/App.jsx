import "./App.css";
import Home from "./pages/Home";
import { useCardContext } from "./context/CardContext";


function App() {
  const { data } = useCardContext();

  {
    console.log(data);
  }

  if (!data || !data.tickets || data.tickets.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Home />
    </>
  );
}

export default App;
