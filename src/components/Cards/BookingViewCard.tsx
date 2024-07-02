import { GoClockFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { formatDate } from "../../utils/funcs/formatter";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BookingViewCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full pt-3 pb-5 flex justify-between px-4 shadow-md shadow-gray-200">
      <div className="w-[50%] flex items-center justify-between">
        <div className="flex justify-between items-center gap-4">
          <img
            src={data.image}
            width={80}
            height={80}
            className="rounded-lg object-contain"
          />
          <div>
            <h1 className="text-lg font-extrabold">
              {data.name.length > 18
                ? `${data.name.slice(0, 18)} . . .`
                : data.name}
            </h1>
            <h1
              className={`text-xs font-extrabold mt-3 ${data.status === "PENDING" ? "text-red-600" : "text-green-600"}`}
              style={{ fontFamily: "Montserrat" }}
            >
              {data.status}
            </h1>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <hr className="border border-[#D7E2EE] h-[4rem]" />
          <div className=" pl-4 grid grid-cols-1 gap-5">
            <div className="w-full flex items-center gap-2">
              <span className="p-2 rounded-md bg-[#EBF6F2]">
                <GoClockFill color="#0075FF" />
              </span>
              <div>
                <h1 className="text-xs font-bold text-[#00000083]">
                  Check-In Time
                </h1>
                <h1 className="text-sm font-medium">
                  {formatDate(data.check_in)}
                </h1>
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
                <h1 className="text-sm font-medium">
                  {formatDate(data.check_out)}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <button className="px-6 py-3 rounded-sm flex items-center font-light justify-center bg-[#699BFE] text-white">
          Download Info
        </button>
        <button className="px-4 py-4 rounded-sm flex items-center font-extrabold justify-center border border-[#699BFE] text-white">
          <IoIosArrowForward color="black" />
        </button>
      </div>
    </div>
  );
};

export default BookingViewCard;
