import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredMealCategory } from "../../api";
import { Context } from "../../context";
import { MealList, Loader } from "../";

export default function CategoryItems() {
  const { name } = useParams();
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: 'SET_LOADER', payload: true })
    getFilteredMealCategory(name).then(({ meals }) => {
      dispatch({ type: 'SET_MEALS_CATEGORY', payload: meals });
      setTimeout(() => {
        dispatch({ type: 'SET_LOADER', payload: false })
      }, 1500);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      {state.loading ? <Loader /> :
        <MealList mealsCategory={state.mealsCategory} />
      }
    </div>
  )
}
