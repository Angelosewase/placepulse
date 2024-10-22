/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import landingVector from "../../assets/images/landingVector.png";
import {
  FaInstagram,
  FaSquareXTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";
import { useState } from "react";
import { AxiosAPI } from "@/utils/AxiosInstance";
import { notifications } from "@mantine/notifications";
import Brand from "../ui/brand";
const WebFooter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    } else {
      setError("");
    }
    setLoading(true);
    AxiosAPI.post("/notifications/subscribe", {
      email,
    })
      .then((res) => {
        console.log(res.data);
        notifications.show({
          message: res.data.message,
          color: "green",
        });
        setEmail("");
      })
      .catch((err) => {
        console.log(err);
        notifications.show({
          message: err.message ?? err.response.message,
          color: "red",
          pos: "fixed",
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="w-full md:h-[55vh] relative flex md:items-start flex-wrap gap-10  md:flex-row  justify-between  md:px-[8%] md:pt-[24vh]  bg-[#396ff965] pb-8 md:pb-0">
      <div className="md:flex flex-col gap-4 hidden">
        <div>
          <Brand />
        </div>
    
          <p className="text-xs font-semibold">
            &copy; {new Date().getFullYear()} Place Pulse. All rights reserved.
          </p>
      </div>
      <div className="flex flex-col text-xl gap-2 px-3 ">
        <h3 className="font-extrabold ">Quick Links</h3>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div className="flex flex-col gap-2 text-xl">
        <h3 className="font-extrabold ">Places</h3>
        <Link to={"/"}>Hotels</Link>
        <Link to={"/about"}>Motels</Link>
        <Link to={"/services"}>Parks</Link>
        <Link to={"/contact"}>Resorts</Link>
      </div>
      <div className="flex flex-col gap-2 px-3 text-xl">
        <h3 className="font-extrabold ">About Us</h3>
        <Link to={"/"}>Our Story</Link>
        <Link to={"/about"}>Work With Us</Link>
      </div>

      <div className="w-full md:w-[85%] h-[40vh] rounded-[1rem] py-5 px-10 absolute top-[-20vh] bg-[#97B2F6]">
        <h1 className="md:w-1/5 w-full text-4xl font-extrabold">
          Subscribe Newsletter
        </h1>
        <div className="w-[50%] flex flex-col relative">
          <h1 className="mt-[5%] font-extrabold text-[#112211]">The Travel</h1>
          <p className="text-[#112211] font-semibold text-sm">
            Get inspired! Receive tour discounts, tips and good place to get
            reservation.
          </p>
          {error && <p className="text-red-500 font-bold mt-2">{error}</p>}
          <form onSubmit={handleSubmit} className="w-full flex mt-2">
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email address"
              className="w-[60%] px-3 py-3 rounded outline-none font-semibold"
            />
            <button
              disabled={loading}
              type="submit"
              className={`${
                loading ? "bg-blue-400" : "bg-blue-500"
              } text-white px-4 py-3 rounded mx-2 font-semibold`}
            >
              {loading ? "Subscribing ..." : "Subscribe"}
            </button>
          </form>
        </div>
        <div className="absolute z-50 top-5 right-10 bg-black w-1/3 rounded-tl-[3.4rem] rounded-tr-[3rem] hidden md:block">
          <div className=" border-8 border-b-0 border-[#396FF9] bg-[#546869] rounded-t-[3rem] w-[15vw] h-[30vh]"></div>
          <img
            src={landingVector}
            className="absolute right-[-1rem] w-30 h-20 top-[50%] "
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-lg mb-4 font-extrabold">Follow us</h1>
        <div className="flex justify-between items-center gap-2  ">
          <Link to={""}>
            <FaInstagram size={23} />
          </Link>
          <Link to={""}>
            <FaSquareXTwitter size={20} />
          </Link>
          <Link to={""}>
            <FaFacebook size={20} />
          </Link>{" "}
          <Link to={""}>
            <FaYoutube size={25} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 right-5 ">
        <h1>
          Powered By{" "}
          <a
            href="https://www.linkedin.com/in/nyiringabo-david-455990259"
            target="_blank"
            className="text-[#0075FF] font-extrabold"
          >
            David NYIRINGABO
          </a>
        </h1>
      </div>
    </div>
  );
};

export default WebFooter;
