import { useCardContext } from "../context/CardContext";
import TicketCard from "./TicketCard";
import { IoAdd } from "react-icons/io5";
import { VscEllipsis } from "react-icons/vsc";
import Todo from "./Todo";
import UserIcon from "./UserIcon";
import PriorityIcon from "./PriorityIcon";

const TicketList = () => {
  const { data, grouping } = useCardContext();

  // Filter and group tickets based on the selected grouping
  const groupedTickets = groupTickets(data.tickets, grouping, data.users);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {groupedTickets.map((group) => (
        <div key={group.key}>
          {/* {console.log(group.tickets.status)} */}
          <div className="flex items-center justify-between  md:max-w-[250px] pb-2">
            <div className="flex items-center">
              {/* {console.log(grouping)} */}
              <Todo status={group.key} />
              <h2 className="text-lg text-gray-500 font-medium pl-1">{group.key}</h2>
              <span className="ml-2 text-sm text-gray-500">
                {group.tickets.length} 
              </span>
            </div>
            <div className="flex items-center">
              <IoAdd className="mr-1 text-gray-500" />
              <VscEllipsis className="mr-1 text-gray-500" />
            </div>
          </div>
          {group.tickets.map((ticket) => (
            <TicketCard key={ticket.id} {...ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

// Helper function to group tickets based on the selected grouping
const groupTickets = (tickets, grouping, users) => {
  // Implement logic to group tickets based on the selected grouping
  switch (grouping) {
    case "Status":
      return groupByStatus(tickets);
    case "User":
      return groupByUser(tickets, users);
    case "Priority":
      return groupByPriority(tickets);
    default:
      return [];
  }
};

const groupByStatus = (tickets) => {
  // Placeholder logic to group by status
  const grouped = {};
  tickets.forEach((ticket) => {
    const status = ticket.status || "Unknown";
    if (!grouped[status]) {
      grouped[status] = { key: status, tickets: [] };
    }
    grouped[status].tickets.push(ticket);
  });
  return Object.values(grouped);
};

const groupByUser = (tickets, users) => {
  // Placeholder logic to group by user
  const grouped = {};
  tickets.forEach((ticket) => {
    const user = ticket.userId ? ticket.userId : "Unknown";
    const userName = users.find((u) => u.id === user)?.name || "Unknown";
    if (!grouped[user]) {
      grouped[user] = { key: userName, tickets: [] };
    }
    grouped[user].tickets.push(ticket);
  });
  return Object.values(grouped);
};

const groupByPriority = (tickets) => {
  // Placeholder logic to group by priority
  const grouped = {};
  tickets.forEach((ticket) => {
    const priority = ticket.priority || 0;
    if (!grouped[priority]) {
      grouped[priority] = { key: priority, tickets: [] };
    }
    grouped[priority].tickets.push(ticket);
  });
  return Object.values(grouped);
};

export default TicketList;
