import { portfolioCard } from "../../data";
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./portfolio-card.css";

// Initialize SwiperCore components
SwiperCore.use([Autoplay, Pagination]);

const PortfolioCard = () => {
  const [swiper, setSwiper] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const newSwiper = swiperRef.current.swiper;

      newSwiper.on("slideChange", () => {
        // handle slide change event if needed
      });

      setSwiper(newSwiper);
    }
  }, []);

  const handleToggleAutoplay = () => {
    if (swiper) {
      if (autoplay) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
      setAutoplay(!autoplay);
    }
  };
  return (
    <>
      <Swiper
        ref={swiperRef}
        className=" mySwiper container portfoliocards__container"
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {portfolioCard.map(({ id, Image, title, des, viewMore }) => {
          return (
            <SwiperSlide key={id} className="portfoliocard">
              <div className="portfolio__cardItem-image">
                <img src={Image} alt={title} className="portfoliocard_img" />
              </div>

              <div className="portfolio__cardItem-Cta">
                <h3>{title}</h3>
                <p>{des}</p>
                <a href={viewMore} className="btn more_btn">
                  View more
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="autoplay_btn">
        <button onClick={handleToggleAutoplay} className="btn ss_btn">
          {autoplay ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </>
  );
};

export default PortfolioCard;
