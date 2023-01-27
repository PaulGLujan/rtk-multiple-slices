import { configureStore } from "@reduxjs/toolkit";
import { addSong, removeSong, songReducer } from "./slices/songsSlice";
import { addMovie, removeMovie, movieReducer } from "./slices/movieSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    songs: songReducer,
  },
});

export { addMovie, addSong, removeMovie, removeSong, reset, store };
