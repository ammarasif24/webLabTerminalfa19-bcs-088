// components/CategoryForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/categoriesSlice';

const CategoryForm = () => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');

  const handleAddCategory = () => {
    const newCategory = {
      id: `category${Math.random()}`,
      name: categoryName,
    };

    dispatch(addCategory(newCategory));
    setCategoryName('');
  };

  return (
    <div>
      <h2>Add Category</h2>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Category Name"
      />
      <button onClick={handleAddCategory}>Add Category</button>
    </div>
  );
};

export default CategoryForm;
