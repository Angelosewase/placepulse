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
import { PhoneIcon } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
// import { FaEnvelope } from 'react-icons/fa';
const generator = new AvatarGenerator();
generator.generateRandomAvatar();
const OwnerComponent = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="w-[300px] h-[300px] flex flex-col rounded-xl items-center gap-4 shadow bg-white py-6  relative transition-transform transform hover:scale-105 hover:shadow-md">
      
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 shadow-lg overflow-hidden">
        {/* Optional Avatar Image */}
        {/* <img src={generator.generateRandomAvatar('avatar')} className='w-24 h-24 object-cover' alt="Avatar" /> */}
      </div>

      {/* Owner's Name */}
      <h2 className="text-xl font-semibold text-gray-800 mt-2">
        {data?.firstName ?? "Not Named"}
      </h2>

      {/* Contact Info */}
      <div className="flex flex-col items-start w-[75%] text-gray-600 mt-1 space-y-1">
        <div className="flex items-center gap-3 text-sm">
          <PhoneIcon size={17}/>
          <span>{data.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <FaEnvelope size={17}/>
          <span>{data.email}</span>
        </div>
      </div>

      {/* Action Button */}
      <button className="mt-4 py-2 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all">
        View Accommodations
      </button>

      {/* Options Menu */}
      <Menu width={150}>
        <MenuTarget>
          <button className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm">
            <HiDotsVertical size={20} color="gray-700" />
          </button>
        </MenuTarget>
        <MenuDropdown className="rounded-lg shadow-lg bg-white text-gray-700">
          <MenuItem className="hover:bg-gray-100 px-4 py-2 rounded-md">Edit Owner</MenuItem>
          <MenuDivider />
          <MenuItem className="hover:bg-gray-100 px-4 py-2 rounded-md">Delete Account</MenuItem>
        </MenuDropdown>
      </Menu>
    </div>
  );
};


export default OwnerComponent;
