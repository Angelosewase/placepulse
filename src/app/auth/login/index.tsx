/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import loginImg from "../../../assets/images/loginImg1.png";
import AnimatedInput from "../../../components/Inputs/AnimatedInput";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "../../../services/auth.service";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import cookie from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SUCCESS } from "../../../actions/AuthActions";
export default function Login() {
  const [email, setEmail] = useState("");
  const { isLoggedIn, user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleEmailChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (!email || !password) {
      notifications.show({
        title: "Error",
        message: "Email and password are required",
        color: "red",
      });
      setLoading(false);
      return;
    }
    loginService({ email: email, password: password })
      .then((res: any) => {
        notifications.show({
          title: "Success!",
          message: res.data.message,
          color: "green",
        });
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token: res.data.data.token,
            user: res.data.data.user,
          },
        });
        if (res.data.data.user.role === "USER") {
          console.log(res.data.data);
          const expires = new Date();
          expires.setDate(Date.now() + 1000 * 2);
          cookie.save("auth_token", res.data.data.token, {
            path: "/",
          });
          cookie.save("auth_USER", res.data.data.user.role, {
            path: "/",
          });
          return navigate("/_client/home");
        }
        if (res.data.data.user.role === "OWNER") {
          const expires = new Date();
          expires.setDate(Date.now() + 1000 * 2);
          cookie.save("auth_token", res.data.data.token, {
            path: "/",
          });
          cookie.save("auth_USER", res.data.data.user.role, {
            path: "/",
          });
          return navigate("/_owner/home");
        }
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

  useEffect(() => {
    if (isLoggedIn && user) {
      if (user?.role === "USER") {
        return navigate("/_client/home");
      }
      if (user?.role === "OWNER") {
        return navigate("/_owner/home");
      }
      if (user?.role === "ADMIN") {
        return navigate("/_admin/home");
      }
    }
  }, [isLoggedIn, navigate, user]);

  return (
    <div className="w-full h-screen flex justify-between items-center md:px-[7vw] px-4">
      <div className="w-full md:w-[45%] h-[90%] flex flex-col">
        <Link to={"/"} className="font-extrabold text-lg">
          Place Pulse
        </Link>

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
            disabled={loading}
            className="w-full mt-4 py-3 text-center font-bold rounded-md text-white bg-[#699BFE]"
          >
            {loading ? (
              <div className="w-full h-full flex items-center justify-center">
                <ClipLoader size={23} color="black" />
              </div>
            ) : (
              "Login"
            )}
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
