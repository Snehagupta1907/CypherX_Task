// TicketCard.js
import React from "react";
import { useCardContext } from "../context/CardContext";
import PriorityIcon from "./PriorityIcon";
import UserIcon from "./UserIcon";
import Todo from "./Todo";
import { FaCircle } from "react-icons/fa";

const TicketCard = ({ id, title, priority, tag, userId, status }) => {
  const { data } = useCardContext();
  const { users } = data;

  const getUserById = (userId) => {
    return users.find((user) => user.id === userId) || { name: "Unknown" };
  };

  return (
    <>
      <div className="w-full max-w-[280px] bg-white border border-gray-200 rounded-lg shadow p-2 md:p-4 dark:bg-gray-800 dark:border-gray-700 text-gray-500">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-500 sm:text-lg dark:text-gray-400">
            {id}
            
          </h1>
          <UserIcon user={getUserById(userId)} />
        </div>
        <div className="flex">
          <div className="mt-2 mr-2">
            <Todo status={status} size="12px" />
          </div>
          <p className="mb-5 font-medium text-black">{title}</p>
        </div>
        <div className="flex items-center">
          <PriorityIcon priority={priority} />
          <div className="border border-gray-300 ml-2 px-2 text-sm flex flex-row items-center">
            <FaCircle className="mr-2 w-2.5" />
            {tag}
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
