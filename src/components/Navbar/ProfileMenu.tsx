import { Menu } from "@mantine/core";
import profileImg from "../../assets/images/person.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../Modals/LogoutModal";
import { useDisclosure } from "@mantine/hooks";
import { FaUser, FaCreditCard, FaHotel } from "react-icons/fa";
import { PiInvoiceLight } from "react-icons/pi";
import { MdOutlineSupport } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const [isLogout, { open: openLogout, close: closeLogout }] =
    useDisclosure(false);
  return (
    <Menu shadow="lg" width={200}>
      <Menu.Target>
        <button className="">
          <img
            src={profileImg}
            width={50}
            height={50}
            className="rounded-full "
          />
        </button>
      </Menu.Target>

      <Menu.Dropdown className="">
        <div className="px-4 pb-3 ">
          <div className="w-full flex justify-start gap-1 border-b border-gray-400 pb-3 mb-3">
            <img
              src={profileImg}
              width={50}
              height={50}
              className="rounded-full "
            />
            <div className="flex flex-col items-start pt-1">
              <h1 className="font-extrabold">John Doe</h1>
              <p className="text-sm font-medium">Online </p>
            </div>
          </div>

          <Menu.Item>
            <div
              className="w-full flex justify-between   items-center my-0.5"
              onClick={() => navigate("/_client/info/account")}
            >
              <div className="flex items-center gap-2 ">
                <FaUser size={20} />
                <h6 className="text- font-bold">My Account</h6>
              </div>

              <MdKeyboardArrowRight color="black" />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div
              onClick={() => navigate("/_client/info/Payment Methods")}
              className="w-full flex justify-between items-center my-0.5"
            >
              <div className="flex items-center gap-2 ">
                <FaCreditCard size={20} />
                <h6 className=" font-bold">Payments</h6>
              </div>

              <MdKeyboardArrowRight color="black" />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div
              onClick={() => navigate("/_client/info/Bookings")}
              className="w-full flex justify-between items-center  my-0.5"
            >
              <div className="flex items-center gap-2 ">
                {" "}
                <FaHotel size={20} />
                <h6 className="font-bold">Bookings</h6>
              </div>

              <MdKeyboardArrowRight color="black" />
            </div>
          </Menu.Item>
          <Menu.Item>
            <div
              onClick={() => navigate("/_client/info/Bookings")}
              className="w-full flex justify-between items-center  mt-0.5 mb-2"
            >
              <div className="flex items-center gap-2 ">
                <PiInvoiceLight size={20} />
                <h6 className="font-bold">Invoices</h6>
              </div>

              <MdKeyboardArrowRight color="black" />
            </div>
          </Menu.Item>
          <hr className="h-2 border-gray-500" />
          <Menu.Item>
            <div className="w-full flex justify-between items-center my-0.5">
              <div className="flex items-center gap-2 ">
                <MdOutlineSupport size={20} />
                <h6 className="font-bold">Support</h6>
              </div>

              <MdKeyboardArrowRight color="black" />
            </div>
          </Menu.Item>
          <Menu.Item color="red">
            <div className="w-full my-0.5" onClick={openLogout}>
              <div className="flex items-center gap-2 ">
                <IoLogOutSharp size={20} />
                <h6 className="w-full">Logout</h6>
              </div>
            </div>
          </Menu.Item>
        </div>
      </Menu.Dropdown>
      <LogoutModal isLogout={isLogout} closeLogout={closeLogout} />
    </Menu>
  );
};

export default ProfileMenu;
