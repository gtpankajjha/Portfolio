import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../../../assets/image/Toneop1.png";
import img2 from "../../../assets/image/Toneop2.png";
import img3 from "../../../assets/image/Toneop3.png";

const images = [img1, img2, img3];

const ProjectCarousel = () => {
  return (
    <Swiper
      className="h-full rounded-l-3xl"
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop
      slidesPerView={1}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className="relative h-full">
            <img
              src={image}
              alt=""
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;