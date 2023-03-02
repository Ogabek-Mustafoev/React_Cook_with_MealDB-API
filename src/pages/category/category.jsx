/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, } from 'react';
import { getMealCategories } from '../../api';
import { Loader, CategoryCard } from '../../components';
import { Context } from '../../context';
import './category.css';

export default function Category() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: 'SET_LOADER', payload: true });
    dispatch({ type: 'SET_SEARCH', payload: '' });
    getMealCategories().then((data) => {
      dispatch({ type: 'SET_CATEGORY', payload: data.categories });
      dispatch({ type: 'SET_TERM', payload: data.categories });
      setTimeout(() => {
        dispatch({ type: 'SET_LOADER', payload: false });
      }, 1500);
    });
  }, []);

  useEffect(() => {
    const payload = state.category.filter(
      (item) =>
        item.strCategory.toLowerCase().indexOf(state.search.toLowerCase()) > -1
    );
    dispatch({ type: "SET_TERM", payload });
  }, [state.search]);

  return (
    <div className="features container" id="features">
      {state.loading ? <Loader /> :
        <>
          <h1 data-aos-duration="1000" data-aos="zoom-out" className="heading" >Let's Check all <span>food category!</span> </h1>
          <div className="box-container">
            {
              state.term.length ? state.term.map((item) => (
                <CategoryCard key={item.idCategory} {...item} />
              )) : <h1 data-aos="fade-up" className="heading find_error">Not Found!</h1>
            }
          </div>
        </>}
    </div>
  )
}
