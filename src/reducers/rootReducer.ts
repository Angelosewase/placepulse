import { combineReducers } from "redux";
import { authReducer } from "./AuthReducers";
import accommodationReducers from "./AccommodationReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  accommodations: accommodationReducers,
});

export default rootReducer;
