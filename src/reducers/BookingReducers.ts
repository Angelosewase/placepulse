/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookie from "react-cookies";
import { decrypt, encrypt } from "../utils/crypto";
import { ADD_BOOKING, REMOVE_BOOKING } from "../actions/BookingActions";
type BookingAction = {
    type: string,
    payload: BookingState
}
type BookingState = {
  accommodationId: null,
  checkIn: null,
  checkOut: null,
  paymentType: null,
  image: null,
  paymentMethod: null,
  paymentTotal: null,
  name: null
};
const initialState = {
  accommodationId: null,
  name: null,
  checkIn: null,
  checkOut: null,
  paymentType: null,
  image: null,
  paymentMethod: null,
  paymentTotal: null
};

const loadState = () => {
  try {
    const serializedState = decrypt(cookie.load("Btate"));
    console.log(serializedState);
    if (serializedState === null || serializedState == '{}') {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return initialState;
  }
};

export const bookingReducer = (state = loadState(), action: BookingAction) => {
  switch (action.type) {
    case ADD_BOOKING:
      const newState = {
        ...state,
        accommodationId: action.payload.accommodationId,
        checkIn: action.payload.checkIn,
        checkOut: action.payload.checkOut,
        paymentType: action.payload.paymentType,
        image: action.payload.image,
        paymentMethod: action.payload.paymentMethod,
        paymentTotal: action.payload.paymentTotal,
        name: action.payload.name
        
      };
      cookie.save("Btate", encrypt(JSON.stringify(newState)), {
        path: "/",
      });
      return newState;
    case REMOVE_BOOKING:
      return {
        ...state,
        accommodationId: null,
        checkIn: null,
        checkOut: null,
        paymentType: null,
        image: null,
        paymentMethod: null,
        paymentTotal: null,
        name: null
      };
    default:
      return state;
  }
};
