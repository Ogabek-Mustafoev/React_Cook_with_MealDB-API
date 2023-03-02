import { useParams } from 'react-router-dom'
import { MealItems } from '../'
import './meal-list.css'

export default function MealList({ mealsCategory = [], area = '' }) {
  const { name } = useParams()

  return (
    <div style={{ marginTop: !area ? '7rem' : 'unset', paddingTop: area ? '0' : '' }} className="categories" id="categories">
      <>
        <h1 data-aos="zoom-out-down" className="heading">{area.length ? <span>{area + ' Foods'}</span> : <span>{name + ' Category'}</span>} </h1>
        <div className="box-container">
          {mealsCategory.map((meal) => (
            <MealItems key={meal.idMeal} {...meal} />
          ))}
        </div>
      </>
    </div>
  )
}
