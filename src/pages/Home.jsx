import Navbar from "../components/Navbar";
import TicketList from "../components/TicketList";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TicketList />
    </div>
  );
};

export default Home;
