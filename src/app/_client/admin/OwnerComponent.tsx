/* eslint-disable @typescript-eslint/no-explicit-any */
// import { PhoneIcon } from 'lucide-react';
import { AvatarGenerator } from "random-avatar-generator";
import { HiDotsVertical } from "react-icons/hi";
import {
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuTarget,
} from "@mantine/core";
// import { FaEnvelope } from 'react-icons/fa';
const generator = new AvatarGenerator();
generator.generateRandomAvatar();
const OwnerComponent = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="w-[330px] h-[350px] flex flex-col rounded-lg items-center gap-3 shadow-lg relative">
      <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#809FB8]">
        {/* <img src={generator.generateRandomAvatar('avatar')} className='w-24 h-24 rounded-full'/> */}
      </div>
      <h2>{data?.firstName ?? "Not Named"}</h2>
      <h1 className="font-semibold text-base w-[75%] text-start flex items-center gap-3">
        {/* <PhoneIcon color='black' size={17}/> */}
        {data.phone}
      </h1>
      <h1 className="font-semibold text-base w-[75%] text-start flex items-center gap-3">
        {/* <FaEnvelope color='black' size={17}/> */}
        {data.email}
      </h1>
      <button className="py-3 px-8 bg-blue-300 rounded-md">
        View Accommodations
      </button>

      <Menu width={100}>
        <MenuTarget>
          <button className="absolute top-3 right-2">
            <HiDotsVertical size={17} color="black" />
          </button>
        </MenuTarget>
        <MenuDropdown>
          <MenuItem>Edit Owner</MenuItem>
          <MenuDivider />
          <MenuItem>Delete Account</MenuItem>
        </MenuDropdown>
      </Menu>
    </div>
  );
};
export default OwnerComponent;
