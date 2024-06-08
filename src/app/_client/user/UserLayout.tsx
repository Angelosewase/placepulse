import React from "react";
import UserNavbar from "../../../components/Navbar/UserNavbar";
import WebFooter from "../../../components/website/Footer";

const UserLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="w-full flex flex-col">
      <UserNavbar />
      <div className="w-full pb-[50vh]">{children}</div>
      <WebFooter />
    </div>
  );
};

export default UserLayout;
