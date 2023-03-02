import { useContext, useEffect } from "react";
import { getMealCategories } from "../../api";
import { Link } from "react-router-dom";
import { bg } from '../../constants'
import { Context } from "../../context";
import { Loader, SwiperSlider } from "../../components";
import "./home.css";

export default function Home() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: 'SET_LOADER', payload: true })
    getMealCategories().then((data) => {
      dispatch({ type: 'SET_CATEGORY', payload: data.categories });
      setTimeout(() => {
        dispatch({ type: 'SET_LOADER', payload: false })
      }, 1500);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {state.loading ? <Loader /> :
        <>
          <div
            data-aos="fade-up"
            className="home"
            id="home"
            style={{
              background: `url(${bg}) no-repeat`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="darken"></div>
            <div className="content">
              <h3 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                delicious and <span>nutritious</span> foods <br /> for your health!
              </h3>
              <p data-aos="zoom-in-up">
                Here you can find a variety of traditional foods from many
                countries. All the cooking methods are listed!
              </p>
              <a data-aos="zoom-in" href="#products" className="btn">
                <b>Let's cook</b>
              </a>
            </div>
          </div>
          <div className="container">
            <div className="products" id="products">
              <h1 data-aos="zoom-out-up" data-aos-delay="500" data-aos-duration="1200" className="heading">
                Check <span>Categories!</span>
              </h1>
              <SwiperSlider category={state.category} />
              <div className="centered">
                <Link data-aos="zoom-out-up" data-aos-duration="800" to="/category" className="btn">
                  See <b>Full Category List</b> <i className="fas fa-external-link-alt"></i>
                </Link>
              </div>
            </div>
            <div className="products regional" >
              <h1 className="heading" data-aos="zoom-out-up" data-aos-delay="500" data-aos-duration="800">
                What's about <span>Regional Food</span>
              </h1>
              <SwiperSlider category={state.regions} type='food' />
              <div className="centered">
                <Link to="/regional/canadian" className="btn">
                  See <b>Regional Foods</b> <i className="fas fa-external-link-alt"></i>
                </Link>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
}
