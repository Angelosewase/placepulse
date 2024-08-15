import { Link } from "react-router-dom";
import landingVector from "../../assets/images/landingVector.png";
const WebFooter = () => {
  return (
    <div className="w-full h-[60vh] relative flex items-start justify-between md:px-[10%] pt-[30vh] bg-[#396ff965]">
      <div className="flex flex-col gap-2 px-3 ">
        <h3 className="font-extrabold ">Quick Links</h3>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-extrabold ">Places</h3>
        <Link to={"/"}>Hotels</Link>
        <Link to={"/about"}>Motels</Link>
        <Link to={"/services"}>Parks</Link>
        <Link to={"/contact"}>Resorts</Link>
      </div>
      <div className="flex flex-col gap-2 px-3">
        <h3 className="font-extrabold ">About Us</h3>
        <Link to={"/"}>Our Story</Link>
        <Link to={"/about"}>Work With Us</Link>
      </div>

      <div className="w-full md:w-[80%] h-[45vh] rounded-[1rem] p-5 absolute top-[-20vh] bg-[#97B2F6]">
        <h1 className="md:w-1/5 w-full text-4xl font-extrabold">
          Subscribe Newsletter
        </h1>
        <div className="w-[50%] flex flex-col relative">
          <h1 className="mt-[5%] font-extrabold text-[#112211]">The Travel</h1>
          <p className="text-[#112211] font-semibold text-sm">
            Get inspired! Receive tour discounts, tips and good place to get
            reservation.
          </p>
          <div className="w-full flex mt-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-[60%] px-3 py-3 rounded-sm outline-none font-semibold"
            />
            <button className="bg-blue-500 text-white px-4 py-3 rounded-sm mx-2 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="absolute z-50 top-5 right-10 bg-black w-1/3 rounded-tl-[3.4rem] rounded-tr-[3rem]">
          <div className=" border-8 border-b-0 border-[#396FF9] bg-[#546869] rounded-t-[3rem] w-[15vw] h-[30vh]"></div>
          <img
            src={landingVector}
            className="absolute right-[-1rem] w-30 h-20 top-[50%]"
            alt=""
          />
        </div>
      </div>
      <div className="absolute bottom-4 right-5">
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
