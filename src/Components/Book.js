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
      <div className="bookDiv">
        <h2>{title}</h2>
        <p>{author}</p>
        <ul className="buttonList">
          <li><button className="buttonOne" type="submit">Comments</button></li>
          <li>
            <button
              className="buttonTwo"
              type="button"
              onClick={() => {
                dispatch(removeBookAsync(id));
                dispatch(getAllBooksAsync());
              }}
            >

              Remove
            </button>
          </li>
          <li><button className="buttonThree" type="submit">Edit</button></li>
        </ul>
      </div>
      <div className="progress">
        <div className="progressChart">
          <div className="chart" />
          <div className="status">
            <p className="percent">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="divider" />
        <div className="chapter">
          <p className="currentChap">CURRENT CHAPTER</p>
          <p className="chapNum">Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </section>
  );
}
