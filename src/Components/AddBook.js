import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const initialBook = {
    id: '',
    title: '',
    author: '',
  };
  const [bookState, setBookState] = useState(initialBook);

  const OnChange = (e) => {
    setBookState((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    ));
  };

  const Submit = (e) => {
    e.preventDefault();
    const book = { ...bookState, id: uuid() };
    dispatch(addBook(book));
    setBookState(initialBook);
  };

  return (
    <section className="addBookSection">
      <h2>ADD NEW BOOK</h2>
      <form className="formSection">
        <input
          type="text"
          name="title"
          value={bookState.title}
          placeholder="Add title..."
          onChange={OnChange}
        />
        <input
          type="text"
          name="author"
          value={bookState.author}
          placeholder="Add author..."
          onChange={OnChange}
        />
        <button type="button" onClick={Submit}>Submit</button>
      </form>
    </section>
  );
};
export default AddBook;
