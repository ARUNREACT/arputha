'use client'
import certificates1 from '../asset/certificates-1.png';

function Certificates() {

  return (
    <div className="bg-white block mt-36 flex justify-center py-6 sm:py-14 px-4">   
      <img src={certificates1} className="md:h-[50rem] object-contain" alt="certificate" />
    </div>
  );
}

export default Certificates;
