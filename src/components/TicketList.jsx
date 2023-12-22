import { useCardContext } from "../context/CardContext";
import TicketCard from "./TicketCard";
import { IoAdd } from "react-icons/io5";
import { VscEllipsis } from "react-icons/vsc";
import Todo from "./Todo";
import UserIcon from "./UserIcon";
import PriorityIcon from "./PriorityIcon";

const TicketList = () => {
  const { data, grouping } = useCardContext();

  const groupedTickets = groupTickets(data.tickets, grouping, data.users);

  const getUserById = (userId) => {
    return data.users.find((user) => user.id === userId) || { name: "Unknown" };
  };

  const priorities = [
    { key: 0, value: 'No Priority' },
    { key: 1, value: 'Low' },
    { key: 2, value: 'Medium' },
    { key: 3, value: 'High' },
    { key: 4, value: 'Urgent' },
  ];

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {groupedTickets.map((group) => (
        <div key={group.key}>
          
          <div className="flex items-center justify-between  md:max-w-[250px] pb-2">
            <div className="flex items-center">
              {grouping==="Status" && <Todo status={group.key} />}
              {grouping==="User"  && <UserIcon user={getUserById(group.userId)} />}
              {console.log(group)}
              {grouping==="Priority" && <PriorityIcon priority={group.key}  />}
              {grouping === "Priority" ? (
                <h2 className="text-lg text-gray-500 font-medium pl-1">{priorities.find(item => item.key === group.key)?.value}</h2>
              ) : (
                <h2 className="text-lg text-gray-500 font-medium pl-1">{group.key}</h2>
              )}
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

const groupTickets = (tickets, grouping, users) => {
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
  const grouped = {};
  tickets.forEach((ticket) => {
    const user = ticket.userId ? ticket.userId : "Unknown";
    const userName = users.find((u) => u.id === user)?.name || "Unknown";
    if (!grouped[user]) {
      grouped[user] = { key: userName, tickets: [],userId:user };
    }
    grouped[user].tickets.push(ticket);
  });
  return Object.values(grouped);
};

const groupByPriority = (tickets) => {
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
