import React from 'react'
import { Link } from 'react-router-dom'

export default function SliderCard({ strCategory, strCategoryThumb, strCategoryDescription, type = 'Category' }) {
  return (
    <div className="box">
      <div className="card-img">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <h3>{strCategory}</h3>
        {strCategoryDescription ?
          (<div className="descr">
            {strCategoryDescription.length > 70
              ? `${strCategoryDescription.slice(0, 70)}...`
              : strCategoryDescription}
          </div>) :
          (<div className="descr">Foods</div>)
        }
      </div>
      <div className="card-action">
        <Link to={type === 'food' ? `/regional/${strCategory}` : `/category/${strCategory}`} className="btn">
          <b>{strCategory}</b> {type}
        </Link>
      </div>
    </div>
  )
}
