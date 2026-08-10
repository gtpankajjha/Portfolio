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
      className="h-full w-full rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="h-full">
          <div className="relative h-full w-full">
            {/* Project Image */}
            <img
              src={image}
              alt={`Project screenshot ${index + 1}`}
              className="
                h-full
                min-h-[320px]
                w-full
                object-cover
              "
            />

            {/* Image Overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-950/40
                via-transparent
                to-transparent
                transition-opacity
                duration-300
                dark:from-slate-950/50
              "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;