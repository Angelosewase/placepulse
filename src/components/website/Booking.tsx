import { useState } from "react";
import { useParams } from "react-router-dom";
import { accommodations_data } from "../../constants/dummy";
import { FaLocationDot } from "react-icons/fa6";
import CheckInCheckOutDates from "../Calendar/CheckInOut";
import { format } from "date-fns";
import { Collapse, Radio } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import LoginModal from "../Modals/LoginModal";

const BookingPage = () => {
  const params = useParams();
  const accommodation_id = params.id ?? 0;
  const accommodation = accommodations_data[Number(accommodation_id)];
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [paymentPortion, setPaymentPortion] = useState("full");
  const [openedInfo, { toggle }] = useDisclosure(false);
  const [isPayment, { open, close }] = useDisclosure(false);
  // const navigate = useNavigate();

  const formatDate = (date: Date | null, text?: string) => {
    return date ? format(date, "MMMM dd") : `Select ${text}`;
  };

  return (
    <div className="w-full md:px-12 pt-5 pb-[50vh]">
      <div className="w-full flex justify-start">
        <button onClick={() => history.back()} className="p-3">
          <IoChevronBackCircleOutline color="black" size={23} />
        </button>
      </div>
      <div className="w-full flex justify-between md:px-8">
        <div className="w-[63%]">
          <div className="w-full">
            <h1 className="w-[70%] text-xl text-start font-extrabold">
              {accommodation.roomTypes[0].type}
            </h1>
            <div className="md:w-[80%] border border-[#699BFE] py-3 rounded-lg pl-3 mt-5">
              <h1 className="text-xl font-extrabold">{accommodation.name}</h1>
              <div className="flex items-center gap-3">
                <FaLocationDot color="#112211d1" />
                <h6 className="text-[#112211d1] text-sm font-medium">
                  {accommodation.location.text}
                </h6>
              </div>
            </div>
            <div className="w-full flex items-center justify-between mt-5">
              <div>
                <h1 className="font-semibold text-xs">Check In</h1>
                <h1 className="text-2xl font-extrabold">
                  {formatDate(checkIn, "Check In")}
                </h1>
                <div className="border rounded-sm mt-4 p-3">
                  <CheckInCheckOutDates value={checkIn} onChange={setCheckIn} />
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-sm">Check Out</h1>
                <h1 className="text-2xl font-extrabold">
                  {formatDate(checkOut, "Check Out")}
                </h1>
                <div className="border rounded-sm mt-4 p-3">
                  <CheckInCheckOutDates
                    value={checkOut}
                    onChange={setCheckOut}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 mt-5">
              <div
                onClick={() => setPaymentPortion("full")}
                className={`w-full flex items-center justify-between px-3 rounded-lg py-3 cursor-pointer ${
                  paymentPortion === "full"
                    ? "bg-[#1877F2]"
                    : " shadow shadow-gray-300"
                }`}
              >
                <div>
                  <h1
                    className={`${paymentPortion === "full" && "text-white"} font-extrabold text-md`}
                  >
                    Pay in full
                  </h1>
                  <p
                    className={`${paymentPortion === "full" && "text-white"} font-medium text-xs`}
                  >
                    Pay the total and you're all set
                  </p>
                </div>
                <Radio
                  checked={paymentPortion === "full"}
                  variant="outline"
                  className=""
                  color="#fff"
                  onChange={() => {}}
                  label=""
                />
              </div>
              <div
                onClick={() => setPaymentPortion("partial")}
                className={`w-full flex items-center justify-between px-3 rounded-lg py-3 cursor-pointer ${
                  paymentPortion === "partial"
                    ? "bg-[#1877F2]"
                    : " shadow shadow-gray-300"
                }`}
              >
                <div className="w-[70%]">
                  <h1
                    className={`${paymentPortion === "partial" && "text-white"} font-extrabold text-md`}
                  >
                    Pay part now, part later
                  </h1>
                  <p
                    className={`${paymentPortion === "partial" && "text-white"} font-medium text-xs`}
                  >
                    Pay $207.43 now, and the rest ($207.43) will be
                    automatically charged to the same payment method on Nov 14,
                    2022. No extra fees.
                  </p>
                  <button
                    className="text-sm underline mt-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle();
                    }}
                  >
                    More Info
                  </button>
                  <Collapse in={openedInfo}>
                    <p
                      className={`${paymentPortion === "partial" && "text-white"} font-medium text-xs`}
                    >
                      Pay $207.43 now, and the rest ($207.43) will be
                      automatically charged to the same payment method on Nov
                      14, 2022. No extra fees.
                    </p>
                  </Collapse>
                </div>
                <Radio
                  checked={paymentPortion === "partial"}
                  variant="outline"
                  className=""
                  color="#fff"
                  onChange={() => {}}
                  label=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="w-full h-fit shadow shadow-[#c4c4c4] rounded-lg p-2">
            <div className="w-full flex justify-between gap-5">
              <img
                src={accommodation.roomTypes[0].images[0]}
                alt=""
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <h1 className="text-md font-semibold text-[#444343]">{`${accommodation.name.slice(0, 20)} ...`}</h1>
                <h1 className="text-lg font-extrabold">
                  {accommodation.roomTypes[0].type}
                </h1>
                <div className="h-[2.5rem] flex items-center gap-3 mt-2">
                  <button className="w-[3rem] h-full rounded-sm border border-[#8DD3BB] font-bold">
                    {accommodation.rating}
                  </button>
                  <h5 className="text-xs font-extrabold">Very Good</h5>
                  <p className="text-xs font-semibold">
                    {Math.floor(Math.random() * 1000) + 1} Reviews
                  </p>
                </div>
              </div>
            </div>
            <hr className="hotel_divider mt-5 mb-3" />
            <h1 className="text-sm font-medium text-[#112211]">
              Your Booking is protected by{" "}
              <span className="text-black font-extrabold">Place Pulse</span>
            </h1>
            <hr className="hotel_divider mt-3 mb-5" />

            <div>
              <h1 className="text-sm font-bold mb-2">Price Details</h1>
              <div className="w-full flex justify-between items-center mb-2">
                <h1 className="text-sm font-medium">Base Fare</h1>
                <p className="text-md font-bold">
                  {accommodation.roomTypes[0].price}
                </p>
              </div>
              <div className="w-full flex justify-between items-center mb-2">
                <h1 className="text-sm font-medium">Discount</h1>
                <p className="text-md font-bold">{0}</p>
              </div>
              <div className="w-full flex justify-between items-center mb-2">
                <h1 className="text-sm font-medium">Taxes</h1>
                <p className="text-md font-bold">{0}</p>
              </div>
              <hr className="hotel_divider mt-5 mb-3" />
              <div className="w-full flex justify-between items-center mb-2">
                <h1 className="text-sm font-medium">Total</h1>
                <p className="text-md font-bold">
                  {accommodation.roomTypes[0].price}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={open}
            className="w-full py-3 mt-3 rounded-sm flex items-center font-extrabold justify-center bg-[#396FF9] text-white"
          >
            Pay {accommodation.roomTypes[0].price} FRW
          </button>
        </div>
      </div>
      <LoginModal isPayment={isPayment} closePayment={close} />
    </div>
  );
};

export default BookingPage;
