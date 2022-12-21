const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

const reducerCategories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducerCategories;
