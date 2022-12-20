const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

export const addBook = (book) => ({
  type: ADD,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

const reducerBooks = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state, action.payload];
    case REMOVE:
      return state.filter((item) => item !== action.id);
    default:
      return state;
  }
};

export default reducerBooks;
