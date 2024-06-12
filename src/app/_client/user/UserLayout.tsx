import React from "react";
import UserNavbar from "../../../components/Navbar/UserNavbar";
import UserFooter from "../../../components/Footer/UserFooter";

const UserLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="w-full flex flex-col">
      <UserNavbar />
      <div className="w-full pb-[50vh]">{children}</div>
      <UserFooter />
    </div>
  );
};

export default UserLayout;
