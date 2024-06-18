/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineRise } from "react-icons/ai";

const DashboardCard = ({ data, color }: { data: any; color: string }) => {
  return (
    <div
      className={`w-full h-full rounded-xl flex flex-col gap-3 bg-[${color}] p-4 cursor-pointer`}
    >
      <h1 className="text-lg font-bold">{data.title}</h1>
      <div className="w-full flex items-center justify-between mt-7">
        <h1 className="text-2xl font-extrabold">{data.amount}</h1>
        <h1 className="flex items-center gap-2 font-semibold">
          +{Math.floor(Math.random() * 10)}%{" "}
          <span>
            <AiOutlineRise color="black" />
          </span>
        </h1>
      </div>
    </div>
  );
};
export default DashboardCard;
