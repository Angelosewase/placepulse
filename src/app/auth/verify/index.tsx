import React, { useState } from "react";
import loginImg from "../../../assets/images/loginImg1.png";
import AnimatedInput from "../../../components/Inputs/AnimatedInput";
import { Link, useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import {
  forgotPasswordService,
  verifyCodeService,
} from "../../../services/auth.service";
import { ClipLoader } from "react-spinners";
import Brand from "@/components/ui/brand";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const [loadingPage, setLoadingPage] = useState(false);
  const email = localStorage.getItem("user_mail") ?? "";
  console.log(email);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleCodeChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(event.target.value);
    setCode(event.target.value);
  };
  const handleResend = () => {
    setLoadingPage(true);
    forgotPasswordService({ email })
      .then((res) => {
        notifications.show({
          title: "",
          message: res.data.message,
          color: "green",
        });
        localStorage.setItem("user_mail", email);
      })
      .catch((err) => {
        console.log(err);
        notifications.show({
          title: "",
          message:
            err.response?.data?.message ?? err.message ?? "An Error Occurred",
          color: "red",
        });
      })
      .finally(() => setLoadingPage(false));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!email) {
      setLoading(false);
      notifications.show({
        title: "",
        message: "No Email Found!",
        color: "red",
      });
      return;
    }
    if (!code) {
      setLoading(false);
      notifications.show({
        title: "Error",
        message: "Enter The Code",
        color: "red",
      });
      return;
    }

    verifyCodeService({ email, code })
      .then((res) => {
        console.log(res.data);
        notifications.show({
          title: "",
          message: res.data.message,
          color: "green",
        });
        navigate("/auth/reset");
      })
      .catch((err) => {
        console.log(err);
        notifications.show({
          title: "",
          message: err.response.data.message,
          color: "red",
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <div className="w-full h-screen flex justify-between items-center md:px-[7vw] px-4 relative">
        <div className="w-full md:w-[45%] h-[90%] flex flex-col">
          <Brand/>
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-[90%] flex flex-col items-start gap-4 mt-[10vh]"
          >
            <h1 className="text-4xl font-extrabold mb-[5vh]">Verify code</h1>

            <div className="w-full flex flex-col items-start gap-6">
              <AnimatedInput
                label="Code"
                type="text"
                handleChange={handleCodeChange}
                value={code}
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={handleResend}
                type="button"
                className="text-[#FF8682] font-extrabold text-sm"
              >
                Resend
              </button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-1 py-3 text-center font-bold rounded-md text-white bg-[#699BFE]"
            >
              {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <ClipLoader size={23} color="black" />
                </div>
              ) : (
                "Verify"
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
      {loadingPage && (
        <div className="w-screen h-screen top-0 absolute overflow-hidden bg-[#cccccc6f] flex items-center justify-center">
          <ClipLoader color="black" size={24} />
        </div>
      )}
    </>
  );
}
