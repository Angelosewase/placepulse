/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoReloadSharp } from "react-icons/io5";
import BookingViewCard from "../../../components/Cards/BookingViewCard";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
const AdminBookings = () => {
  const { bookings, loading } = useSelector((state: any) => state.bookings);
  return (
    <div className="w-full  ">
      <div className="w-full flex justify-between items-center">
        <div className="w-full">
          <h1 className="text-2xl font-extrabold">Bookings/Invoices</h1>
          <p>All customer bookings</p>
        </div>
        <div className="w-full flex justify-end gap-2 mt-10">
          <button className="px-4 py-2 border border-blue-300 font-bold text-sm">
            View more
          </button>
          <button
            className="flex items-center gap-2 bg-blue-500 rounded-sm py-2 px-4"
            // onClick={fetch}
          >
            <h1 className="font-bold text-white">Reload</h1>
            <IoReloadSharp color="white" size={23} />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 mt-10 ">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ClipLoader size={20} color="black" />
          </div>
        ) : bookings.length > 0 ? (
          bookings.map((booking: any, index: any) => {
            return <BookingViewCard data={booking} key={index} />;
          })
        ) : (
          <div className="w-full flex justify-center ">
            <h1 className="mt-10 font-extrabold">No Bookings Found!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBookings;
