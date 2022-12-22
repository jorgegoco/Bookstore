import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeBookAsync, getAllBooksAsync } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();
  const { title, author, id } = book;

  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, [dispatch]);

  return (
    <section className="bookSection">
      <h2>{title}</h2>
      <p>{author}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBookAsync(id));
          dispatch(getAllBooksAsync());
        }}
      >

        Remove Book
      </button>
    </section>
  );
}
