import { format } from "date-fns";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";

const BookingLandCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full px-4 py-2 cursor-pointer relative rounded-lg">
      <img
        src={data.image}
        alt=""
        className="w-full h-[25rem] absolute top-0 left-0 rounded-lg z-1 object-cover"
      />
      <div className="w-full h-[25rem] px-4 pb-6 flex flex-col items-start justify-end absolute top-0 left-0 z-20 bg-[#36353518] rounded-lg">
        <div className="w-full flex justify-between items-center">
            <h1 className="font-extrabold text-white text-xl">{data.name}</h1>
            <button className="flex gap-1 p-1 py-2 bg-neutral-700 bg-opacity-50 items-center px-3">
                <GoHeartFill color="red" size={20}/>
                <h1 className="font-extrabold text-white">{Math.floor(Math.random() * 1000)} Likes</h1>
            </button>
        </div>
        <div className="w-full flex justify-between items-center">
            <p className="text-sm text-white font-semibold">Check In: {format(data?.check_in, "dd MMMM")}</p>
            <p className="text-sm text-white font-semibold">Check Out: {format(data?.check_out, "dd MMMM")}</p>
        </div>        
        <div className="w-full flex justify-between items-center">
            <p className="text-sm text-white font-semibold">Amount Paid: {data?.payment_total} <span className="font-extrabold">Paid {data?.payment_type}</span></p>
            <Link to={`/booking/info/${data?.id}`} className="font-semibold text-white">View More</Link>
        </div>        
      </div>
    </div>
  );
};
export default BookingLandCard;
