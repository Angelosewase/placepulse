import { getBookings, getEarnings } from "@/utils/funcs";
import { useEffect } from "react";
import { GoBell, GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const OwnerNavbar = ({ type }: { type: string }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getBookings({ dispatch });
    getEarnings({ dispatch });
  }, [dispatch]);
  return (
    <div className="w-full flex h-[10vh] border-b border-b-gray-300 items-center justify-end pr-9">
      <div className="flex gap-4 items-center userNav">
        <button className="p-3 hover:bg-neutral-100 rounded-full">
          <GoSearch color="black" size={19} />
        </button>
        <button
          onClick={() => navigate(`/${type}/notifications`)}
          className="p-3 hover:bg-neutral-100 rounded-full"
        >
          <GoBell color="black" size={19} />
        </button>
        <button
          onClick={() => navigate(`/${type}/account`)}
          className="p-3 bg-blue-50 rounded-full"
        >
          <IoPersonOutline color="black" size={19} />
        </button>
      </div>
    </div>
  );
};
export default OwnerNavbar;
