/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actions from "../actions/UsersActions";

type BookingsActionAction = {
  type: string;
  payload: any;
};

const initialState = {
  owners: [],
  loading: false,
  isError: false,
  error: "",
};

const usersReducers = (state = initialState, action: BookingsActionAction) => {
  switch (action.type) {
    case actions.FETCH_OWNERS:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_OWNERS_SUCCESS:
      return {
        loading: false,
        owners: action.payload.owners,
        isError: false,
        error: "",
      };
    case actions.FETCH_OWNERS_FAIL:
      return {
        ...state,
        isError: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default usersReducers;
