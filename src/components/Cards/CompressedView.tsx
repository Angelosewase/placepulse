import { GoClockFill } from "react-icons/go";

/* eslint-disable @typescript-eslint/no-explicit-any */
const CompressedView = ({ data }: { data: any }) => {
  return (
    <div className="w-full py-2 flex justify-between px-4 shadow-sm shadow-gray-200">
      <div className="w-full flex items-center justify-between">
        <img
          src={data.image}
          width={80}
          height={80}
          className="rounded-lg object-contain"
        />
        <h1 className="text-md font-extrabold">{data.owner?.email}</h1>
        <div className="flex gap-2 items-center">
          <hr className="border border-[#D7E2EE] h-[4rem]" />
          <div className=" pl-4 grid grid-cols-2 gap-5">
            <div className="w-full flex items-center gap-2">
              <span className="p-2 rounded-md bg-[#EBF6F2]">
                <GoClockFill color="#0075FF" />
              </span>
              <div>
                <h1 className="text-xs font-bold text-[#00000083]">
                  Check-In Time
                </h1>
                <h1 className="text-sm font-medium">{data.checkIn}</h1>
              </div>
            </div>
            <div className="w-full flex items-center gap-2">
              <span className="p-2 rounded-md bg-[#EBF6F2]">
                <GoClockFill color="#0075FF" />
              </span>
              <div>
                <h1 className="text-xs font-bold text-[#00000083]">
                  Check-Out Time
                </h1>
                <h1 className="text-sm font-medium">{data.checkOut}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompressedView;
