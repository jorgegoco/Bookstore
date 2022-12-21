import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <section className="bookSection">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button type="button" onClick={() => { dispatch(removeBook(book.id)); }}>
        Remove Book
      </button>
    </section>
  );
};
export default Book;
