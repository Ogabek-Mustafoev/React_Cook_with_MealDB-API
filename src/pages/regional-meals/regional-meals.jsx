/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMealByArea } from '../../api'
import { MealList, Loader } from '../../components'
import { Context } from '../../context'
import './regional-meals.css'

export default function RegionalMeals() {
  const { region = 'canadian' } = useParams()
  const [area, setArea] = useState(region)
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const regions = [
    { label: 'Canadian', className: 'bg-success', star: 5 },
    { label: 'American', className: 'bg-purple', star: 4 },
    { label: 'Chinese', className: 'bg-danger', star: 3 },
    { label: 'Russian', className: 'bg-success', star: 2 },
    { label: 'French', className: 'bg-purple', star: 3 },
    { label: 'Italian', className: 'bg-danger', star: 5 },
    { label: 'Japanese', className: 'bg-success', star: 4 },
    { label: 'Mexican', className: 'bg-primary', star: 4 },
    { label: 'Turkish', className: 'bg-dark', star: 5 },
    { label: 'British', className: 'bg-danger', star: 4 },
    { label: 'Unknown', className: 'bg-primary', star: 5 },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: 'SET_SEARCH', payload: '' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_LOADER', payload: true });
    getMealByArea(area).then(({ meals }) => {
      dispatch({ type: 'SET_MEALS_CATEGORY', payload: meals });
      setTimeout(() => {
        dispatch({ type: 'SET_LOADER', payload: false });
      }, 1500);
    });
    navigate(`/regional/${area}`);
  }, [area])

  useEffect(() => {
    if (state.regionalSearch) {
      setArea(state.regionalSearch);
      navigate(`/regional/${state.regionalSearch}`);
    }
  }, [state.regionalSearch])

  return (
    <div className='regional_meals container'>
      <div className="badges">
        {regions.map(({ label, className, star }, idx) => (
          <div
            key={label}
            onClick={() => setArea(label)}
            className={`badge ${region.toLocaleLowerCase() === label.toLocaleLowerCase()
              ? "active"
              : ""
              }`}
            data-aos="flip-up"
            data-aos-delay={`${idx + 2}00`}
          >
            <span className={className}></span>
            <div>
              <h5>{label}</h5>
              <h4>
                <b>★ </b>
                {star}
                <span> </span>
              </h4>
            </div>
          </div>
        ))}
      </div>
      {state.loading ? <Loader /> : (
        <>
          {state.mealsCategory && state.mealsCategory.length ? (
            <MealList area={area} mealsCategory={state.mealsCategory} />
          ) : (
            <div data-aos="fade-up" className="propmt">
              <span id='desc'>Not Found! Please, make sure the regional name is correct.</span> <br />
              <span id='ex'> Ex: <del>china</del> → <ins>chinese</ins></span>
            </div>
          )
          }
        </>
      )}
    </div>
  )
}
