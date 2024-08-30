import { BsFillHouseCheckFill } from "react-icons/bs";
import { FaBookOpenReader, FaHouse } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

export const tabs = [
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