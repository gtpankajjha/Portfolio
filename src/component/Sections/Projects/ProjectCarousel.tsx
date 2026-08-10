import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

type ProjectCarouselProps = {
  images: string[];
};

const ProjectCarousel = ({
  images,
}: ProjectCarouselProps) => {
  if (!images || images.length === 0) {
    return (
      <div className="flex min-h-[350px] items-center justify-center bg-slate-100 dark:bg-slate-950">
        <p className="text-slate-500">
          No project preview available
        </p>
      </div>
    );
  }

  return (
    <Swiper
      className="h-full w-full"
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={images.length > 1}
      slidesPerView={1}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`${image}-${index}`}>
          <div className="relative h-full min-h-[350px] w-full">
            <img
              src={image}
              alt={`ToneOp Eats screenshot ${index + 1}`}
              className="h-full min-h-[350px] w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;