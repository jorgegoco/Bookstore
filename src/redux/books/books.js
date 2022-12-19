const ADD = 'ADD';
const REMOVE = 'REMOVE';

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
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

export default reducerBooks;
