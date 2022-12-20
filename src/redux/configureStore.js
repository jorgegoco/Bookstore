import { configureStore } from '@reduxjs/toolkit';
import reducerBook from './books/books';
import reducerCategories from './categories/categories';

const store = configureStore({
  books: reducerBook,
  categories: reducerCategories,
});

export default store;
