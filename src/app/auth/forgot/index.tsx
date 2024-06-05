import React, { useState } from "react";
import loginImg from "../../../assets/images/loginImg1.png";
import AnimatedInput from "../../../components/Inputs/AnimatedInput";
import { Link } from "react-router-dom";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="w-full h-screen flex justify-between items-center md:px-[7vw] px-4">
      <div className="w-full md:w-[45%] h-[90%] flex flex-col">
        <h1 className="font-extrabold text-lg">Place Pulse</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[90%] flex flex-col items-start gap-4 mt-[10vh]"
        >
          <h1 className="text-4xl font-extrabold mb-[5vh]">
            Forgot Your Password?
          </h1>

          <div className="w-full flex flex-col items-start gap-6">
            <AnimatedInput
              label="Email"
              type="email"
              handleChange={handleEmailChange}
              value={email}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 text-center font-bold rounded-md text-white bg-[#699BFE]"
          >
            Submit
          </button>
          <div className="w-full flex items-center gap-2 justify-end">
            <h1 className="font-extrabold text-sm">Got it ?</h1>
            <Link
              to={"/auth/login"}
              className="text-[#FF8682] font-extrabold text-sm"
            >
              {" "}
              Login
            </Link>
          </div>
        </form>
      </div>
      <div className="md:w-[40%] hidden md:flex h-[90%]">
        <img src={loginImg} alt="Hotel Image 1" className="w-full h-full" />
      </div>
    </div>
  );
}
