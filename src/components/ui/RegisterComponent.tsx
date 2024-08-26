import React, { useState } from "react";
import AnimatedInput from "../Inputs/AnimatedInput";
import { Link, useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { registerService } from "@/services/auth.service";
import { ClipLoader } from "react-spinners";
export default function Register({
  setActivePage,
}: {
  setActivePage: (page: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
          title: "",
          message: res.data.message,
          color: "green",
        });
        localStorage.setItem("reset_email", email);
        navigate("/auth/register/verify");
      })
      .catch((err) => {
        console.log(err.response);
        notifications.show({
          title: "",
          message: err.response?.message ?? "Network Error",
          color: "red",
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="w-full h-full flex justify-between items-center px-4">
      <div className="w-full h-full flex flex-col">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-start gap-4 mt-3"
        >
          <h1 className="text-2xl font-extrabold mb-2">Register</h1>
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
              to={"/public/terms"}
              className="text-[#FF8682] font-extrabold text-sm"
            >
              Terms{" "}
            </Link>
            <Link
              to={"/public/privacy"}
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
            <h1
              onClick={() => setActivePage("login")}
              className="text-[#FF8682] font-extrabold text-sm cursor-pointer"
            >
              {" "}
              Login
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
}
