'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import custImage1 from '../asset/customer-1.png';
import custImage2 from '../asset/customer-2.png';
import custImage3 from '../asset/customer-3.png';
import custImage4 from '../asset/customer-4.png';
import custImage5 from '../asset/customer-5.png';
import custImage6 from '../asset/customer-6.jpg';


export default function Customers() {
  const images = [custImage1, custImage2, custImage3, custImage4, custImage5, custImage6];

  return (
    <section className="pt-12 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-5xl font-semibold text-black pb-8 sm:pb-12">
          Our Clients & Partners
        </h2>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.concat(images).map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Customer ${idx + 1}`}
                className="h-52 w-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
