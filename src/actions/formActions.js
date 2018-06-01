import { VIEW_INPUT_CHANGES } from "../constants/constants"
import { GET_COUNTRIES_REQUEST } from "../constants/constants"
import { GET_COUNTRIES_SUCCESS } from "../constants/constants"
import Ajax from "axios";
import { GET_COUNTRIES_FAILED } from "../constants/constants"
// import { CLEAR_COUNTRIES } from "../constants/constants";

export function setInputView(userInput) {
  return {
    type: VIEW_INPUT_CHANGES,
    payload: userInput
  }
}

export function getFilteredCountries(userInput) {

  return (dispatch) => {
    dispatch ({
      type: GET_COUNTRIES_REQUEST,
      payload: userInput
    });
    
    Ajax.get("https://restcountries.eu/rest/v2/name/" + userInput + "?fields=name")
      .then( res => {
        const filteredCountries = res.data.map( item => (item.name));
        dispatch({
          type: GET_COUNTRIES_SUCCESS,
          payload: filteredCountries});
      })       
      .catch( error => {
        dispatch({
          type: GET_COUNTRIES_FAILED,
          payload: {            
            error: console.log(error)
          }
        })
      });  
    }       
}
// function viewFilteredCounties(filteredArray) {
//   return {
//     type: VIEW_FILTERED_COUNTRIES,
//     payload: countries
//   }
// }



// function setLoading(isLoading) {
//   return {
//     type: SET_LOADING,
//     payload: isLoading
//   }  
// }