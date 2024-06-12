import { BsFillHouseCheckFill } from "react-icons/bs";
import { FaBookOpenReader, FaHouse } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import SubRoutesTab from "./SubRoutesTab";

const OwnerSidebar = () => {
  const tabs = [
    {
      label: "Home",
      path: "/_owner/home",
      icon: <FaHouse size={20} />,
    },
    {
      label: "Accommodations",
      path: "/_owner/accommodations",
      icon: <BsFillHouseCheckFill size={20} />,
      hasSubRoute: true,
      subRoutes: [
        {
          label: "View Accommodations",
          path: "/_owner/accommodations/view",
          icon: <BsFillHouseCheckFill size={20} />,
        },
        {
          label: "Add Accommodation",
          path: "/_owner/accommodations/add",
          icon: <BsFillHouseCheckFill size={20} />,
        },
      ],
    },
    {
      label: "Bookings",
      path: "/_owner/bookings",
      icon: <FaBookOpenReader size={20} />,
    },
    {
      label: "Account",
      path: "/_owner/account",
      icon: <MdAccountCircle size={25} />,
    },
  ];
  return (
    <div className="w-full flex flex-col pt-[5vh] h-screen bg-[#F8F8FC]">
      <h1 className="text-2xl font-extrabold w-full text-center">
        Place Pulse
      </h1>
      <div className="w-full flex flex-col mt-10 sidebar-owsadm gap-4">
        {tabs.map((tab, index) => {
          return (
            <>
              {tab.hasSubRoute ? (
                <SubRoutesTab tab={tab} />
              ) : (
                <NavLink
                  className="w-full flex justify-start items-center gap-10 py-4 px-6 font-bold"
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
      </div>
    </div>
  );
};
export default OwnerSidebar;
