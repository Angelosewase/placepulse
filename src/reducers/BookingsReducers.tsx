/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actions from "../actions/BookingsActions";

type bookingActionAction = {
  type: string;
  payload: any;
};
const initialState = {
  bookings: [],
  loading: false,
  isError: false,
  error: "",
};
const bookingsReducers = (
  state = initialState,
  action: bookingActionAction,
) => {
  switch (action.type) {
    case actions.FETCH_BOOKINGS:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_BOOKINGS_SUCCESS:
      return {
        loading: false,
        bookings: action.payload.bookings,
        isError: false,
        error: "",
      };
    case actions.FETCH_BOOKINGS_FAIL:
      return {
        ...state,
        isError: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default bookingsReducers;
