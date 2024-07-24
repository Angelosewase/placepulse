import { Link, NavLink } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { GoBell, GoHome } from "react-icons/go";
import Brand from "../ui/brand";
import { CiSearch } from "react-icons/ci";

const UserNavbar = () => {
  return (
    <div className="w-full flex py-3 items-center justify-between px-3 md:px-10">
      <div className="flex gap-5">
        <Link to={"/_client/home"} className="flex items-center gap-2">
          <Brand />
        </Link>
        <div className="relative ml-10 hidden md:flex md:w-[20vw]">
          <input
            className="py-3 pl-12 pr-2 border rounded-3xl outline-none w-full text-sm"
            placeholder="Search ..."
          />
          <button className="absolute top-3 left-3">
            <CiSearch size={20} color="#00000050" />
          </button>
        </div>
      </div>
      <div className="flex gap-4 items-center userNav">
        <NavLink
          to={"/_client/home"}
          className="p-3 hover:bg-neutral-100 rounded-full"
        >
          <GoHome color="black" size={23} />
        </NavLink>
        <NavLink
          to={"/_client/notifications"}
          className="p-3 hover:bg-neutral-100 rounded-full"
        >
          <GoBell color="black" size={23} />
        </NavLink>
        <ProfileMenu />
      </div>
    </div>
  );
};
export default UserNavbar;
