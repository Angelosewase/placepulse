import { Link } from "react-router-dom"
import logo from "/logo.png"
const WebNavbar = ()=>{
    return(
        <div className="w-full flex py-4 items-center justify-between px-10">
            <Link to={"/"} className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-7 h-7 "/>
                <h4 className="font-bold">PlacePulse</h4>
            </Link>
            <div className="flex gap-5">
                <Link to={"/"} className=" text-slate-500">Home</Link>
                <Link to={"/about"} className=" text-slate-500">About</Link>
                <Link to={"/services"} className=" text-slate-500">Services</Link>
                <Link to={"/places"} className=" text-slate-500">Places</Link>
                <Link to={"/contact"} className=" text-slate-500">Contact</Link>
            </div>
            <div className="flex gap-2 items-center">
                <Link to={"/auth/login"}>Login</Link> |
                <Link to={"/auth/signup"} className="p-1 px-2 bg-[#5984F1] rounded-md text-white">Signup</Link>
            </div>
        </div>
    )
}
export default WebNavbar