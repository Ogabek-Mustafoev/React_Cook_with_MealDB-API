/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { getMealsByFirstLetter } from "../../api"
import { RecipeItems, Loader } from "../../components";
import { Context } from "../../context";
import './alphabetical.css'

export default function Alphabetical() {
  const { state, dispatch } = useContext(Context);
  const [letter, setLetter] = useState('a');

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: 'SET_SEARCH', payload: '' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_LOADER', payload: true })
    getMealsByFirstLetter(letter).then(({ meals }) => {
      dispatch({ type: 'SET_ALPHABETICAL_MEALS', payload: meals });
      dispatch({ type: 'SET_ALPHABETICAL_TERM', payload: meals })
      setTimeout(() => {
        dispatch({ type: 'SET_LOADER', payload: false })
      }, 1500);
    })
  }, [letter]);

  useEffect(() => {
    const payload = state.alphabetical.filter(
      (item) =>
        item.strMeal.toLowerCase().indexOf(state.search.toLowerCase()) > -1
    );
    dispatch({ type: "SET_ALPHABETICAL_TERM", payload });
  }, [state.search]);

  return (
    <div className="alphabetical container">
      <div className="letters">
        {state.letters.map(({ l }, idx) => (
          <button
            key={l}
            data-aos="flip-left" data-aos-delay={`${idx + 2}00`}
            onClick={() => setLetter(l)}
            className={`btn ${l === letter ? 'active' : ''}`}
          >
            {l}
          </button>))}
      </div>
      {state.loading ? <Loader /> :
        state.alphabeticalTerm && state.alphabeticalTerm.length ? state.alphabeticalTerm.map(recipe => (
          <RecipeItems key={recipe.idMeal} recipe={recipe} />
        )) : (
          <h1 data-aos='fade-up' className="heading">Not Found! <b>🙅</b></h1>
        )}
    </div>
  )
}
