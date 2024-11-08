import { configureStore } from "@reduxjs/toolkit";
import likedSongsReducer from "./likedSongsSlice";

export const store = configureStore({
  reducer: {
    likedSongs: likedSongsReducer,
  },
});
