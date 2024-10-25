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

        <OwnerSidebar tabs={adminTabs} />
      <div className="h-screen  flex-1 flex flex-col">
        <OwnerNavbar type="_admin" />
        <div className="w-full overflow-y-auto h-[90vh]">
          <div className="min-h-full pt-2 px-6 bg-[#F8F8FC]">{children}</div>
        </div>
        <OwnerFooter />
      </div>
      <SportLight />
    </div>
  );
};

export default AdminLayout;
