import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <section className="categoriesSection">
      <button type="button" onClick={() => { dispatch(checkStatus); }}>Check Status</button>
    </section>
  );
};
export default Categories;
