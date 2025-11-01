import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

// Import images
import img1 from "../../assets/images/banner.jpg";
import img2 from "../../assets/images/banner2.jpg";
import img3 from "../../assets/images/movie.jpg";
import img4 from "../../assets/images/squad.webp";
import img5 from "../../assets/images/Wednesday.webp";

const Carousel = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="mySwiper w-full h-[40vh] md:h-[50vh] lg:h-[60vh]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
