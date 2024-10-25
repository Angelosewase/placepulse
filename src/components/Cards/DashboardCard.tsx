/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineRise } from "react-icons/ai";
import React from "react";

interface DashboardCardProps {
  color: string;
  data: {
    title: string;
    amount: string | number;
  };
  children?: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = (props) => {
  const { color, data, children } = props;

  return (
    <div className="bg-white flex gap-3 items-center px-4  h-[100px] rounded-lg shadow-md shadow-gray-100 hover:shadow-md hover:shadow-gray-200 transition-shadow duration-300 ease-in-out cursor-pointer flex-1">
      <div className={`p-2 rounded-full bg-[${color}] shadow-inner`}>{children}</div>

      <div className="flex flex-col border-l-2 border-black border-l-myBlue pl-3 w-full">
        <h1 className="text-lg font-semibold text-gray-500">{data.title}</h1>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold text-gray-900">{data.amount}</h1>
          <div className="flex items-center  text-green-600 font-semibold bg-green-100 px-1 py-0 rounded">
            +{Math.floor(Math.random() * 10)}%
            <AiOutlineRise color="green" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
