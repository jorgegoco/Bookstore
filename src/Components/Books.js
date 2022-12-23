import React from 'react';
import BooksList from './BooksList';
import AddBook from './AddBook';

const Books = () => (
  <section className="booksSection">
    <BooksList />
    <hr />
    <AddBook />
  </section>
);
export default Books;
