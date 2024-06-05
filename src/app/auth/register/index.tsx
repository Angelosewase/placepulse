import React, { useState } from "react";
import loginImg from "../../../assets/images/loginImg1.png";
import AnimatedInput from "../../../components/Inputs/AnimatedInput";
import { Link } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { registerService } from "../../../services/auth.service";
import { ClipLoader } from "react-spinners";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const handleEmailChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setPassword(event.target.value);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setPhone(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!email || !password) {
      notifications.show({
        title: "Error",
        message: "Please fill all the fields",
        color: "red",
      });
      setLoading(false);
      return;
    }

    registerService({ email, password, phone })
      .then((res) => {
        notifications.show({
          title: "Success!",
          message: res.data.message,
          color: "green",
        });
      })
      .catch((err) => {
        console.log(err.response);
        notifications.show({
          title: "Error",
          message: err.response.data.message,
          color: "red",
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="w-full h-screen flex justify-between items-center md:px-[7vw] px-4">
      <div className="md:w-[40%] hidden md:flex h-[90%]">
        <img src={loginImg} alt="Hotel Image 1" className="w-full h-full" />
      </div>
      <div className="w-full md:w-[50%] h-[90%] flex flex-col">
        <h1 className="font-extrabold text-lg">Place Pulse</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full  flex flex-col items-start gap-4 mt-[5vh]"
        >
          <h1 className="text-4xl font-extrabold mb-[4vh]">Register </h1>
          <div className="w-full flex justify-between gap-6">
            <AnimatedInput
              label="Email"
              type="email"
              handleChange={handleEmailChange}
              value={email}
            />
            <AnimatedInput
              label="Phone"
              type="text"
              handleChange={handlePhoneChange}
              value={phone}
            />
          </div>

          <div className="w-full flex flex-col items-start gap-6">
            <AnimatedInput
              label="Password"
              type="password"
              showEye={true}
              handleChange={handlePasswordChange}
              value={password}
              className=""
            />
          </div>
          <div className="w-full flex justify-center gap-10 mt-2">
            <Link
              to={"/terms"}
              className="text-[#FF8682] font-extrabold text-sm"
            >
              Terms{" "}
            </Link>
            <Link
              to={"/privacy"}
              className="text-[#FF8682] font-extrabold text-sm"
            >
              Privacy Policy{" "}
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 text-center font-bold rounded-md text-white bg-[#699BFE]"
          >
            {loading ? (
              <div className="w-full h-full flex items-center justify-center">
                <ClipLoader size={23} color="black" />
              </div>
            ) : (
              "Register"
            )}
          </button>
          <div className="w-full flex items-center gap-2 justify-end">
            <h1 className="text-sm font-extrabold">Already have an account?</h1>
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
    </div>
  );
}
