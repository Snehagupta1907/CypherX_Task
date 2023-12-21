import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import Navbar from "./components/Navbar";
import TicketCard from "./components/TicketCard";

function App() {
  return (
    <>
    <Navbar/>
      <KanbanBoard/>
      <TicketCard/>
    </>
  );
}

export default App;
