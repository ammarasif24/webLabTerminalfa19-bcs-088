// components/Categories.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCategory } from '../redux/categoriesSlice';

const Categories = () => {
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  const handleRemoveCategory = (categoryId) => {
    dispatch(removeCategory(categoryId));
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul className="list-group">
        {categories.map(category => (
          <li key={category.id} className="list-group-item d-flex justify-content-between align-items-center">
            {category.name}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleRemoveCategory(category.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
