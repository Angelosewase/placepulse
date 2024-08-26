import { combineReducers } from "redux";
import { authReducer } from "./AuthReducers";
import accommodationReducers from "./AccommodationReducers";
import { bookingReducer } from "./BookingReducers";
import bookingsReducers from "./BookingsReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  accommodations: accommodationReducers,
  booking: bookingReducer,
  bookings: bookingsReducers,
});

export default rootReducer;
