import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBookAsync } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const initialBook = {
    item_id: '',
    title: '',
    author: '',
    category: '',
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
    const book = { ...bookState, item_id: uuid() };
    dispatch(addBookAsync(book));
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
        <button type="button" onClick={Submit}>ADD BOOK</button>
      </form>
    </section>
  );
};
export default AddBook;
