import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const LIST = 'bookstore/books/LIST';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QgtuyWt2y7sUT1m9eRR5/books';

// const books = [
//   {
//     id: 1,
//     title: 'The Shining',
//     author: 'Stephen King',
//   },
//   {
//     id: 2,
//     title: 'Dune',
//     author: 'Frank Herbert',
//   },
//   {
//     id: 3,
//     title: 'A Brief Story of Time',
//     author: 'Stephen Hawking',
//   },
// ];

const getAllBooks = async () => {
  const result = await fetch(URL);
  return result.json();
};

export const getAllBooksAsync = createAsyncThunk(
  LIST,
  async () => getAllBooks().then((books) => Object.entries(books)
    .map(([id, book]) => ({ item_id: id, ...book[0] }))),
);

const addBook = async (book) => {
  const result = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });

  return result;
};

export const addBookAsync = createAsyncThunk(
  ADD,
  async (book) => addBook(book).then(() => book),
);

const removeBook = async (id) => {
  const result = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return result;
};

export const removeBookAsync = createAsyncThunk(
  REMOVE,
  async (id) => removeBook(id).then(() => id),
);

const reducerBooks = (state = [], action) => {
  switch (action.type) {
    case `${LIST}/fulfilled`:
      return [
        ...state, action.payload];
    case `${ADD}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducerBooks;
