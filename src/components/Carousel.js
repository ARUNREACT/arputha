// components/SwiperCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef } from 'react';

import image1 from '../asset/carousel/image1.png';
import image2 from '../asset/carousel/image2.png';
import image3 from '../asset/carousel/image3.png';

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
        <p className="mt-4 text-lg md:text-xl text-center max-w-7xl">
          Designing and manufacturing advanced systems like LED lighting for BMP II Tanks and IoT-based security solutions.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-orange-400 px-6 py-2 text-black font-semibold rounded hover:bg-gray-700 hover:text-white"
        >
          Contact Us
        </a>
      </div>
    ),
  },
  { type: 'image', src: image2, alt: 'Slide 2' },
  { type: 'image', src: image3, alt: 'Slide 3' },
  { type: 'video', src: '/lightings-fixed.mp4', alt: 'Video Slide' },
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
              {slide.type === 'image' ? (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  className="w-full h-full object-cover"
                  controls
                  onPlay={() => swiperRef.current?.swiper?.autoplay.stop()}
                  onPause={() => swiperRef.current?.swiper?.autoplay.start()}
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
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
