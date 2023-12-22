import { FaRegCircle } from "react-icons/fa6";
import { MdOutlineCircle } from "react-icons/md";
import { LuCircleDashed } from "react-icons/lu";
import { IoMdPie } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

const Todo = ({ status, size  }) => {
  let IconComponent;

  switch (status) {
    case "Todo":
      IconComponent = MdOutlineCircle;
      break;
    case "Backlog":
      IconComponent = LuCircleDashed;
      break;
    case "In progress":
      IconComponent = IoMdPie;
      break;
    case "Done":
      IconComponent = IoIosCheckmarkCircle;
      break;
    case "Cancelled":
      IconComponent = IoIosCloseCircle;
      break;
    default:
      IconComponent = FaRegCircle; // Default to a circle icon
      break;
  }

  return <IconComponent size={size} />;
};

export default Todo;
