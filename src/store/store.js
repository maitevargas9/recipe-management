import { configureStore, createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: JSON.parse(localStorage.getItem("favorites")) || [],
  reducers: {
    addFavorite: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFavorite: (state, action) => {
      const updatedState = state.filter((id) => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(updatedState));
      return updatedState;
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer
  }
});

export default store;
