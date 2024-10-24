/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavLink } from "react-router-dom";
import SubRoutesTab from "./SubRoutesTab";
import { CiLogout } from "react-icons/ci";
import { useDisclosure } from "@mantine/hooks";
import Brand from "../ui/brand";
import LogoutModal from "../Modals/LogoutModal";
const OwnerSidebar = ({ tabs }: { tabs: any[] }) => {
  const [isLogout, { open, close }] = useDisclosure();
  return (
    <div
      className="flex flex-col pt-[5vh] h-full bg-[#F8F8FC] w-full"
    >
      <h1 className="text-2xl font-extrabold pl-10 text-center mb-8">
        <Brand />
      </h1>
      <div className="w-full flex flex-col mt-7 sidebar-owsadm gap-3 flex-1">
        {tabs.map((tab, index) => {
          return (
            <>
              {tab.hasSubRoute ? (
                <SubRoutesTab key={index} tab={tab} />
              ) : (
                <NavLink
                  className="w-full flex justify-start items-center gap-3  py-2.5 px-6 font-bold"
                  key={index}
                  to={tab.path}
                >
                  {tab.icon}
                  <h5>{tab.label}</h5>
                </NavLink>
              )}
            </>
          );
        })}

        <button
          onClick={open}
          className="w-full flex justify-start items-center gap-3 py-4 px-6 font-bold mb-5 hover:bg-red-500 hover:text-white mt-auto"
        >
          <CiLogout size={23} />
          <h5>Logout</h5>
        </button>
      </div>

      <LogoutModal isLogout={isLogout} closeLogout={close} />
    </div>
  );
};
export default OwnerSidebar;
