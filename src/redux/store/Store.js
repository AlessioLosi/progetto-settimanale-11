import { configureStore, combineReducers} from "@reduxjs/toolkit";
import songsReducer from "../reducers/Reduces";
import searchReducer from "../reducers/SearchRed";
const bigReducer = combineReducers({
    fav: songsReducer,
    search: searchReducer,
  })

const store = configureStore({
  reducer: bigReducer,
});

export default store;
