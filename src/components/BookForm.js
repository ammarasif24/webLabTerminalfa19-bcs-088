import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAdd = () => {
    const newItem = {
      itemid: `item${Math.random()}`,
      title,
      author,
      category: 'fiction', // You can customize this as needed
    };

    dispatch(addBook(newItem));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <button onClick={handleAdd}>Add Book</button>
    </div>
  );
};

export default BookForm;
