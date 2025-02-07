import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
import favoritesReducer from './favoritesSlice';

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesReducer,
  },
});