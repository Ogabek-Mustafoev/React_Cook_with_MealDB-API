import { Link } from "react-router-dom";

export default function CategoryCard(props) {
  const { strCategoryThumb, strCategory, strCategoryDescription } = props;

  return (
    <div data-aos="zoom-in-up" className="box">
      <img src={strCategoryThumb} alt={strCategory} />
      <h3 data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">{strCategory}</h3>
      <p data-aos="fade-left">{strCategoryDescription.length > 70
        ? `${strCategoryDescription.slice(0, 70)}...`
        : strCategoryDescription}</p>
      <Link data-aos="fade-right" to={`/category/${strCategory}`} className="btn">
        <b>{strCategory.length > 10 ? `${strCategory.slice(0, 10)}...` : strCategory}</b> Category
      </Link>
    </div>
  )
}
