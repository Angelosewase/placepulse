import * as React from "react";
import OwnerSidebar from "../../../components/Sidebars/OwnerSidebar";
import OwnerNavbar from "../../../components/Navbar/OwnerNavbar";
import OwnerFooter from "../../../components/Footer/OwnerFooter";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { adminTabs } from "@/components/Sidebars/routes/admin.routes";
import SportLight from "@/components/ui/SpotLight";
const AdminLayout = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const authToken = cookie.load("auth_token");
  if (!authToken || !cookie.load("Otate") || !cookie.load("auth_USER")) {
    navigate("/auth/login");
  }

  return (
    <div className="w-full h-screen flex justify-between bg-white">
      <div
        className="w-[24vw] p-4 rounded-lg"
        style={{ height: `calc(100vh - 4px)` }}
      >
        <OwnerSidebar tabs={adminTabs} />
      </div>
      <div className="w-[76vw] h-screen">
        <OwnerNavbar type="_admin" />
        <div className="w-full overflow-y-auto h-[90vh]">
          <div className="min-h-[80vh] pt-[5vh] px-6">{children}</div>
          <OwnerFooter />
        </div>
      </div>
      <SportLight />
    </div>
  );
};

export default AdminLayout;
