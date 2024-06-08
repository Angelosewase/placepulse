import { Link } from "react-router-dom";
import logo from "/logo.png";
import ProfileMenu from "./ProfileMenu";
const UserNavbar = () => {
  return (
    <div className="w-full flex py-3 items-center justify-between px-10">
      <Link to={"/"} className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-7 h-7 " />
        <h4 className="font-bold">PlacePulse</h4>
      </Link>
      <div className="flex gap-5">
        <Link to={"/"} className=" text-slate-500">
          Home
        </Link>
        <Link to={"/places"} className=" text-slate-500">
          Accommodations
        </Link>
        <Link to={"/bookings"} className=" text-slate-500">
          Bookings
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <ProfileMenu />
      </div>
    </div>
  );
};
export default UserNavbar;
