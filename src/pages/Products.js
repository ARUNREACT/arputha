'use client';

import image1 from '../asset/products/image1.png';
import image2 from '../asset/products/image2.png';
import image3 from '../asset/products/image3.png';
import image4 from '../asset/products/image4.png';
import image5 from '../asset/products/image5.png';
import image6 from '../asset/products/image6.png';
import image7 from '../asset/products/image7.png';
import image8 from '../asset/products/image8.png';

const specifications = [
  { icon: image3, label: '7-INCH' },
  { icon: image4, label: '6000K' },
  { icon: image5, label: '10 – 32V' },
  { icon: image6, label: '15W' },
  { icon: image7, label: 'JS55555 EMI/EMC: 461E/F' },
  { icon: image8, label: 'IP67' },
];

export default function Products() {
  return (
    <div className="bg-white mt-20 py-12 px-4 md:px-16 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Products</h2>
        <p className="text-gray-500 mt-2">Advanced LED Lighting Systems</p>
      </div>

      {/* Product Images */}
      <div className="w-full mb-12 max-w-6xl">
        <div className="p-4 rounded-xl shadow-2xl flex flex-col md:flex-row gap-4">
          <img
            src={image1}
            alt="Product 1"
            className="object-contain w-full md:w-1/2 h-64 md:h-[23rem] rounded-lg"
          />
          <img
            src={image2}
            alt="Product 2"
            className="object-contain w-full md:w-1/2 h-64 md:h-[23rem] rounded-lg"
          />
        </div>
      </div>

      {/* Product Title */}
      <h2 className="text-3xl md:text-4xl font-bold w-full text-left mb-8 px-2 md:px-0 max-w-6xl text-center">Hull Light</h2>

      {/* Specification Icons with Labels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-2 max-w-6xl">
        {specifications.map((spec, idx) => (
          <div
            key={idx}
            className="flex items-center bg-orange-100 hover:bg-orange-200 transition px-6 py-4 rounded-xl shadow-sm"
          >
            <img src={spec.icon} alt={spec.label} className="w-12 h-12 object-contain" />
            <span className="text-lg sm:text-xl font-semibold pl-4 text-gray-800">
              {spec.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
