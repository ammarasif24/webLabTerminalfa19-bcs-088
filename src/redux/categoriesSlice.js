// redux/categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: initialState },
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(category => category.id !== action.payload);
    },
  },
});

export const { addCategory, removeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
