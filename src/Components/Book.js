import React from 'react';

const Book = ({ book }) => (
  <section className="bookSection">
    <h2>{book.title}</h2>
    <p>{book.author}</p>
    <button type="button">
      Remove Book
    </button>
  </section>
);
export default Book;
