import { CheckCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

const BookingSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
        <h2 className="text-2xl font-semibold mt-4">Booking Confirmed!</h2>
        <p className="mt-2 text-gray-600">
          Your booking has been successfully confirmed. A confirmation email has
          been sent to you.
        </p>

        <div className="mt-6">
          <Link
            to="/_client/info/Bookings"
            className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            View My Bookings
          </Link>
        </div>

        <div className="mt-4">
          <Link
            to="/"
            className="inline-block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
