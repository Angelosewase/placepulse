/* eslint-disable @typescript-eslint/no-explicit-any */
import BookingViewCard from "../../../../components/Cards/BookingViewCard";

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
const BookingHistory = () => {
  return (
    <div className="w-full mb-20">
      <h1 className="text-3xl font-extrabold">Reservations/Bookings</h1>
      <div className="w-full flex flex-col gap-3 mt-10 ">
        {bookings.map((booking: any, index: any) => {
          return <BookingViewCard data={booking} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BookingHistory;
