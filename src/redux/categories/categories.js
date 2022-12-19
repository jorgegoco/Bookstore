const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({ type: CHECK_STATUS });

const reducerCategories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default reducerCategories;
