import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import ProfileMenu from "./ProfileMenu";
import { GoBell, GoHome } from "react-icons/go";

const UserNavbar = () => {
  return (
    <div className="w-full flex py-3 items-center justify-between px-3 md:px-10">
      <div className="flex gap-5">
        <Link to={"/_client/home"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-30 h-7 " />
          {/* <h4 className="font-bold text-lg">PlacePulse</h4> */}
        </Link>
        <input
          className="py-2 pl-4 pr-2 border rounded-lg outline-none hidden md:flex md:w-[30vw]"
          placeholder="Search ..."
        />
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
