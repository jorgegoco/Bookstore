import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from './Components/Books';
import Categories from './Components/Categories';
import { getAllBooksAsync } from './redux/books/books';

export default function App() {
  const dispatch = useDispatch();
  dispatch(getAllBooksAsync()).unwrap();
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}
