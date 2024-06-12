/* eslint-disable @typescript-eslint/no-explicit-any
 */
import { VscTypeHierarchy } from "react-icons/vsc";
import { TiLocation } from "react-icons/ti";
import { Menu } from "@mantine/core";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { notifications } from "@mantine/notifications";

const ViewAccomCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full pl-4 py-2 shadow-sm shadow-[#ccccccba] flex justify-start gap-4 cursor-pointer relative">
      <img
        src={data.images[0]}
        alt=""
        className="w-[15vh] h-[15vh] rounded-sm"
      />
      <div className="h-full flex flex-col gap-1">
        <h1 className="font-extrabold">{data.name}</h1>
        <p className="text-sm w-full flex items-center gap-1">
          <VscTypeHierarchy />
          {data.type}
        </p>
        <h6 className="text-xs font-bold w-full flex items-center gap-1">
          <TiLocation />
          {`${data.location.text.slice(0, 10)} . . .`}
        </h6>
      </div>
      <div className="absolute right-4 top-3">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <button><HiOutlineDotsVertical /></button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Actions</Menu.Label>
            <Menu.Item onClick={()=> notifications.show({message: "testting...."})}>View</Menu.Item>
            <Menu.Item>Update</Menu.Item>
            <Menu.Item>Delete</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};
export default ViewAccomCard;
