"use client";

import product1 from '../asset/products/product1.png';
import product2 from '../asset/products/product2.png';
import product3 from '../asset/products/product3.png';
import product4 from '../asset/products/product4.png';
import product5 from '../asset/products/product5.png';
import product6 from '../asset/products/product6.png';
import product7 from '../asset/products/product7.png';
import product8 from '../asset/products/product8.png';
import product9 from '../asset/products/product9.png';
import product10 from '../asset/products/product10.png';
import product11 from '../asset/products/product11.png';
import product12 from '../asset/products/product12.png';
import product13 from '../asset/products/product13.png';
import product14 from '../asset/products/product14.png';
import product15 from '../asset/products/product15.png';
import product16 from '../asset/products/product16.png';
import product17 from '../asset/products/product17.png';
import product18 from '../asset/products/product18.png';
import product19 from '../asset/products/product19.png';
import product20 from '../asset/products/product20.png';

const products = [
  {
    title: 'Head Light',
    images: [product1, product2],
    specs: [
      { icon: product3, label: '7-INCH' },
      { icon: product4, label: 'COOL WHITE' },
      { icon: product5, label: '10 – 32V' },
      { icon: product6, label: '15W' },
      { icon: product8, label: '650 LUMEN' },
      { icon: product7, label: 'JS55555 EMI/EMC:461E/F' },
      { icon: product8, label: 'IP67' },
    ],
  },
  {
    title: 'TURRET LIGHT',
    images: [product9],
    specs: [
      { icon: product3, label: '7-INCH' },
      { icon: product18, label: 'RED' },
      { icon: product4, label: '10 – 32V' },
      { icon: product5, label: '7W' },
      { icon: product8, label: '650 LUMEN' },
      { icon: product6, label: 'JS55555 EMI/EMC:461E/F' },
      { icon: product7, label: 'IP67' },
    ],
  },
  {
    title: 'DOME LIGHT',
    images: [product10],
    specs: [
      { icon: product3, label: '7-INCH' },
      { icon: product18, label: 'COOL WHITE' },
      { icon: product4, label: '10 – 32V' },
      { icon: product5, label: '10W' },
      { icon: product8, label: '10 LUMEN' },
      { icon: product6, label: 'JS55555 EMI/EMC:461E/F' },
      { icon: product7, label: 'IP67' },
    ],
  },
  {
    title: 'INSPECTION LIGHT',
    images: [product11],
    specs: [
      { icon: product3, label: '7-INCH' },
      { icon: product18, label: 'COOL WHITE' },
      { icon: product4, label: '10 – 32V' },
      { icon: product5, label: '2W' },
      { icon: product8, label: '10 LUMEN' },
      { icon: product6, label: 'JS55555 EMI/EMC:461E/F' },
      { icon: product7, label: 'IP67' },
    ],
  },
  {
    title: 'TURRET LIGHT SWITCH PANEL',
    images: [product12],
    specs: [
      { icon: product13, label: 'SPST & SPDT ' },
      { icon: product14, label: 'MIL Grade' },
      { icon: product15, label: '122x76mm' },
    ],
  },
  {
    title: 'MARKER LIGHT SWITCH PANEL',
    images: [product16],
    specs: [
      { icon: product13, label: 'SPST & SPDT ' },
      { icon: product14, label: 'MIL Grade' },
      { icon: product15, label: '203x80mm' },
      { icon: product17, label: 'PILOT LAMP' },
    ],
  },
  {
    title: 'MARKER LIGHT',
    images: [product19],
    specs: [
      { icon: product15, label: '110x101mm' },
      { icon: product18, label: 'RED / AMBER / GREEN / WHITE' },
      { icon: product4, label: '10 – 32V' },
      { icon: product5, label: '3W' },
      { icon: product8, label: '105 LUMEN' },
      { icon: product6, label: 'JS55555 EMI/EMC:461E/F' },
      { icon: product7, label: 'IP67' },
    ],
  },
  {
    title: 'MARKER CONTROL UNIT',
    images: [product20],
    specs: [
      { icon: product15, label: '135x132x46mm' },
      { icon: product14, label: 'MIL Grade' },
    ],
  },
];

export default function Products() {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-16 flex flex-col items-center mt-24 sm:mt-40">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">Our Products</h2>
        <p className="text-lg sm:text-2xl text-gray-500 mt-4">Advanced LED Lighting Systems</p>
      </div>

      {products.map((product, index) => (
        <div key={index} className="w-full max-w-6xl mb-20 rounded-3xl shadow-lg border border-gray-200 p-6 md:p-10 group hover:shadow-2xl transition-all duration-300">
          <h3 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-10">{product.title}</h3>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 flex justify-center gap-4">
              {product.images.map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  alt={`Product ${index + 1} Image ${idx + 1}`}
                  className="object-contain w-1/2 md:w-1/2 sm:h-64 md:h-[13rem] rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
              ))}
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-orange-100 hover:bg-orange-200 rounded-xl shadow-sm transition"
                >
                  <img src={spec.icon} alt={spec.label} className="w-10 h-10 object-contain" />
                  <span className="text-base sm:text-lg font-medium text-gray-700 whitespace-pre-line">{spec.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
