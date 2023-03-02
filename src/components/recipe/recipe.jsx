import { useContext, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../../api';
import { Context } from '../../context';
import { RecipeItems, Loader } from '../';
import './recipe.css'

export default function Recipe() {
  const { state, dispatch } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: 'SET_LOADER', payload: true })
    getMealById(id).then((data) => {
      dispatch({ type: 'SET_RECIPE', payload: data.meals[0] });
      setTimeout(() => {
        dispatch({ type: 'SET_LOADER', payload: false })
      }, 1500);
    });
    // eslint-disable-next-line
  }, []);

  const { recipe, loading } = state;
  return (
    <div className="recipe container">
      {loading ? <Loader /> :
        <RecipeItems recipe={recipe} />
      }
    </div>
  )
}
