import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import BookForm from './components/BookForm';
import CategoryForm from './components/CategoriesForm';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/categories" className="nav-link">Categories</Link>
          </li>
          <li className="nav-item">
            <Link to="/addBook" className="nav-link">Book</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div >
                <div >
                  <BookList />
                </div>
                <Categories />
              </div>
            </>
          }
        />
        <Route path="/addBook" element={<BookForm />} />
        <Route path="/addCategory" element={<CategoryForm />} />
      </Routes>
    </div>
  );
};

export default App;
