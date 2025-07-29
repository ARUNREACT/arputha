// components/SwiperCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef } from 'react';

import image1 from '../asset/carousel/image1.png';
import image5 from '../asset/carousel/carouselnew/BMP 2.png';
import image8 from '../asset/carousel/carouselnew/Defence-Vehicles.png';


const slides = [
  {
    type: 'image',
    src: image1,
    alt: 'Slide 1',
    content: (
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-6">
        <h1 className="text-2xl md:text-5xl font-bold text-center max-w-7xl">
          We are innovative defense lightings and Control Units Manufacturing Company in India
        </h1>
      </div>
    ),
  },
  { type: 'image', src: image5, alt: 'Slide 5' },
  { type: 'image', src: image8, alt: 'Slide 8' },
];

export default function SwiperCarousel() {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full h-[30rem] md:h-[50rem] overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover sm:object-fill"
                />
              {slide.content && (
                <div className="absolute inset-0 z-10">{slide.content}</div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows styling override (optional) */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.4);
          padding: 1.5rem;
          border-radius: 9999px;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.7);
        }
        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #fff;
        }
        .swiper-button-prev:after, .swiper-button-next:after{
          font-size: 20px;
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}
