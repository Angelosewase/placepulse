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
    <div className="w-full h-screen flex justify-between bg-white">
      <div
        className="w-[18vw] flex"
        style={{ height: `calc(100vh - 4px)` }}
      >
        <OwnerSidebar tabs={tabs} />
      </div>
      <div className="flex-1 h-screen flex flex-col">
        <OwnerNavbar type="_owner" />
        <div className="w-full overflow-y-auto flex-1 h-full">
          <div className="min-h-[80vh] pt-2 px-6">{children}</div>
          <OwnerFooter />
        </div>
      </div>
      <SportLight />
    </div>
  );
};

export default OwnerLayout;
