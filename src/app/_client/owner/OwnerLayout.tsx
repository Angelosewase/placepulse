import * as React from "react";
import OwnerSidebar from "../../../components/Sidebars/OwnerSidebar";
import OwnerNavbar from "../../../components/Navbar/OwnerNavbar";
import OwnerFooter from "../../../components/Footer/OwnerFooter";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { tabs } from "@/components/Sidebars/routes/owner.routes";
import SportLight from "@/components/ui/SpotLight";
const OwnerLayout = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const authToken = cookie.load("auth_token");
  if (!authToken || !cookie.load("Otate") || !cookie.load("auth_USER")) {
    navigate("/auth/login");
  }

  return (
    <div className="w-full h-screen   flex justify-between ">
  
        <OwnerSidebar tabs={tabs} />

      <div className="flex-1 h-full  flex flex-col   ">
        <OwnerNavbar type="_owner" />
        <div className="w-full max-h-[90vh] flex-1   ">
          <div className="flex-1 pt-2 px-2 overflow-y-auto max-h-full min-h-full   bg-[#F8F8FC]  ">{children}</div>
        </div>
        <OwnerFooter />
      </div>
      <SportLight />
    </div>
  );
};

export default OwnerLayout;
