

const UserIcon = ({ user }) => {
  const bgColorClass = user.available ? "bg-yellow-400" : "bg-gray-400";
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5 bg-gray-800 rounded-full dark:bg-gray-600">
      <span
        className={`bottom-0 left-3.5 absolute w-2.5 h-2.5 ${bgColorClass} border-2 border-white dark:border-gray-800 rounded-full`}
      ></span>
      <span className="font-medium text-white text-xs">{initials}</span>
    </div>
  );
};

export default UserIcon;
