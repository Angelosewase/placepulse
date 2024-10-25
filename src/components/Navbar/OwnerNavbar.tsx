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
    <div className="w-full flex min-h-[7vh]  bg-[#fbfbff] items-center justify-end pr-9  sticky top-0 z-50">
      <div className="flex gap-2 items-center userNav h-full">
        <button className="p-2 hover:bg-neutral-100 rounded-full">
          <GoSearch color="black" size={19} />
        </button>
        <hr className="border border-black h-[50%] "/>
        <button
          onClick={() => navigate(`/${type}/notifications`)}
          className="p-2 hover:bg-neutral-100 rounded-full"
        >
          <GoBell color="black" size={19} />
        </button>
        <button
          onClick={() => navigate(`/${type}/account`)}
          className="p-2 bg-blue-50 rounded-full"
        >
          <IoPersonOutline color="black" size={19} />
        </button>
      </div>
    </div>
  );
};
export default OwnerNavbar;
