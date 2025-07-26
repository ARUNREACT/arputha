'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gallery1 from '../asset/gallery1.png';
import gallery2 from '../asset/gallery2.png';
import gallery3 from '../asset/gallery3.png';
import gallery4 from '../asset/gallery4.jpg';

export default function Gallery() {
  const images = [gallery3, gallery1, gallery2, gallery4];

  return (
    <div className="bg-white mt-20 py-12">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full object-cover h-[20rem] sm:h-[45rem]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
