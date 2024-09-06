import { SET_SEARCH_QUERY } from "../actions/Actions";
const initialState = {
    query: 'sabrina carpenter',
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SEARCH_QUERY:
        return {
          ...state,
          query: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  