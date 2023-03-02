import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderCard } from "../";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export default function SwiperSlider({ category, type }) {
  return (
    <Swiper
      data-aos="flip-up" data-aos-delay="600"
      slidesPerView={3}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1020: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="swiper all-slider mySwiper"
    >
      {category.map(
        ({ idCategory, ...item }) => (
          <SwiperSlide key={idCategory} className="swiper-slide">
            <SliderCard {...item} type={type} />
          </SwiperSlide>
        )
      )}
    </Swiper>
  )
}
