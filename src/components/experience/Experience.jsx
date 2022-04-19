import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ME from "../../assets/me-about.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./experience.css";
import { Pagination, Navigation } from "swiper";

function Experience() {
  return (
    <div className="experience__swiper">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="client__avatar">
            <img className="client__image" src={ME} alt="Snow"></img>
            <div className="top__left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae ante aliquam libero rutrum ultricies. Aenean gravida risus
              tellus, in blandit sapien malesuada quis. Vivamus iaculis feugiat
              elit a lobortis. Sed feugiat purus vitae massa lacinia posuere.
              Donec vitae mattis augue. Nam viverra placerat fringilla.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="client__avatar">
            <img className="client__image" src={ME} alt="Snow"></img>
            <div className="top__left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae ante aliquam libero rutrum ultricies. Aenean gravida risus
              tellus, in blandit sapien malesuada quis. Vivamus iaculis feugiat
              elit a lobortis. Sed feugiat purus vitae massa lacinia posuere.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Experience;
