import Navbar from "../components/Navbar";
import TicketList from "../components/TicketList";


const Home = () => {
  return (
    <div>     
      <Navbar/>
      <div className="mx-8 mt-6">
      {/* <Top/> */}
      <TicketList/>
      </div>
    </div>
  );
};

export default Home;
