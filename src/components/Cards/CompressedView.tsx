import { format } from "date-fns";
import { GoClockFill } from "react-icons/go";

/* eslint-disable @typescript-eslint/no-explicit-any */
const CompressedView = ({ data }: { data: any }) => {
  return (
    <div className="w-full py-2 flex justify-between px-4 shadow-sm shadow-gray-200">
      <div className="w-full flex items-center justify-between">
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
              className={`text-xs font-extrabold mt-3 mb-[-0.71rem]`}
              style={{ fontFamily: "Montserrat" }}
            >
              FRW {data.payment_total}
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
          <div className="flex flex-col gap-3">
          <div className=" pl-4 grid grid-cols-2 gap-5">
            <div className="w-full flex items-center gap-2">
              <span className="p-2 rounded-md bg-[#EBF6F2]">
                <GoClockFill color="#0075FF" />
              </span>
              <div>
                <h1 className="text-xs font-bold text-[#00000083]">
                  Check-In Time
                </h1>
                <h1 className="text-sm font-medium">{format(data.check_in, "dd MMMM")}</h1>
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
                <h1 className="text-sm font-medium">{format(data.check_out, "dd MMMM")}</h1>
              </div>
            </div>
          </div>
          <h1 className="pl-4 text-sm font-medium text-black">Booked By: <span className="font-bold">{data.phone}</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompressedView;
