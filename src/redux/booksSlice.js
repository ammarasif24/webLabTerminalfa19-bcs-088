// redux/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    itemid: 'item1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'fiction',
  },
  {
    itemid: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'fiction',
  },
  {
    itemid: 'item3',
    title: 'Ammar',
    author: 'Ammar Author',
    category: 'non-fiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: initialState },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.itemid !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
