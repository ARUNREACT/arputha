'use client'
import certificates1 from '../asset/certificates-1.png';
import IPLogo from '../asset/IP-Logo.png';

function Certificates() {
  return (
    <div className="bg-white mt-20 sm:mt-40 px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Right Side - IP Details */}
        <div>
          <div className="flex items-center mb-4 justify-center">
            <img src={IPLogo} className=" object-contain mr-3" alt="IP Logo" />
          </div>
          <h2 className="text-4xl sm:text-4xl font-semibold text-gray-800">Intellectual Property (IP)</h2>
          <ul className="mt-6 space-y-4 text-gray-700 list-decimal list-inside text-xl">
            <li>
              <strong>Application No. 202541062689</strong> dated July 01, 2025 – LED-Based Friend or Foe Identification System for Armored Vehicles
            </li>
            <li>
              <strong>Application No. 202541071601</strong> dated July 28, 2025 – LED Inspection Light System with Dual Power and Intensity Control for Armoured Military Vehicles
            </li>
            <li>
              <strong>Application No. 202541071602</strong> dated July 28, 2025 – Programmable LED Display System for Military Vehicles
            </li>
            <li>
              <strong>Application No. 202541071603</strong> dated July 28, 2025 – LED Headlight System with Selectable Modes for Armored Vehicles
            </li>
            <li>
              <strong>Application No. 202541071696</strong> dated July 28, 2025 – LED Dome Light with Dual-Intensity Control for Armored Vehicles
            </li>
          </ul>
        </div>

        {/* Left Side - Certificate Image */}
        <div className="flex justify-center">
          <img
            src={certificates1}
            className="w-full max-w-xl object-contain rounded-xl shadow-lg"
            alt="Certificate"
          />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
