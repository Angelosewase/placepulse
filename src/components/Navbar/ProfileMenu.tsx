import { Menu } from "@mantine/core";
import profileImg from "../../assets/images/person.png";
import { MdKeyboardArrowRight } from "react-icons/md";
const ProfileMenu = () => {
  return (
    <Menu shadow="md" width={200}>
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

      <Menu.Dropdown className="px-3">
        <Menu.Item>
        <div className="w-full flex justify-start gap-4">
            <img
                src={profileImg}
                width={50}
                height={50}
                className="rounded-full "
            />
            <div className="flex flex-col items-start pt-2">
                <h1 className="font-extrabold">John Doe</h1>
                <p className="text-sm font-medium">Online </p>
            </div>
        </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <div className="w-full flex justify-between items-center my-1">
                <h6 className="text-sm font-bold">My Account</h6>
                <MdKeyboardArrowRight color="black"/>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="w-full flex justify-between items-center my-1">
                <h6 className="text-sm font-bold">Payments</h6>
                <MdKeyboardArrowRight color="black"/>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="w-full flex justify-between items-center my-1">
                <h6 className="text-sm font-bold">Bookings</h6>
                <MdKeyboardArrowRight color="black"/>
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="w-full flex justify-between items-center my-1">
                <h6 className="text-sm font-bold">Tickets</h6>
                <MdKeyboardArrowRight color="black"/>
            </div>
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item>
            <div className="w-full flex justify-between items-center">
                <h6 className="text-sm font-bold">Support</h6>
                <MdKeyboardArrowRight color="black"/>
            </div>
        </Menu.Item>
        <Menu.Item color="red">Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
