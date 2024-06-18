/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoReloadSharp } from "react-icons/io5";
import BookingViewCard from "../../../components/Cards/BookingViewCard";

export const bookings = [
  {
    owner: {
      name: "John",
      email: "john.doe@gmail.com",
      phone: "+250788460119",
    },
    checkIn: "12/02/2024",
    checkOut: "16/02/2024",
    paymentType: "full",
    accommodationId: "376ad137-22a8-442f-a43c-27f0c46b8417",
    image:
      "https://res.cloudinary.com/diyhjfgqr/image/upload/v1718646366/uploads/ff3eavyuz38utzr4tbxa.png",
    paymentMethod: "MTN",
    paymentAmount: 230500,
  },
  {
    owner: {
      name: "John",
      email: "john.doe@gmail.com",
      phone: "+250788460119",
    },
    checkIn: "12/02/2024",
    checkOut: "16/02/2024",
    paymentType: "full",
    accommodationId: "376ad137-22a8-442f-a43c-27f0c46b8417",
    image:
      "https://res.cloudinary.com/diyhjfgqr/image/upload/v1718646366/uploads/ff3eavyuz38utzr4tbxa.png",
    paymentMethod: "MTN",
    paymentAmount: 230500,
  },
  {
    owner: {
      name: "John",
      email: "john.doe@gmail.com",
      phone: "+250788460119",
    },
    checkIn: "12/02/2024",
    checkOut: "16/02/2024",
    paymentType: "full",
    accommodationId: "376ad137-22a8-442f-a43c-27f0c46b8417",
    image:
      "https://res.cloudinary.com/diyhjfgqr/image/upload/v1718646366/uploads/ff3eavyuz38utzr4tbxa.png",
    paymentMethod: "MTN",
    paymentAmount: 230500,
  },
  {
    owner: {
      name: "John",
      email: "john.doe@gmail.com",
      phone: "+250788460119",
    },
    checkIn: "12/02/2024",
    checkOut: "16/02/2024",
    paymentType: "full",
    accommodationId: "376ad137-22a8-442f-a43c-27f0c46b8417",
    image:
      "https://res.cloudinary.com/diyhjfgqr/image/upload/v1718646366/uploads/ff3eavyuz38utzr4tbxa.png",
    paymentMethod: "MTN",
    paymentAmount: 230500,
  },
  {
    owner: {
      name: "John",
      email: "john.doe@gmail.com",
      phone: "+250788460119",
    },
    checkIn: "12/02/2024",
    checkOut: "16/02/2024",
    paymentType: "full",
    accommodationId: "376ad137-22a8-442f-a43c-27f0c46b8417",
    image:
      "https://res.cloudinary.com/diyhjfgqr/image/upload/v1718646366/uploads/ff3eavyuz38utzr4tbxa.png",
    paymentMethod: "MTN",
    paymentAmount: 230500,
  },
  {
    owner: {
      name: "John",
      email: "john.doe@gmail.com",
      phone: "+250788460119",
    },
    checkIn: "12/02/2024",
    checkOut: "16/02/2024",
    paymentType: "full",
    accommodationId: "376ad137-22a8-442f-a43c-27f0c46b8417",
    image:
      "https://res.cloudinary.com/diyhjfgqr/image/upload/v1718646366/uploads/ff3eavyuz38utzr4tbxa.png",
    paymentMethod: "MTN",
    paymentAmount: 230500,
  },
];
const OwnerBookings = () => {
  return (
    <div className="w-full mb-20">
      <div className="w-full flex justify-between items-center">
        <div className="w-full">
          <h1 className="text-2xl font-extrabold">Bookings/Tickets</h1>
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
        {bookings.map((booking: any, index: any) => {
          return <BookingViewCard data={booking} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OwnerBookings;
