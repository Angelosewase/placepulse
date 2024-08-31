/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actions from "../actions/EarningsActions";

type AccommodationActionAction = {
  type: string;
  payload: any;
};
const initialState = {
  earnings: 0,
  loading: false,
  isError: false,
  error: "",
};
const EarningsReducers = (
  state = initialState,
  action: AccommodationActionAction,
) => {
  switch (action.type) {
    case actions.FETCH_EARNINGS:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_EARNINGS_SUCCESS:
      return {
        loading: false,
        earnings: action.payload.earnings,
        isError: false,
        error: "",
      };
    case actions.FETCH_EARNINGS_FAIL:
      return {
        loading: false,
        earnings: 0,
        isError: false,
        error: "",
      };
    default:
      return state;
  }
};

export default EarningsReducers;
