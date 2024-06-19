import { GoBell, GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const OwnerNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex py-2 border-b border-b-gray-300 items-center justify-end pr-9">
      <div className="flex gap-4 items-center userNav">
        <button className="p-3 hover:bg-neutral-100 rounded-full">
          <GoSearch color="black" size={19} />
        </button>
        <button onClick={() => navigate("/_owner/notifications")} className="p-3 hover:bg-neutral-100 rounded-full">
          <GoBell color="black" size={19} />
        </button>
        <button onClick={() => navigate("/_owner/account")} className="p-3 bg-blue-50 rounded-full">
          <IoPersonOutline color="black" size={19} />
        </button>
      </div>
    </div>
  );
};
export default OwnerNavbar;
