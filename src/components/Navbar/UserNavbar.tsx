import { Link, NavLink } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { GoBell, GoHome } from "react-icons/go";
import Brand from "../ui/brand";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserBookings } from "@/utils/funcs";
import { spotlight } from "@mantine/spotlight";
const UserNavbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserBookings({ dispatch });
  }, []);
  return (
    <div className="w-full flex py-3 items-center justify-between px-3 md:px-10 md:pl-16 shadow shadow-gray-100 sticky top-0 z-50 bg-white">
      <div className="flex gap-5">
        <Link to={"/_client/home"} className="flex items-center gap-2">
          <Brand />
        </Link>
        <div className="relative ml-10 hidden md:flex md:w-[20vw] md:items-center  border rounded-xl outline-none w-full items-center gap-2 px-2">
          <button className=" ">
            <CiSearch size={20} color="#00000050" />
          </button>
          <div
            onClick={spotlight.open}
            className="py-1.5 pr-2 flex flex-1 justify-between  text- text-gray-500 
            "
          >
            <p>search ....</p>
            <span>Ctrl + K </span>
          </div>
        </div>
      </div>
      <div className="flex gap-1 items-center userNav">
        <NavLink
          to={"/_client/home"}
          className="p-2 hover:bg-neutral-100 rounded-full"
        >
          <GoHome color="black" size={20} />
        </NavLink>
        <hr className="border border-black h-5" />
        <NavLink
          to={"/_client/notifications"}
          className="p-2 hover:bg-neutral-100 rounded-full"
        >
          <GoBell color="black" size={20} />
        </NavLink>
        <ProfileMenu />
      </div>
    </div>
  );
};
export default UserNavbar;
