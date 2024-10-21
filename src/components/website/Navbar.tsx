import { Link, useLocation } from "react-router-dom";
import { MenuSquareIcon } from "lucide-react";
import Brand from "../ui/brand";
const WebNavbar = () => {
  const isShow = useLocation().pathname === "/";
  return (
    <div className="w-full flex py-6 items-center justify-between px-10 lg:px-24 backdrop-blur-xl sticky top-0 z-50">
      <Link to={"/"} className="flex items-center gap-2">
        <Brand />
      </Link>
      <div className="hidden md:flex gap-5">
        <Link to={"/"} className=" text-slate-500">
          Home
        </Link>
        {isShow && (
          <a href={"#reviews"} className=" text-slate-500">
            Reviews
          </a>
        )}
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
          className="p-1 px-2 bg-[#5984F1]  rounded hover:scale-110 transition-all text-white"
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
