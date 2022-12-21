import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <section className="bookSection">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button type="button" onClick={() => { dispatch(removeBookAsync(book.item_id)); }}>
        Remove Book
      </button>
    </section>
  );
};
export default Book;
