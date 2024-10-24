import { format } from "date-fns";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";

const BookingLandCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-b-lg shadow-xl overflow-hidden relative group hover:scale-105 transition-transform duration-300 ease-in-out  text-black">
      {/* Image */}
      <img
        src={data.image}
        alt=""
        className="w-full h-[20rem] object-cover rounded-t-xl group-hover:brightness-75 transition duration-300"
      />

      {/* Overlay */}
 

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex flex-col space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ">{data.name}</h1>
          <button className="flex items-center gap-1 text-sm bg-neutral-800 bg-opacity-70 px-2 py-1 rounded text-white shadow">
            <GoHeartFill color="red" size={18} />
            <span>{Math.floor(Math.random() * 1000)} Likes</span>
          </button>
        </div>

        {/* Dates */}
        <div className="flex justify-between text-sm ">
          <p>Check In: {format(new Date(data?.check_in), "dd MMM")}</p>
          <p>Check Out: {format(new Date(data?.check_out), "dd MMM")}</p>
        </div>

        {/* Payment & Link */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-black">
            Amount Paid: <span className="font-bold">{data?.payment_total}</span>{" "}
            <span className="block text-xs">Paid via {data?.payment_type}</span>
          </p>
          <Link
            to={`/booking/info/${data?.id}`}
            className="text-black font-semibold underline hover:text-black transition"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingLandCard;
