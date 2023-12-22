import "./App.css";
import TicketCard from "./components/TicketCard";
import Home from "./pages/Home";
import { useCardContext } from "./context/CardContext";
import TicketList from "./components/TicketList";

function App() {
  const { data } = useCardContext();

  {console.log(data)}

  if (!data || !data.tickets || data.tickets.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* <Home /> */}
      {/* {data.tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticketId={ticket.id}
          title={ticket.title}
          priority={ticket.priority}
          tag={ticket.tag}
          userId={ticket.userId}
          status={ticket.status}
        />
      ))} */}
      <TicketList/>
    </>
  );
}

export default App;