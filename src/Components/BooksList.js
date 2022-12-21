import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getAllBooksAsync } from '../redux/books/books';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, [dispatch]);
  return (
    <section className="booksListSection">
      {books.map((book) => <Book key={book.item_id} book={book} />)}
    </section>
  );
};
export default BooksList;
