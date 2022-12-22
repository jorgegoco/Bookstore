const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categories = [];

export default function reducerCategories(state = categories, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, action.payload];
    default:
      return state;
  }
}

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});
