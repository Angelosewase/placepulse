/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import BookingViewCard from "../../../../components/Cards/BookingViewCard";
import { AxiosAPI } from "../../../../utils/AxiosInstance";
import { notifications } from "@mantine/notifications";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state: any) => state.auth);
  const getAllBookings = async () => {
    setLoading(true);
    AxiosAPI.get("/booking/getMine", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setBookings(res.data.data);
      })
      .catch((err) => {
        notifications.show({
          message: err.response ?? err.message,
        });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getAllBookings();
  }, []);
  return (
    <div className="w-full mb-20">
      <h1 className="text-3xl font-extrabold">Reservations/Bookings</h1>
      <div className="w-full flex flex-col gap-3 mt-10 ">
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <ClipLoader size={23} color="black" />
          </div>
        ) : bookings.length > 0 ? (
          bookings.map((booking: any, index: any) => {
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
