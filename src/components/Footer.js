import React from 'react';
import logoImage from '../asset/arputha-logo.png';
import techImage from '../asset/3.png';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-8 lg:px-8 lg:py-8">
        <div className="xl:grid xl:grid-cols-1 xl:gap-8  grid">
          <div className="flex justify-center lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                alt="Logo"
                src={logoImage}
                className="h-14 w-auto object-cover"
              />
            </a>
            <a href="/" className="-m-1.5 p-1.5 pt-4">
              <img
                alt="Tech"
                src={techImage}
                className="h-12 w-auto object-cover ml-8"
              />
            </a>
          </div>

          <div className="mt-16 flex justify-center sm-grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 items-center">
            <div className="flex sm:max-w-2xl w-full sm-justify-center justify-around md:gap-8">
              <div>
                <a href="/" className="text-sm/6 font-semibold text-black text-center">Home</a>
              </div>
              <div className="md:mt-0">
                <a href="/contact" className="text-sm/6 font-semibold text-black text-center">Contact us</a>
              </div>
              <div>
                <a href="/about" className="text-sm/6 font-semibold text-black text-center">About us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
