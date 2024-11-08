// likedSongsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const savedLikedSongs = JSON.parse(localStorage.getItem("likedSongs")) || [];

const initialState = {
  likedSongs: savedLikedSongs,
};

const likedSongsSlice = createSlice({
  name: "likedSongs",
  initialState,
  reducers: {
    addSongToLiked: (state, action) => {
      if (!state.likedSongs.some((song) => song.id === action.payload.id)) {
        state.likedSongs.push(action.payload);
        localStorage.setItem("likedSongs", JSON.stringify(state.likedSongs));
      }
    },
    removeSongFromLiked: (state, action) => {
      state.likedSongs = state.likedSongs.filter(
        (song) => song.id !== action.payload
      );
      localStorage.setItem("likedSongs", JSON.stringify(state.likedSongs));
    },
  },
});

export const { addSongToLiked, removeSongFromLiked } = likedSongsSlice.actions;
export default likedSongsSlice.reducer;
