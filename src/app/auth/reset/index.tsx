/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import loginImg from "../../../assets/images/loginImg1.png";
import AnimatedInput from "../../../components/Inputs/AnimatedInput";
import { Link, useNavigate } from "react-router-dom";
import { resetPasswordService } from "../../../services/auth.service";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import Brand from "@/components/ui/brand";

export default function Login() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const email = localStorage.getItem("user_mail") ?? "";
  const navigate = useNavigate();
  const handleConfirmPChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(event.target.value);
    setConfirmPassword(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    if (!email) {
      navigate("/auth/forgot");
    }
  }, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (!confirmPassword || !password) {
      notifications.show({
        title: "Error",
        message: "Passwords are required",
        color: "red",
      });
      setLoading(false);
      return;
    }
    if (confirmPassword !== password) {
      notifications.show({
        title: "",
        message: "Passwords Do Not Match",
        color: "red",
      });
      setLoading(false);
      return;
    }
    resetPasswordService({ email: email, newPassword: password })
      .then((res: any) => {
        notifications.show({
          title: "",
          message: res.data.message,
          color: "green",
        });
        localStorage.removeItem("user_mail");
        navigate("/");
      })
      .catch((err) => {
        notifications.show({
          title: "",
          message: err.response.data.message,
          color: "red",
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="w-full h-screen flex justify-between items-center md:px-[7vw] px-4">
      <div className="w-full md:w-[45%] h-[90%] flex flex-col">
        <Link to={"/"} className="font-extrabold text-lg">
          <Brand/>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[90%] flex flex-col items-start gap-4 mt-[10vh]"
        >
          <h1 className="text-4xl font-extrabold mb-[5vh]">Set a Password</h1>

          <div className="w-full flex flex-col items-start gap-6">
            <AnimatedInput
              label="New Password"
              type="password"
              handleChange={handlePasswordChange}
              value={password}
              showEye={true}
            />
            <AnimatedInput
              label="Confirm Password"
              type="password"
              showEye={true}
              handleChange={handleConfirmPChange}
              value={confirmPassword}
              className=""
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
              "Set Password"
            )}
          </button>
          <div className="w-full flex items-center gap-2 justify-end">
            <h1 className="text-sm font-extrabold">Got it ?</h1>
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
