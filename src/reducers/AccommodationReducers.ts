/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actions from "../actions/AccommodationActions";

type AccommodationActionAction = {
    type: string;
    payload: any
}
const initialState = {
    accommodations: [],
    loading: false,
    isError: false,
    error: ""
}
const accommodationReducers = (state = initialState, action: AccommodationActionAction) => {
    switch(action.type){
        case actions.FETCH_ACCOMMODATIONS:
            return{
                ...state,
                loading: true
            }
        case actions.FETCH_ACCOMMODATIONS_SUCCESS:
            return {
                loading: false,
                accommodations: action.payload.accommodations,
                isError: false,
                error: ""
            }
        case actions.FETCH_ACCOMMODATIONS_FAIL:
            return {
                ...state,
                isError: true,
                error: action.payload.error
            }
    }
}

export default accommodationReducers