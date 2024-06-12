import * as React from "react";
import OwnerSidebar from "../../../components/Sidebars/OwnerSidebar";
import OwnerNavbar from "../../../components/Navbar/OwnerNavbar";
const OwnerLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-[24vw]">
        <OwnerSidebar />
      </div>
      <div className="w-[76vw]">
        <OwnerNavbar/>
        <div className="pt-[5vh] px-6">
          {children}
        </div>
    </div>
    </div>
  );
};

export default OwnerLayout;
