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
