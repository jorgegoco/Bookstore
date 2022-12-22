/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const LIST = 'bookstore/books/LIST';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QgtuyWt2y7sUT1m9eRR5/books';

const books = [];

export default function reducerBooks(state = books, action) {
  switch (action.type) {
    case LIST:
      return [...action.payload];
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

const getAllBooks = (books) => {
  const arr = Object.entries(books).map(([id, item]) => ({ id, ...item[0] }));
  return { type: LIST, payload: arr };
};

const removeBook = (item_id) => ({ type: REMOVE, payload: item_id });

const addBook = (book) => ({ type: ADD, payload: book });

export const getAllBooksAsync = createAsyncThunk(LIST,
  async (_, thunk) => {
    const response = await axios.get(URL);
    thunk.dispatch(getAllBooks(response.data));
  });

export const addBookAsync = createAsyncThunk(ADD,
  async (payload, thunk) => {
    await axios.post(URL, payload);
    return thunk.dispatch(addBook(payload));
  });

export const removeBookAsync = createAsyncThunk(REMOVE,
  async (item_id, thunk) => {
    await axios.delete(`${URL}/${item_id}`);
    return thunk.dispatch(removeBook(item_id));
  });
