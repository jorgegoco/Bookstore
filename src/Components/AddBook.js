import React from 'react';

const AddBook = () => (
  <form>
    <input type="text" placeholder="Add title..." name="title" />
    <input type="text" placeholder="Add author..." name="author" />
    <button type="submit">Submit</button>
  </form>
);
export default AddBook;
