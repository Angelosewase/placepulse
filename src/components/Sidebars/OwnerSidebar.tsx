import { BsFillHouseCheckFill } from "react-icons/bs";
import { FaBookOpenReader, FaHouse } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import SubRoutesTab from "./SubRoutesTab";
import { CiLogout } from "react-icons/ci";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import cookie from "react-cookies";
import { notifications } from "@mantine/notifications";
const OwnerSidebar = () => {
    const [isLogout, {open,close}] = useDisclosure();
    const navigate = useNavigate();
    const logout = ()=>{
        cookie.remove("auth_token", {
            path : "/"
        });
        cookie.remove("auth_USER", {
            path : "/"
        });
        notifications.show({
            message: "LoggedOut successfully!"
        })
        navigate("/");
    }
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
                <SubRoutesTab key={index} tab={tab} />
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

        <button
            onClick={open}
            className="w-full flex justify-start items-center gap-10 py-4 px-6 font-bold mt-10 hover:bg-red-500 hover:text-white"
        >
            <CiLogout size={23}/>
            <h5>Logout</h5>
        </button>
      </div>

      <Modal opened={isLogout} onClose={close}>
        <div className="w-full">
            <h1 className="font-extrabold w-full text-center">Are you sure you want to logout?</h1>
            <div className="w-full flex text-center justify-between mt-6">
                <button onClick={close} className="py-2 px-5 bg-[#699BFE] rounded-md font-bold">Cancel</button>
                <button onClick={logout} className="py-2 px-5 rounded-md bg-red-500 font-bold text-white">Logout</button>
        </div>
        </div>
      </Modal>
    </div>
  );
};
export default OwnerSidebar;
