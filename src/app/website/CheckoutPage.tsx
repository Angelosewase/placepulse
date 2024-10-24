/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import checkInOut from "../../assets/images/checkInOut.png";
import {  Fieldset, Modal } from "@mantine/core";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import PaymentMethodCard from "../../components/Cards/PaymentMethods";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDisclosure } from "@mantine/hooks";
import AddCardModal from "../../components/Modals/addCardModal";
import { useEffect, useState } from "react";
import { AxiosAPI } from "../../utils/AxiosInstance";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { ClipLoader } from "react-spinners";
import { notifications } from "@mantine/notifications";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { FLUTTERWAVE_PAYMENT_TEST_KEY } from "../../../env.ts";
import BookingSuccess from "@/components/website/BookingSuccess.tsx";

const CheckoutPage = () => {
  const params = useParams();
  const [isOpenSuccessBooking, { open: openSuccess, close: closeSuccess }] =
    useDisclosure();
  // const navigate = useNavigate();
  const accommodation_id = params.id ?? 0;
  const [accommodation, setAccommodation] = useState<any>();
  const [loading, setLoading] = useState(true);
  const { booking, auth } = useSelector((state: any) => state);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loadingMethods, setLoadingMethods] = useState(true);
  const [bookingId, setBookingsId] = useState("");
  const [selectedCard, setSelectedCard] = useState<any>();
  const [loadingPay, setLoadingPay] = useState(false);
  const formatDate = (date: Date | null, text?: string) => {
    return date ? format(date, "MMMM dd") : `Select ${text}`;
  };
  const fetchCards = async () => {
    AxiosAPI.get(`/paymentmethods/getMine`, {
      headers: {
        authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        setPaymentMethods(res.data.data);
      })
      .finally(() => setLoadingMethods(false));
  };
  const deleteCard = async (id: string) => {
    AxiosAPI.delete(`/paymentmethods/delete/${id}`, {
      headers: {
        authorization: `Bearer ${auth.token}`,
      },
    })
      .then(() => {
        notifications.show({
          message: "Deleted Successfully",
        });
        fetchCards();
      })
      .catch((err) => {
        notifications.show({
          message: err.response.message ?? err.message,
        });
      });
  };
  useEffect(() => {
    setLoading(true);
    setLoadingMethods(true);
    AxiosAPI.get(`/accommodation/get/${accommodation_id}`)
      .then((res) => {
        setAccommodation(res.data.data[0]);
      })
      .finally(() => setLoading(false));
    fetchCards();
  }, []);
  const [isAddCardOpen, { open: openAddCard, close: closeAddCard }] =
    useDisclosure();
  const config = {
    public_key: FLUTTERWAVE_PAYMENT_TEST_KEY,
    tx_ref: String(Date.now()),
    amount: booking.paymentTotal,
    currency: "RWF",
    payment_options: "card,mobilemoney",
    customer: {
      email: auth.user.email ?? "",
      phone_number: `250${selectedCard?.number}`,
      name: auth.user.firstname + " " + auth.user.lastname,
    },
    customizations: {
      title: `${accommodation?.name ?? ""}`,
      description: `Payment For ${accommodation?.name}`,
      logo: booking.image,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const createBooking = async () => {
    setLoadingPay(true);
    if (!selectedCard) {
      setLoadingPay(false);
      notifications.show({
        message: "Please select a payment method",
        color: "red",
      });

      return Promise.reject(new Error("Please select a payment method"));
    }
    const data = {
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      accommodationId: accommodation_id,
      paymentType: booking.paymentType,
      paymentMethodId: selectedCard.id,
      paymentTotal: booking.paymentTotal,
      accommodationOwnerId: accommodation.owner_id,
      totalPrice: accommodation.price,
      image: booking.image,
      name: booking.name,
      status: "PENDING",
    };
    AxiosAPI.post(`/booking/create`, data, {
      headers: {
        authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        console.log(bookingId);
        console.log(res.data.data);
        localStorage.setItem("bd", res.data.data);
        setBookingsId(res.data.data);
        setLoadingPay(false);
        console.log("local storage", localStorage.getItem("bd"));
        handleFlutterPayment({
          callback: (response) => {
            console.log(bookingId);
            console.log(response);
            if (response.status === "successful") {
              console.log(bookingId);
              onPaymentSuccess();
            } else {
              console.log(bookingId);
              notifications.show({
                message: "Payment Failed",
                color: "red",
                duration: 10000,
              });
            }
            closePaymentModal();
            setLoadingPay(false);
          },
          onClose: () => {},
        });
      })
      .catch((err) => {
        notifications.show({
          message: err.response.message ?? err.message,
          color: "red",
        });
      });
  };
  const { token } = useSelector((state: any) => state.auth);
  const onPaymentSuccess = () => {
    console.log(bookingId);
    const bookId = localStorage.getItem("bd");
    AxiosAPI.get(`/booking/payment/complete/${bookId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        openSuccess();
      })
      .catch((err) => {
        console.log(bookingId);
        notifications.show({
          message: err.response.message ?? err.message,
        });
      });
  };

  return (
    <div className="pb-[50vh] pt-28 px-4 md:px-20">
      <div className="w-full flex justify-start items-center mt-5">
        <button onClick={() => history.back()} className="ml-[-1rem] p-3">
          <IoChevronBackCircleOutline color="black" size={23} />
        </button>
        <h1 className="text-2xl font-extrabold">Proceed to payment </h1>
      </div>
      {loading ? (
        <div className="w-screen h-screen flex flex-col"></div>
      ) : (
        <div className="w-full flex flex-col md:flex-row justify-between gap-10 mt-4">
        {/* Booking Details Section */}
        <div className="w-full md:w-[50%]">
          <div className="w-full rounded-lg p-4 shadow-md shadow-gray-200">
            <h1 className="text-xl font-bold mb-4">Booking Details</h1>
      
            <div className="w-full flex justify-between gap-4 mt-4">
              <img
                src={accommodation?.images[0]}
                alt="Accommodation"
                width={130}
                height={130}
                className="rounded-lg"
              />
              <div className="w-[70%] flex flex-col">
                <h1 className="text-lg font-semibold text-gray-700">
                  {accommodation.name.length > 20
                    ? `${accommodation.name.slice(0, 20)}...`
                    : accommodation.name}
                </h1>
                <h1 className="text-lg font-bold">{accommodation.type}</h1>
                <div className="flex items-center gap-3 mt-2">
                  <button className="w-12 h-8 rounded border border-green-300 font-bold">
                    {accommodation.rating}
                  </button>
                  <h5 className="text-xs font-bold">Very Good</h5>
                  <p className="text-xs font-medium">
                    {Math.floor(Math.random() * 1000) + 1} Reviews
                  </p>
                </div>
              </div>
            </div>
      
            {/* Check-in/Check-out Section */}
            <div className="flex justify-between mt-6">
              <div className="text-center">
                <h1 className="text-lg font-bold">{formatDate(booking.checkIn)}</h1>
                <p className="text-sm text-gray-500">Check In</p>
              </div>
              <img
                src={checkInOut}
                alt="Check-in/out"
                className="w-[14vw] object-contain select-none"
              />
              <div className="text-center">
                <h1 className="text-lg font-bold">{formatDate(booking.checkOut)}</h1>
                <p className="text-sm text-gray-500">Check Out</p>
              </div>
            </div>
      
            <hr className="my-4 border-gray-300" />
      
            {/* Total Price */}
            <div className="flex justify-between">
              <h2 className="font-bold">Total Price</h2>
              <h1 className="text-lg font-bold text-blue-500">
                {booking.paymentTotal}/FRW
              </h1>
            </div>
          </div>
      
          <p className="text-sm text-right text-gray-600 mt-4">
            Your Booking is protected by{" "}
            <span className="text-black font-bold">Place Pulse</span>
          </p>
        </div>
      
        {/* Payment Details Section */}
        <div className="w-full md:w-[40%] shadow-md shadow-gray-200 p-4 rounded-lg">
          <h1 className="mb-4 text-xl font-bold">Payment Details</h1>
          {loadingMethods ? (
            <div className="w-full flex justify-center items-center">
              <ClipLoader color="black" size={24} />
            </div>
          ) : (
            <Fieldset
              legend="Payment Method"
              className="w-full flex space-x-4 overflow-x-auto pay_meth_container"
            >
              {paymentMethods.map((method: any, index: number) => (
                <PaymentMethodCard
                  key={index}
                  name={method.type}
                  tag="MOMO Pay"
                  phone={`+250${method.number}`}
                  className="flex-shrink-0"
                  selected={selectedCard?.id === method?.id}
                  setSelected={setSelectedCard}
                  card={method}
                  onDeleteCard={deleteCard}
                />
              ))}
              <div
                onClick={openAddCard}
                className="w-[328px] h-[160px] flex-shrink-0 flex items-center justify-center border-2 border-dashed border-blue-500 rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <IoIosAddCircleOutline color="#396FF9" size={39} />
                  <h6 className="text-sm text-gray-500">Add a new card</h6>
                </div>
              </div>
            </Fieldset>
          )}
          <button
            className="w-full py-3 mt-4 bg-blue-600 text-white font-bold rounded-lg"
            onClick={() => createBooking()}
          >
            {loadingPay ? (
              <ClipLoader size={20} color="white" />
            ) : (
              `Pay ${booking.paymentTotal} FRW`
            )}
          </button>
        </div>
      
        {/* Modals */}
        <AddCardModal refetch={fetchCards} opened={isAddCardOpen} close={closeAddCard} />
        <Modal
          className="bg-gray-100 shadow-lg"
          size="auto"
          opened={isOpenSuccessBooking}
          onClose={closeSuccess}
          withCloseButton={false}
          closeOnClickOutside={false}
        >
          <BookingSuccess />
        </Modal>
      </div>
      
      )}
    </div>
  );
};

export default CheckoutPage;
