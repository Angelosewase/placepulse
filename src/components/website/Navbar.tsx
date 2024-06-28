import { Link } from "react-router-dom";
import { MenuSquareIcon } from "lucide-react";
import Brand from "../ui/brand";
const WebNavbar = () => {
  return (
    <div className="w-full flex py-6 items-center justify-between px-10 backdrop-blur-xl sticky top-0 z-50">
      <Link to={"/"} className="flex items-center gap-2">
        <Brand />
      </Link>
      <div className="hidden md:flex gap-5">
        <Link to={"/"} className=" text-slate-500">
          Home
        </Link>
        <Link to={"/about"} className=" text-slate-500">
          About
        </Link>
        <Link to={"/services"} className=" text-slate-500">
          Services
        </Link>
        <Link to={"/places"} className=" text-slate-500">
          Places
        </Link>
        <Link to={"/contact"} className=" text-slate-500">
          Contact
        </Link>
      </div>
      <div className="hidden md:flex gap-2 items-center">
        <Link to={"/auth/login"}>Login</Link> |
        <Link
          to={"/auth/register"}
          className="p-1 px-2 bg-[#5984F1] rounded-md text-white"
        >
          Signup
        </Link>
      </div>

      <div className="flex md:hidden">
        <MenuSquareIcon color="black" />
      </div>
    </div>
  );
};
export default WebNavbar;
