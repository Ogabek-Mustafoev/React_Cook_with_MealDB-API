import Aos from "aos";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CategoryItems, Header, Recipe } from './components'
import { About, Category, Home, NotFound, RegionalMeals, Alphabetical } from './pages'
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    Aos.init({
      offset: 50,
      duration: 600,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:name" element={<CategoryItems />} />
        <Route path="/regional/:region" element={<RegionalMeals />} />
        <Route path="/meal/:id" element={<Recipe />} />
        <Route path="/alphabetical" element={<Alphabetical />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
