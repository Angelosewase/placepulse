import React, { useState } from "react";
import loginImg from "../../../assets/images/loginImg1.png";
import AnimatedInput from "../../../components/Inputs/AnimatedInput";
import { Link, useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { forgotPasswordService } from "../../../services/auth.service";
import { ClipLoader } from "react-spinners";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleEmailChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!email) {
      setLoading(false);
      notifications.show({
        title: "Error",
        message: "Fill Your Email",
        color: "red",
      });
      return;
    }

    forgotPasswordService({ email })
      .then((res) => {
        notifications.show({
          title: "",
          message: res.data.message,
          color: "green",
        });
        localStorage.setItem("user_mail", email);
        navigate("/auth/verify");
        
      })
      .catch((err) => {
        console.log(err);
        notifications.show({
          title: "",
          message: err.response?.data?.message ?? err.message ??  "An Error Occured!",
          color: "red",
        });
      })
      .finally(() => setLoading(false));
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
            disabled={loading}
            className="w-full mt-4 py-3 text-center font-bold rounded-md text-white bg-[#699BFE]"
          >
            {loading ? (
              <div className="w-full h-full flex items-center justify-center">
                <ClipLoader size={23} color="black" />
              </div>
            ) : (
              "Submit"
            )}
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
