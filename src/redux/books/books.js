const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const books = [
  {
    id: 1,
    title: 'The Shining',
    author: 'Stephen King',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'A Brief Story of Time',
    author: 'Stephen Hawking',
  },
];

export const addBook = (payload) => ({
  type: ADD,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE,
  payload,
});

const reducerBooks = (state = books, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state, action.payload];
    case REMOVE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default reducerBooks;
