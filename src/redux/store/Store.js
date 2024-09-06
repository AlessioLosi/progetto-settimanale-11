import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../reducers/Reduces";

const store = configureStore({
  reducer: {
    songs: songsReducer, 
  },
});

export default store;
