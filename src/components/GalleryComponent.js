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

export default function GalleryComponent() {
  const gallery = [gallery3, gallery1, gallery2, gallery4];

  return (
    <div className="bg-white sm:mt-20 py-12 mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <h5 className="text-orange-600 text-xl sm:text-3xl font-semibold sm:pb-8">Honoring Excellence</h5>
      <h2 className="text-center text-2xl sm:text-5xl font-semibold text-black pb-8 sm:pb-12">Our Leader Meets with Distinguished Figures</h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {gallery.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full object-cover h-[10rem] md:h-[20rem]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
