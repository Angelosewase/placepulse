/* eslint-disable @typescript-eslint/no-explicit-any */
import { Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SubRoutesTab = ({ tab }: { tab: any }) => {
  const [isExpanded, { toggle }] = useDisclosure(false);
  return (
    <>
      <div
        onClick={toggle}
        className="w-full flex items-center justify-between cursor-pointer  px-6 py-2 hover:bg-[#F8F8FC] hover:text-[#112211]"
      >
        <div className="flex items-center gap-10">
          {tab.icon}
          <h1 className="text-lg font-extrabold">{tab.label}</h1>
        </div>
        <div>
          {!isExpanded ? (
            <MdKeyboardArrowRight size={16} />
          ) : (
            <MdKeyboardArrowDown size={16} />
          )}
        </div>
      </div>
      <Collapse in={isExpanded}>
        <div className="w-full cllps-prnt-sdbr-cont">
          {tab.subRoutes.map((tab: any, index: number) => {
            return (
              <NavLink
                className="w-full flex justify-start items-center gap-10 py-4 px-6 pl-12 font-bold"
                key={index}
                to={tab.path}
              >
                {tab.icon}
                <h5>{tab.label}</h5>
              </NavLink>
            );
          })}
        </div>
      </Collapse>
    </>
  );
};
export default SubRoutesTab;
