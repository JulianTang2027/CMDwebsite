import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom CSS to scope and contain Swiper styles
import "./NewsSwiper.css";

const NewsSwiper = () => {
  return (
    <div className="news-swiper-container">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="news-swiper"
      >
        <SwiperSlide className="news-slide">
          <div className="news-card">
            <h3>Latest Announcement</h3>
            <p>CMD Global advises on major acquisition in technology sector</p>
            <button className="news-button">Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="news-slide">
          <div className="news-card">
            <h3>Market Insights</h3>
            <p>
              Our analysis of current financial market trends and opportunities
            </p>
            <button className="news-button">Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="news-slide">
          <div className="news-card">
            <h3>New Partnership</h3>
            <p>Strategic alliance formed with leading financial institution</p>
            <button className="news-button">Read More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="news-slide">
          <div className="news-card">
            <h3>Industry Recognition</h3>
            <p>
              CMD Global received award for excellence in financial advisory
            </p>
            <button className="news-button">Read More</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewsSwiper;
