import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <section className="categoriesSection">
      <button type="button" onClick={() => { dispatch(checkStatus('Under construction')); }}>Check Status</button>
      <h1>{categories[0]}</h1>
    </section>
  );
};
export default Categories;
