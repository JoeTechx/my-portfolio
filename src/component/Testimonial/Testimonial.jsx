import React from "react";
import "./Testimonial.css";
import Avtr1 from "../../assets/avatar1.jpg";
import Avtr2 from "../../assets/avatar2.jpg";
import Avtr3 from "../../assets/avatar3.jpg";
import Avtr4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avtr1,
    name: "Tina Snow",
    review:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit dolor sit amet, consectetur adipisicing elit. Ipsa,dolor sit amet, consectetur adipisicing elit",
  },
  {
    avatar: Avtr2,
    name: "Shatta Wale",
    review:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit dolor sit amet, consectetur adipisicing elit. Ipsa,dolor sit amet, consectetur adipisicing elit",
  },
  {
    avatar: Avtr3,
    name: "Kwame Despite",
    review:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit dolor sit amet, consectetur adipisicing elit. Ipsa,dolor sit amet, consectetur adipisicing elit",
  },
  {
    avatar: Avtr4,
    name: "Nana Ana McBrown",
    review:
      "lorem ipsum dolor sit amet, consectetur adipisicing elit dolor sit amet, consectetur adipisicing elit. Ipsa,dolor sit amet, consectetur adipisicing elit",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className=" mySwiper container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
