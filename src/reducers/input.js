import { VIEW_INPUT_CHANGES } from "../constants/constants";
// import { SET_LOADING } from "../constants/constants"


const initialState = {  
  userInput: ""
}

export default function input(state = initialState, action) {
  switch(action.type) {
    case VIEW_INPUT_CHANGES:
      return Object.assign({}, state, {
        userInput: action.payload
      });
      // case SET_LOADING:
      // return Object.assign({}, state, {
      //   isLoading: action.payload
      // });
    default:
      return state;
  }
}
