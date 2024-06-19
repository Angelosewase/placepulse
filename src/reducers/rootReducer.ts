import { combineReducers } from "redux";
import { authReducer } from "./AuthReducers";
import accommodationReducers from "./AccommodationReducers";
import { bookingReducer } from "./BookingReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  accommodations: accommodationReducers,
  booking: bookingReducer
});

export default rootReducer;
