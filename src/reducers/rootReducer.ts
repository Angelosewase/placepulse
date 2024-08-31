import { combineReducers } from "redux";
import { authReducer } from "./AuthReducers";
import accommodationReducers from "./AccommodationReducers";
import { bookingReducer } from "./BookingReducers";
import bookingsReducers from "./BookingsReducers";
import usersReducers from "./UsersReducers";
import EarningsReducers from "./EarningsReducers";
import notificationsReducers from "./NotificationsReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  accommodations: accommodationReducers,
  booking: bookingReducer,
  bookings: bookingsReducers,
  owners: usersReducers,
  earnings: EarningsReducers,
  notifications: notificationsReducers,
});

export default rootReducer;
