import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducerBook from './books/books';
import reducerCategories from './categories/categories';

const reducer = combineReducers({
  books: reducerBook,
  categories: reducerCategories,
});

const store = configureStore({
  reducer,
});

export default store;
