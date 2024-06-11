import { useParams } from "react-router-dom";
import { accommodations_data } from "../../constants/dummy";
// import { FaLocationDot } from "react-icons/fa6";
import checkInOut from "../../assets/images/checkInOut.png";
import { Divider, Fieldset } from "@mantine/core";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import PaymentMethodCard from "../../components/Cards/PaymentMethods";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDisclosure } from "@mantine/hooks";
import AddCardModal from "../../components/Modals/addCardModal";
import PaymentAuthorizationModal from "../../components/Modals/PaymentAuthorizationModal";

const CheckoutPage = () => {
  const params = useParams();
  const accommodation_id = params.id ?? 0;
  const accommodation = accommodations_data[Number(accommodation_id)];
  const [isAddCardOpen, { open: openAddCard, close: closeAddCard }] =
    useDisclosure();
  const [isPaymentOpen, { open: openPayment, close: closePayment }] =
    useDisclosure();
  // const [selected, setSelected]= useState(false);
  return (
    <div className="pb-[50vh] px-4 md:px-20">
      <div className="w-full flex justify-start items-center mt-5">
        <button onClick={() => history.back()} className="ml-[-1rem] p-3">
          <IoChevronBackCircleOutline color="black" size={23} />
        </button>
        <h1 className="text-2xl font-extrabold">Proceed to payment </h1>
      </div>
      <div className="w-full flex flex-col justify-between md:flex-row gap-10 mt-4">
        <div className="w-full md:w-[50%]">
          <div className="w-full rounded-sm p-3 shadow shadow-[#dedede]">
            <h1>Booking Details</h1>
            <div className="w-full flex justify-between gap-5 mt-6">
              <img
                src={accommodation.roomTypes[0].images[0]}
                alt=""
                width={130}
                height={130}
                className="rounded-lg"
              />
              <div className="w-[70%] flex flex-col">
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
            <div className="w-full flex justify-between mt-4">
              <div>
                <h1 className="text-lg font-extrabold">{"Thursday, Dec 8"}</h1>
                <p className="text-sm">Check In</p>
              </div>
              <img
                src={checkInOut}
                alt=""
                className="object-fit select-none w-[14vw]"
              />
              <div>
                <h1 className="text-lg font-extrabold">{"Friday, Dec 9"}</h1>
                <p className="text-sm">Check Out</p>
              </div>
            </div>
            <Divider className="mt-6" />
            <div className="w-full flex justify-between mt-5">
              <h2 className="font-bold">Total Price</h2>
              <h1 className="font-extrabold text-lg text-[#0075FF]">
                {16894000}/FRW
              </h1>
            </div>
          </div>
          <h1 className="text-sm text-right font-medium text-[#112211] mt-4">
            Your Booking is highly protected by{" "}
            <span className="text-black font-extrabold">Place Pulse</span>
          </h1>
        </div>
        <div className="w-full md:w-[40%] shadow shadow-[#dedede] p-3">
          <h1 className="mb-3">Payment Details</h1>
          <Fieldset
            legend="Payment Method"
            className="w-full flex overflow-x-auto space-x-4 pay_meth_container"
          >
            <PaymentMethodCard
              name="MTN"
              phone="+250788460119"
              className="flex-shrink-0"
            />
            <div
              onClick={openAddCard}
              className="w-[328px] h-[160px] flex-shrink-0 flex items-center justify-center border-2 border-dashed divide-dashed border-[#396FF9] rounded-xl cursor-pointer"
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <IoIosAddCircleOutline color="#396FF9" size={39} />
                <h6 className="text-sm">Add a new card</h6>
              </div>
            </div>
          </Fieldset>
          <button
            onClick={openPayment}
            className="w-full py-3 mt-3 rounded-sm flex items-center font-extrabold justify-center bg-[#396FF9] text-white"
          >
            Pay {16894000} FRW
          </button>
        </div>
        <PaymentAuthorizationModal
          opened={isPaymentOpen}
          close={closePayment}
        />
        <AddCardModal opened={isAddCardOpen} close={closeAddCard} />
      </div>
    </div>
  );
};

export default CheckoutPage;
