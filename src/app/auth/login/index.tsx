/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import loginImg from "../../../assets/images/loginImg1.png";
import AnimatedInput from "../../../components/Inputs/AnimatedInput";
import { Link } from "react-router-dom";
import { loginService } from "../../../services/auth.service";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEmailChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if(!email || !password){
      notifications.show({
        title: "Error",
        message: "Email and password are required",
        color: "red",
      })
      setLoading(false);
      return;
    }
    loginService({email: email, password: password})
      .then((res: any)=>{
        notifications.show({
          title: "Success!",
          message: res.data.message,
          color: "green",
        })
      })
      .catch((err)=>{
        notifications.show({
          title: "Error",
          message: err.response.data.message,
          color: "red",
        })
      })
      .finally(()=> setLoading(false));
  };
  return (
    <div className="w-full h-screen flex justify-between items-center md:px-[7vw] px-4">
      <div className="w-full md:w-[45%] h-[90%] flex flex-col">
        <Link to={"/"} className="font-extrabold text-lg">Place Pulse</Link>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[90%] flex flex-col items-start gap-4 mt-[10vh]"
        >
          <h1 className="text-4xl font-extrabold mb-[5vh]">Login</h1>

          <div className="w-full flex flex-col items-start gap-6">
            <AnimatedInput
              label="Email"
              type="email"
              handleChange={handleEmailChange}
              value={email}
            />
            <AnimatedInput
              label="Password"
              type="password"
              showEye={true}
              handleChange={handlePasswordChange}
              value={password}
              className=""
            />
          </div>

          <div className="w-full flex justify-end">
            <Link
              to={"/auth/forgot"}
              className="text-[#FF8682] font-extrabold text-sm"
            >
              Forgot Password ?{" "}
            </Link>
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-3 text-center font-bold rounded-md text-white bg-[#699BFE]"
          >
            {loading ? <div className="w-full h-full flex items-center justify-center">
              <ClipLoader size={23} color="black"/>
            </div> : "Login"}
          </button>
          <div className="w-full flex items-center gap-2 justify-end">
            <h1 className="text-sm font-extrabold">Don't have an account?</h1>
            <Link
              to={"/auth/register"}
              className="text-[#FF8682] font-extrabold text-sm"
            >
              {" "}
              Register
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
