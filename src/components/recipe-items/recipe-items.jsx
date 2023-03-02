import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './recipe-items.css'

export default function RecipeItems({ recipe }) {
  const [showRecipe, setShowRecipe] = useState(false);
  const navigate = useNavigate();

  return (
    <div data-aos="fade-up" className="card-wrapper">
      <div className="recipe-header">
        <button data-aos="fade-right" className="btn" onClick={() => navigate(-1)}>👈 Go Back</button>
        <h1 data-aos="fade-left" className='recipe-heading' >{recipe?.strMeal}</h1>
      </div>
      {recipe.idMeal && (
        <div className="card">
          <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500" className='img'>
            <img src={recipe?.strMealThumb} alt={recipe?.strMeal} />
          </div>
          <div data-aos="fade-left" data-aos-delay="100" className="description">
            <p data-aos="fade-left" data-aos-delay="200"> <b>Instruction:</b> {recipe?.strInstructions}</p>
            <ul>
              <li data-aos="fade-left" data-aos-delay="300"><span>👨‍🍳</span> About <b>{recipe?.strMeal}:</b></li>
              <li data-aos="fade-left" data-aos-delay="400"><span>🍽️</span> <b>{recipe?.strCategory}</b> Category</li>
              {recipe?.strArea &&
                <li data-aos="fade-left" data-aos-delay="500"><span>🌏</span> <b>{recipe?.strArea}</b> Meal</li>
              }
            </ul>
          </div>
        </div>
      )}
      <div data-aos="fade-up" data-aos-duration="600" data-aos-offset='0' data-aos-delay="600" className="centered">
        <button className="btn" onClick={() => setShowRecipe(!showRecipe)}>
          {showRecipe ? 'Hide' : 'Show'} Recipe
        </button>
      </div>

      {showRecipe && <div className="ingredient_and_youtube">
        {
          <table data-aos="zoom-in-right" data-aos-delay="500">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={recipe[key]} >
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table>
        }
        {recipe?.strYoutube ? (
          <div data-aos="zoom-in-left" data-aos-delay="500" className="youtube_content">
            <iframe
              src={`https://www.youtube.com/embed/${recipe?.strYoutube.slice(
                -11
              )}`}
              title={recipe.idMeal}
              width="100%"
              height="100%"
              allowFullScreen
            />
          </div>
        ) : <h1 className='heading'>Youtube video isn't available!</h1>}
      </div>}
    </div>
  )
}
