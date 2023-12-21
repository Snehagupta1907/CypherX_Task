import { useCardContext } from "../context/CardContext";

const UserIcon = () => {
  const { data } = useCardContext();

  {console.log(data)}

  const user = data.users.find((user) => user.id === "usr-2");

  const bgColorClass = user.available ? "bg-yellow-400" : "bg-gray-400";

  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5  bg-gray-800 rounded-full dark:bg-gray-600">
      <span
        className={`bottom-0 left-3.5 absolute w-2.5 h-2.5 ${bgColorClass} border-2 border-white dark:border-gray-800 rounded-full`}
      ></span>
      <span className="font-medium text-white text-xs">JL</span>
    </div>
  );
};

export default UserIcon;
