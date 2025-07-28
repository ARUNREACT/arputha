'use client'

import '../App.css';
import { useState } from 'react'
import Carousel from '../components/Carousel';
import Gallery from '../components/GalleryComponent';
import Customers from '../components/Customers';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* ✅ Helmet Metadata for SEO */}
{/*      <Helmet>
        <title>Arputha Advanced Systems – Defense Lighting & Control Technologies</title>
        <meta
          name="description"
          content="Discover innovative LED lighting and control systems for defense vehicles and aerospace by Arputha Advanced Systems, an iDEX DISC 6 winner."
        />
        <meta
          name="keywords"
          content="defense lighting systems, LED control units, Arputha, iDEX DISC 6, tank lighting, aerospace electronics, advanced systems India"
        />
        <meta name="author" content="Arputha Advanced Systems Pvt. Ltd." />

         Open Graph 
        <meta property="og:title" content="Arputha Advanced Systems – Advanced Electronics for Defense" />
        <meta
          property="og:description"
          content="High-performance LED lighting and control systems for military tanks, aircraft, and ships. Powering innovation through engineering excellence."
        />
        <meta property="og:image" content="https://www.arputha-advancedsystems.com/static/media/arputha-logo.292eb020736991fdc693.png" />
        <meta property="og:url" content="https://www.arputha-advancedsystems.com/" />
        <meta property="og:type" content="website" />

         Twitter Card 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arputha Advanced Systems" />
        <meta name="twitter:description" content="Leading defense LED lighting and control tech in India." />
        <meta name="twitter:image" content="https://www.arputha-advancedsystems.com/static/media/arputha-logo.292eb020736991fdc693.png" />
      </Helmet>*/}

      <main className="mt-20">
        <Carousel/>
        <section className="mt-16 sm:mt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-10xl sm:text-center">
              <h2 className="text-xl sm:text-2xl font-semibold text-orange-600">Innovative Solutions for a Smarter Future</h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
                Transforming Ideas into Advanced Technologies for Defense, Lighting and Its Control Units.
              </p>
              <p className="mt-6 text-xl text-gray-600">
                At Arputha Advanced Systems, we specialize in the design, development, and manufacturing of cutting-edge LED lighting systems and their control units for military tanks and armored vehicles. As iDEX DISC 6 winners, we are committed to delivering high-value solutions that enhance market presence and strengthen brand equity.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                alt="App screenshot"
                src="https://img.freepik.com/free-photo/people-repairing-computer-chips_23-2150880942.jpg?t=st=1743767660~exp=1743771260~hmac=7eaf5eadc4dbc2290629cd155b76c58f49641a56e87b6005a2ee0c3c606728a6&w=996"
                width={2432}
                height={1442}
                className="mb-[-12%] rounded-xl ring-1 shadow-2xl ring-gray-900/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
        </section>
        <Customers/>
        <Gallery/>
        <section className="bg-white">
          <div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-700 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                Powering Innovation with Advanced Electronics
              </h2>
              <p className="mx-auto mt-6 max-w-4xl text-lg/8 text-pretty text-white">
                Arputha Advanced Systems delivers 
                high-impact products engineered for real-world performance. Partner with us to bring your ideas to life.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact us
                </a>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              >
                <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
