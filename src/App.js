import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import Books from './Components/Books';
import Categories from './Components/Categories';
import { getAllBooksAsync } from './redux/books/books';

export default function App() {
  const dispatch = useDispatch();
  dispatch(getAllBooksAsync()).unwrap();
  return (
    <>
      <nav className="navBar">
        <h1>Bookstore CMS</h1>
        <ul className="navList">
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
        <button type="button" className="userButton">
          <FaUserAlt className="userIcon" />
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}
