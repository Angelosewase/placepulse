import React, { useState } from "react";
import loginImg from "../../../assets/images/loginImg1.png";
import AnimatedInput from "../../../components/Inputs/AnimatedInput";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLFormElement>)=>{
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLFormElement>)=>{
    setPassword(event.target.value);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
  }
  return (
    <div className="w-full h-screen flex justify-between items-center md:px-[7vw] px-4">
      <div className="w-full md:w-[45%] h-[90%] flex flex-col">
          <h1 className="font-extrabold text-lg">Place Pulse</h1>

          <form onSubmit={handleSubmit} className="w-full md:w-[90%] flex flex-col items-start gap-4 mt-[10vh]">
              <h1 className="text-4xl font-extrabold mb-[5vh]">Login</h1>

              <div className="w-full flex flex-col items-start gap-6">
                <AnimatedInput label="Email" type="email" handleChange={handleEmailChange} value={email}/>
                <AnimatedInput label="Password" type="password" showEye={true} handleChange={handlePasswordChange} value={password} className=""/>
              </div>

              <div className="w-full flex justify-end">
                <Link to={"/auth/forgot"} className="text-[#FF8682] font-extrabold text-sm">Forgot Password ? </Link>
              </div>
              <button type="submit" className="w-full mt-4 py-3 text-center font-bold rounded-md text-white bg-[#699BFE]">Login</button>
              <div className="w-full flex items-center gap-2 justify-end">
                <h1 className="text-sm font-extrabold">Don't have an account?</h1>
                <Link to={"/auth/register"} className="text-[#FF8682] font-extrabold text-sm"> Register</Link>
              </div>
          </form>
      </div>
      <div className="md:w-[40%] hidden md:flex h-[90%]">
        <img src={loginImg} alt="Hotel Image 1" className="w-full h-full"/>
      </div>
    </div>
  );
}
