import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../../components';
import { Context } from './../../context';
import { me } from '../../constants';
import './about.css';

export default function About() {
  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: 'SET_LOADER', payload: true });
    setTimeout(() => {
      dispatch({ type: 'SET_LOADER', payload: false });
    }, 1500);
    // eslint-disable-next-line
  }, [])

  return (
    <footer>
      {state.loading ? <Loader /> :
        <>
          <div className="main-content container">
            <div data-aos="zoom-out" className="img1">
              <div data-aos="zoom-out" data-aos-delay='1500' data-aos-duration="1300" className="img2">
                <img src={me} alt="I am" />
              </div>
            </div>
            <div className="content_info">
              <h1 data-aos="zoom-in" className='greeting'>Hi. <span>I'm</span></h1>
              <h1 data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" className="name_tag">Ogabek Mustafoev</h1>
              <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" >Frontend developer with good experience in working with HTML, CSS, SASS, Bootstrap, Tailwind CSS, Material UI, Webpack, JavaScript( ES6+ ), React JS (Class & Function Components), Redux | Redux toolkit...</p>
            </div>
          </div>
          <div className='footer_wrapper container'>
            <div className="box-container">
              <div className="box">
                <h3 data-aos='fade-right' data-aos-delay='0' data-aos-duration='1000'> Cook <i className="fas fa-utensils"></i></h3>
                <p data-aos='fade-right' data-aos-delay='200' data-aos-duration='1000'>This website is made in React JS. If you liked, let's talk about project 👇</p>
                <div className="share">
                  <a data-aos-offset="0" data-aos='fade-right' data-aos-delay='400' data-aos-duration='1000' href="https://www.facebook.com/ogabek.mustafoyev.54/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-facebook-f"></i></a>
                  <a data-aos-offset="0" data-aos='fade-right' data-aos-delay='600' data-aos-duration='1000' href="https://www.instagram.com/mustafoev__ogabek/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a data-aos-offset="0" data-aos='fade-right' data-aos-delay='800' data-aos-duration='1000' href="https://t.me/Ogabek_Mustafoyev" target="_blank" rel="noopener noreferrer" ><i className="fab fa-telegram"></i></a>
                  <a data-aos-offset="0" data-aos='fade-right' data-aos-delay='1000' data-aos-duration='1000' href="https://github.com/Ogabek-Mustafoev" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
              </div>
              <div className="box">
                <h3 data-aos-offset="0" data-aos='fade-up' data-aos-delay='0' data-aos-duration='1000'> contact info <i className="fas fa-info-circle"></i></h3>
                <a data-aos-offset="0" data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000' href="tel:+998883521214" className="links"><i className="fas fa-phone"></i> +998 (88) 352-12-14</a>
                <a data-aos-offset="0" data-aos='fade-up' data-aos-delay='400' data-aos-duration='1000' href="mailto:mustafoev0806@gmail.com" className="links"><i className="fas fa-envelope"></i> mustafoev0806@gmail.com</a>
                <a data-aos-offset="0" data-aos='fade-up' data-aos-delay='600' data-aos-duration='1000' href="https://www.google.com/maps/place/Samarkand,+Uzbekistan/@39.6402225,66.6382411,10z/data=!3m1!4b1!4m5!3m4!1s0x3f4d191960077df7:0x487636d9d13f2f57!8m2!3d39.627012!4d66.9749731" target="_blank" rel="noopener noreferrer" className="links"><i className="fas fa-map-marked-alt"></i> samarkand, uzbekistan</a>
              </div>
              <div className="box">
                <h3 data-aos-offset="0" data-aos='fade-left' data-aos-delay='0' data-aos-duration='1000'> quick links <i className="fas fa-link"></i></h3>
                <Link data-aos-offset="0" data-aos='fade-left' data-aos-delay='200' data-aos-duration='1000' to="/" className="links"><i className="fas fa-arrow-right"></i> home</Link>
                <Link data-aos-offset="0" data-aos='fade-left' data-aos-delay='400' data-aos-duration='1000' to="/category" className="links"><i className="fas fa-arrow-right"></i> categories</Link>
                <Link data-aos-offset="0" data-aos='fade-left' data-aos-delay='600' data-aos-duration='1000' to="/regional/Canadian" className="links"><i className="fas fa-arrow-right"></i> regional</Link>
                <Link data-aos-offset="0" data-aos='fade-left' data-aos-delay='800' data-aos-duration='1000' to="/alphabetical" className="links"><i className="fas fa-arrow-right"></i> alphabetical</Link>
              </div>
            </div>
            <div data-aos='zoom-out' data-aos-delay='1000' data-aos-duration='1200' className="credit"> created by mr. <span> | BekDev | </span>{new Date().getFullYear()} ©️ all rights reserved! </div>
          </div>
        </>
      }
    </footer>
  );
}
