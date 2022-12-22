import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  return (
    <section className="booksListSection">
      {books.map((book) => <Book key={book.id} book={book} />)}
    </section>
  );
};
export default BooksList;
