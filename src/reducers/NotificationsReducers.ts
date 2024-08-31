/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actions from "../actions/NotificationsActions";

type AccommodationActionAction = {
  type: string;
  payload: any;
};
const initialState = {
  notifications: [],
  loading: false,
  isError: false,
  error: "",
};
const notificationsReducers = (
  state = initialState,
  action: AccommodationActionAction,
) => {
  switch (action.type) {
    case actions.FETCH_NOTIFICATIONS:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      return {
        loading: false,
        notifications: action.payload.notifications,
        isError: false,
        error: "",
      };
    case actions.FETCH_NOTIFICATIONS_FAIL:
      return {
        ...state,
        isError: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default notificationsReducers;
