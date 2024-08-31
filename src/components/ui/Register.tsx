import React, { useState } from "react";
import AnimatedInput from "../Inputs/AnimatedInput";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import { AxiosAPI } from "@/utils/AxiosInstance";
export default function Register({ close }: { close: () => void }) {
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

    AxiosAPI.post("/auth/signup", {
      email,
      phone,
      password,
      role: "OWNER",
    })
      .then((res) => {
        notifications.show({
          title: "",
          message: res.data.message,
          color: "green",
        });
        setEmail("");
        setPassword("");
        setPhone("");
        close();
      })
      .catch((err) => {
        console.log(err.response);
        notifications.show({
          title: "",
          message:
            err.response?.message ??
            err.response?.data?.message ??
            "Network Error",
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
          <div className="w-full flex justify-between gap-6">
            <AnimatedInput
              label="Email"
              type="email"
              handleChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="w-full flex justify-between gap-6">
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
        </form>
      </div>
    </div>
  );
}
