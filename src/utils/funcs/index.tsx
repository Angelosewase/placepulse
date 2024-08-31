import { Dispatch } from "redux";
import { AuthorizedAxiosAPI } from "../AxiosInstance";
import {
  FETCH_ACCOMMODATIONS,
  FETCH_ACCOMMODATIONS_FAIL,
  FETCH_ACCOMMODATIONS_SUCCESS,
} from "@/actions/AccommodationActions";
import {
  FETCH_BOOKINGS,
  FETCH_BOOKINGS_FAIL,
  FETCH_BOOKINGS_SUCCESS,
} from "@/actions/BookingsActions";
import {
  FETCH_OWNERS,
  FETCH_OWNERS_FAIL,
  FETCH_OWNERS_SUCCESS,
} from "@/actions/UsersActions";
import {
  FETCH_EARNINGS_FAIL,
  FETCH_EARNINGS_SUCCESS,
} from "@/actions/EarningsActions";
import {
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_FAIL,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "@/actions/NotificationsActions";

export const getAccommodations = async ({
  dispatch,
}: {
  dispatch: Dispatch;
}) => {
  dispatch({ type: FETCH_ACCOMMODATIONS });
  AuthorizedAxiosAPI.get("/accommodation/all")
    .then((res) => {
      dispatch({
        type: FETCH_ACCOMMODATIONS_SUCCESS,
        payload: {
          accommodations: res.data.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ACCOMMODATIONS_FAIL,
        payload: err.response,
      });
    });
};
export const getNotifications = async ({
  dispatch,
}: {
  dispatch: Dispatch;
}) => {
  dispatch({ type: FETCH_NOTIFICATIONS });
  AuthorizedAxiosAPI.get("/notifications/mine")
    .then((res) => {
      dispatch({
        type: FETCH_NOTIFICATIONS_SUCCESS,
        payload: {
          notifications: res.data.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_NOTIFICATIONS_FAIL,
        payload: err.response,
      });
    });
};
export const getAllOwners = async ({ dispatch }: { dispatch: Dispatch }) => {
  dispatch({ type: FETCH_OWNERS });
  AuthorizedAxiosAPI.get("/users/owners/all")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_OWNERS_SUCCESS,
        payload: {
          owners: res.data.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_OWNERS_FAIL,
        payload: err.response,
      });
    });
};
export const getUserBookings = async ({ dispatch }: { dispatch: Dispatch }) => {
  dispatch({ type: FETCH_BOOKINGS });
  AuthorizedAxiosAPI.get("/booking/getMine")
    .then((res) => {
      dispatch({
        type: FETCH_BOOKINGS_SUCCESS,
        payload: {
          bookings: res.data.data?.reverse(),
        },
      });
      console.log(res.data.data);
    })
    .catch((err) => {
      dispatch({
        type: FETCH_BOOKINGS_FAIL,
        payload: err.response,
      });
    });
};
export const getBookings = async ({ dispatch }: { dispatch: Dispatch }) => {
  dispatch({ type: FETCH_BOOKINGS });
  AuthorizedAxiosAPI.get("/booking/all")
    .then((res) => {
      dispatch({
        type: FETCH_BOOKINGS_SUCCESS,
        payload: {
          bookings: res.data.data?.reverse(),
        },
      });
      console.log(res.data.data);
    })
    .catch((err) => {
      dispatch({
        type: FETCH_BOOKINGS_FAIL,
        payload: err.response,
      });
    });
};
export const getEarnings = async ({ dispatch }: { dispatch: Dispatch }) => {
  dispatch({ type: FETCH_BOOKINGS });
  AuthorizedAxiosAPI.get("/booking/earnings/total")
    .then((res) => {
      dispatch({
        type: FETCH_EARNINGS_SUCCESS,
        payload: {
          earnings: res.data.data,
        },
      });
      console.log(res.data.data);
    })
    .catch((err) => {
      dispatch({
        type: FETCH_EARNINGS_FAIL,
        payload: err.response,
      });
    });
};
