// components/BookList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/booksSlice';

const BookList = () => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      <h2>Books</h2>
      <ul className="list-group">
        {books.map(book => (
          <li key={book.itemid} className="list-group-item d-flex justify-content-between align-items-center">
            {book.title} by {book.author}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleRemoveBook(book.itemid)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
