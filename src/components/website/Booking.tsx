/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import CheckInCheckOutDates from "../Calendar/CheckInOut";
import { differenceInDays, format } from "date-fns";
import { Collapse, Radio, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { IoChevronBackCircleOutline } from "react-icons/io5";
import LoginModal from "../Modals/LoginModal";
import { AxiosAPI } from "../../utils/AxiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { ADD_BOOKING } from "../../actions/BookingActions";
import { Helmet } from "react-helmet";
const BookingPage = () => {
  const params = useParams();
  const accommodation_id = params.id ?? "";
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [accommodation, setAccommodation] = useState<any>();
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  const [bookedDays, setBookedDays] = useState([]);
  useEffect(() => {
    setLoading(true);
    AxiosAPI.get(`/accommodation/get/${accommodation_id}`)
      .then((res) => {
        setAccommodation(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));

    AxiosAPI.get(`/booking/booked_days/${accommodation_id}`)
      .then((res) => {
        setBookedDays(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [paymentPortion, setPaymentPortion] = useState("full");
  const [openedInfo, { toggle }] = useDisclosure(false);
  const [isPayment, { open, close }] = useDisclosure(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dateDifference =
    checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;

  const formatDate = (date: Date | null, text?: string) => {
    return date ? format(date, "MMMM dd") : `Select ${text}`;
  };

  const priceToPay = () => {
    const multiplier = paymentPortion == "full" ? 1 : 0.5;
    const dateDiff = dateDifference === 0 ? 1 : dateDifference;
    // return dateDiff * multiplier * accommodation.roomTypes[0].price;
    return dateDiff * multiplier * accommodation?.price;
  };

  const handlePaymentCheckout = () => {
    if (!checkIn || !checkOut) {
      setError("Please Select Check and Checkout Dates");
      return;
    }
    const bookingDetails = {
      accommodationId: accommodation_id,
      checkIn: checkIn,
      checkOut: checkOut,
      paymentType: paymentPortion,
      image: accommodation?.images[0],
      paymentMethod: null,
      paymentTotal: priceToPay(),
      name: accommodation?.name,
    };
    dispatch({ type: ADD_BOOKING, payload: bookingDetails });
    if (!isLoggedIn) {
      open();
    } else {
      navigate(`/booking/place/${accommodation_id}/checkout`);
    }
  };

  return (
    <div className="w-full md:px-12  pt-3 pb-[50vh]">
      <Helmet>
        <title>Booking - Place Pulse</title>
      </Helmet>
      {/* skeletons */}
      {loading ? (
        <div className="w-full">
          <div className="w-full flex justify-start mb-5">
            <Skeleton height={30} width={30} />
          </div>
          <div className="w-full flex justify-between md:px-8">
            <div className="w-[63%]">
              <Skeleton height={30} width="70%" mb="md" />
              <Skeleton height={100} mb="md" />
              <div className="w-full flex items-center justify-between mt-5">
                <Skeleton height={30} width="45%" mb="md" />
                <Skeleton height={30} width="45%" mb="md" />
              </div>
              <Skeleton height={80} mb="md" />
              <Skeleton height={80} mb="md" />
            </div>
            <div className="w-[30%]">
              <Skeleton height={300} mb="md" />
              <Skeleton height={40} mb="md" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full flex justify-start mb-4">
  
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between md:px-8 gap-6">
            <div className="w-full md:w-[63%]">
              <h1 className="text-2xl font-bold text-gray-800 mb-3">
                {accommodation?.name}
              </h1>

              <div className="border border-[#699BFE] p-4 rounded-lg mt-5">
                <h1 className="text-xl font-bold">{accommodation?.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <FaLocationDot color="#112211d1" />
                  <h6 className="text-sm text-gray-600">
                    {accommodation?.location}
                  </h6>
                </div>
              </div>

              <div className="w-full flex flex-wrap justify-between mt-5 gap-4">
                <div className="w-[48%]">
                  <h1 className="font-semibold text-sm">Check In</h1>
                  <h1 className="text-2xl font-bold">
                    {formatDate(checkIn, "Check In")}
                  </h1>
                  <div className="border rounded-md mt-4 p-3 shadow bg-white">
                    <CheckInCheckOutDates
                      value={checkIn}
                      onChange={setCheckIn}
                      min={new Date()}
                      max={checkOut}
                      bookedDays={bookedDays}
                    />
                  </div>
                </div>
                <div className="w-[48%]">
                  <h1 className="font-semibold text-sm">Check Out</h1>
                  <h1 className="text-2xl font-bold">
                    {formatDate(checkOut, "Check Out")}
                  </h1>
                  <div className="border rounded-md mt-4 p-3 ">
                    <CheckInCheckOutDates
                      min={checkIn}
                      value={checkOut}
                      onChange={setCheckOut}
                      bookedDays={bookedDays}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div
                  onClick={() => setPaymentPortion("full")}
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    paymentPortion === "full"
                      ? "bg-blue-600 text-white"
                      : "bg-white shadow-lg"
                  }`}
                >
                  <div>
                    <h1 className="font-bold">Pay in full</h1>
                    <p className="text-sm">Pay the total and you're all set</p>
                  </div>
                  <Radio
                    checked={paymentPortion === "full"}
                    variant="outline"
                    color={paymentPortion === "full" ? "white" : "black"}
                  />
                </div>

                <div
                  onClick={() => setPaymentPortion("partial")}
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    paymentPortion === "partial"
                      ? "bg-blue-600 text-white"
                      : "bg-white shadow-lg"
                  }`}
                >
                  <div>
                    <h1 className="font-bold">Pay part now, part later</h1>
                    <p className="text-sm">
                      Pay {priceToPay()} now, and the rest will be automatically
                      charged to the same payment method on Nov 14, 2022. No
                      extra fees.
                    </p>
                    <button
                      className="text-sm underline mt-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggle();
                      }}
                    >
                      More Info
                    </button>
                    <Collapse in={openedInfo}>
                      <p className="mt-3">
                        Pay {priceToPay()} now, and the rest will be
                        automatically charged to the same payment method on Nov
                        14, 2022. No extra fees.
                      </p>
                    </Collapse>
                  </div>
                  <Radio
                    checked={paymentPortion === "partial"}
                    variant="outline"
                    color={paymentPortion === "partial" ? "white" : "black"}
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[30%]">
              <div className="w-full bg-white shadow-md rounded-lg p-5">
                <div className="flex gap-4 items-center">
                  <img
                    src={accommodation?.images[0]}
                    alt={accommodation?.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <h1 className="text-md font-bold">{`${accommodation?.name?.slice(
                      0,
                      20
                    )}...`}</h1>
                    <h1 className="text-lg font-extrabold">
                      {accommodation?.type}
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="px-2 py-1 border border-[#8DD3BB] rounded-md font-bold">
                        {accommodation?.rating}
                      </button>
                      <h5 className="text-xs font-semibold">Very Good</h5>
                      <p className="text-xs font-medium">
                        {Math.floor(Math.random() * 1000) + 1} Reviews
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <h1 className="text-sm font-bold">Price Details</h1>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-medium">Base Fare</h1>
                  <p className="font-bold">{priceToPay()}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-medium">Discount</h1>
                  <p className="font-bold">{0}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-medium">Taxes</h1>
                  <p className="font-bold">{0}</p>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between items-center">
                  <h1 className="text-sm font-medium">Total</h1>
                  <p className="font-bold">{priceToPay()}</p>
                </div>
              </div>

              <button
                onClick={handlePaymentCheckout}
                className="w-full py-3 mt-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-300"
              >
                Pay {priceToPay()} FRW
              </button>
              {error && (
                <p className="text-red-500 font-bold text-sm mt-2">{error}</p>
              )}
            </div>
          </div>

          {!isLoggedIn && (
            <LoginModal
              id={accommodation_id}
              isPayment={isPayment}
              closePayment={close}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BookingPage;
