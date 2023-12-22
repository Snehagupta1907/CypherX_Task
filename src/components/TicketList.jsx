// TicketList.js
import { useState } from "react";
import { useCardContext } from "../context/CardContext";
import TicketCard from "./TicketCard";
import Navbar from "./Navbar";
import Top from "./Top";

const TicketList = () => {
  const { data } = useCardContext();
  const { tickets, users } = data;

  const [groupBy, setGroupBy] = useState("Status");
  const [sortBy, setSortBy] = useState("Title");

  const groupedAndSortedTickets = () => {
    let groupedTickets = {};
    tickets.forEach((ticket) => {
      const groupKey =
        groupBy === "User" ? getUserById(ticket.userId).name : ticket[groupBy];
      if (!groupedTickets[groupKey]) {
        groupedTickets[groupKey] = [];
      }
      groupedTickets[groupKey].push(ticket);
    });

    Object.keys(groupedTickets).forEach((groupKey) => {
      groupedTickets[groupKey] = groupedTickets[groupKey].sort((a, b) => {
        if (sortBy === "Priority") {
          return b.priority - a.priority;
        } else if (sortBy === "Title") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    });

    return groupedTickets;
  };

  const getUserById = (userId) => {
    return users.find((user) => user.id === userId) || { name: "Unknown" };
  };

  const renderTickets = () => {
    const groupedAndSorted = groupedAndSortedTickets();

    return Object.keys(groupedAndSorted).map((groupKey) => (
      <div key={groupKey} className="text-white-A700">
        {groupedAndSorted[groupKey].map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}
      </div>
    ));
  };

  return (
    <div>
      <Navbar setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <Top/>
      {renderTickets()}
    </div>
  );
};

export default TicketList;
