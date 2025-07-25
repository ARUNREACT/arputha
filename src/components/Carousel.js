import defenseProductImage from '../asset/carousel/Defense-Product-Image.png';
import BMP2 from '../asset/carousel/BMP-2.png';
import MBT from '../asset/carousel/MBT.png';
import homeHero from '../asset/carousel/home-hero.jpg';
import armyJeep from '../asset/carousel/Army-jeep.jpg';
import armyTank from '../asset/carousel/Army-Tank.jpg';
import armyTruck from '../asset/carousel/Army-Truck.jpg';
import fighterVehicle from '../asset/carousel/Fighter-vehicle.jpg';

export default function Carousel() {

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
        <div className="relative overflow-hidden rounded-lg h-[35rem] md:h-[55rem]">
          <div className="isolate overflow-hidden bg-gray-900 py-36 sm:pb-8" data-carousel-item="active">
            <img alt="homeHero" src={homeHero} className="absolute inset-0 -z-10 size-full h-full object-cover opacity-25"/>
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
              <div className="mx-auto max-w-8xl py-16 md:py-48 lg:py-32">
                <div className="text-center">
                  <h1 className="text-2xl font-semibold tracking-tight text-balance text-white md:text-7xl">
                    Innovative Solutions for Defense, Security, and Industrial Advancements
                  </h1>
                  <p className="mt-8 text-md font-medium text-pretty text-white md:text-xl/8">
                    Designing and manufacturing advanced systems like LED lighting for BMP II Tanks and IoT-based security solutions.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="/contact"
                      className="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-gray-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden duration-700 ease-in-out flex" data-carousel-item>
              <img src={defenseProductImage} className="object-contain w-full bg-white" alt="defenseProductImage"/>
          </div>
          <div className="hidden duration-700 ease-in-out flex" data-carousel-item>
              <img src={BMP2} className="w-full object-contain sm:object-cover" alt="BMP2"/>
          </div>
          <div className="hidden duration-700 ease-in-out flex" data-carousel-item>
              <img src={MBT} className="w-full object-contain sm:object-cover" alt="MBT"/>
          </div>
          <div className="hidden duration-700 ease-in-out sm:flex" data-carousel-item>
              <img src={armyJeep} className="w-full h-[18rem] sm:h-[auto] sm:w-[50%] object-cover sm:pr-5" alt="armyJeep"/>
              <img src={armyTank} className="w-full h-[18rem] sm:h-[auto] sm:w-[50%] object-cover sm:pl-5" alt="armyTank"/>
          </div>
          <div className="hidden duration-700 ease-in-out sm:flex" data-carousel-item>
              <img src={armyTruck} className="w-full h-[18rem] sm:h-[auto] sm:w-[50%] object-cover sm:pr-5" alt="armyTruck"/>
              <img src={fighterVehicle} className="w-full h-[18rem] sm:h-[auto] sm:w-[50%] object-cover sm:pl-5" alt="fighterVehicle"/>
          </div>
          <div className="hidden duration-700 ease-in-out flex" data-carousel-item>
            <video className='sm:w-full w-full' controls autoplay>
              <source src="/lightings.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/*<!-- Slider indicators -->*/}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="5"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="6"></button>
        </div>
        {/*<!-- Slider controls -->*/}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
  );
}
