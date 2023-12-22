import Todo from "./Todo";
import { IoAdd } from "react-icons/io5";
import { VscEllipsis } from "react-icons/vsc";

const Top = () => {
  return (
    <div className="flex items-center justify-between  md:max-w-[250px]">
      <div className="flex items-center justify-center">
        <Todo size={13}/>
        <h1 className="pl-2">hello</h1>
      </div>
      <div className="flex items-center">
        <IoAdd className="mr-1 text-gray-500"  />
        <VscEllipsis className="mr-1 text-gray-500" />
      </div>
    </div>
  );
};

export default Top;
