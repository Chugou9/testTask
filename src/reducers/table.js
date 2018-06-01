
import { GET_COUNTRIES_REQUEST } from "../constants/constants"
import { GET_COUNTRIES_SUCCESS } from "../constants/constants"
import { GET_COUNTRIES_FAILED } from "../constants/constants";
// import { CLEAR_COUNTRIES } from "../constants/constants";

const initialState = {
  isLoading: false,
  countries: [],
  error: null
}

export default function getFilteredCountries(state = initialState, action) {
  switch(action.type) {
    case GET_COUNTRIES_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_COUNTRIES_SUCCESS:
      return Object.assign({}, state, {
        countries: action.payload,
        isLoading: false,
        error: null
      });
    case GET_COUNTRIES_FAILED:
      return Object.assign({}, state, {
        error: action.payload.error,
        isLoading: false,
      });    
    default:
      return state;
  }
}

