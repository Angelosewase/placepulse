/* eslint-disable @typescript-eslint/no-explicit-any */
import BookingViewCard from "../../../../components/Cards/BookingViewCard";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const BookingHistory = () => {
  const { bookings, loading } = useSelector((state: any) => state.bookings);
  console.log(bookings);
  return (
    <div className="w-full mb-20">
      <h1 className="text-3xl font-extrabold">Reservations/Bookings</h1>
      <div className="w-full flex flex-col gap-3 mt-10 ">
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <ClipLoader size={23} color="black" />
          </div>
        ) : bookings?.length > 0 ? (
          bookings?.map((booking: any, index: any) => {
            return <BookingViewCard data={booking} key={index} />;
          })
        ) : (
          <div className="w-full flex justify-center items-center mt-[10vh]">
            <h1 className="font-bold">No Bookings Found!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;
