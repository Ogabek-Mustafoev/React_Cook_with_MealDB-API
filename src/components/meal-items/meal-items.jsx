import React from 'react'
import { Link } from 'react-router-dom'

export default function MealItems({ strMeal, strMealThumb, idMeal }) {
  return (
    <div data-aos="fade-up" data-aos-delay='100' className="box">
      <img src={strMealThumb} alt={strMeal} />
      <h3 data-aos="fade-left" data-aos-delay='200'>{strMeal.length > 20 ? `${strMeal.slice(0, 20)}...` : strMeal}</h3>
      <div data-aos="fade-right" data-aos-delay='300' className="centered">
        <Link to={`/meal/${idMeal}`} className="btn">
          <b>{strMeal.length > 10 ? `${strMeal.slice(0, 10)}...` : strMeal}</b> <span>recipe</span>
        </Link>
      </div>
    </div>
  )
}
