import { useCardContext } from "../context/CardContext";
import PriorityIcon from "./PriorityIcon";
import UserIcon from "./UserIcon";
import { FaCircle } from "react-icons/fa";

const TicketCard = () => {
  const { data } = useCardContext();
  return (
    <>
      <div className="w-full max-w-[270px] bg-white border border-gray-200 rounded-lg shadow p-2 md:p-4 dark:bg-gray-800 dark:border-gray-700 text-gray-500">
        <div className="flex items-center justify-between">
          <h1 className=" text-gray-500 sm:text-lg dark:text-gray-400">
            CAM-1
          </h1>
          <UserIcon />
        </div>
        <div>
          <p className="mb-5 font-medium text-black ">
            Create Onboarding Tutorial for New Users
          </p>
        </div>
        <div className="flex items-center">
          <PriorityIcon />
          <div className="border border-gray-300 ml-2 px-2 text-sm flex flex-row items-center">
            <FaCircle className="mr-2 w-2.5" />
            Feature Request
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
