import React from "react";
import UserNavbar from "../../../components/Navbar/UserNavbar";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import WebFooter from "../../../components/website/Footer";
import SportLight from "@/components/ui/SpotLight";
const UserLayout = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const authToken = cookie.load("auth_token");
  if (!authToken && !cookie.load("Otate") && !cookie.load("auth_USER")) {
    navigate(`/auth/login`);
  }

  console.log(authToken, cookie.load("Otate"), cookie.load("auth_USER"));
  return (
    <div className="w-full flex flex-col">
      <UserNavbar />
      <div className="w-full pb-[50vh]">{children}</div>
      <WebFooter />
      <SportLight />
    </div>
  );
};

export default UserLayout;
