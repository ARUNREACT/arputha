'use client'
import certificates1 from '../asset/certificates-1.png';
import gallery1 from '../asset/gallery1.png';
import gallery2 from '../asset/gallery2.png';
import gallery3 from '../asset/gallery3.webp';

export default function Gallery() {

  return (
    <div className="bg-white block mt-24 overflow-hidden">
      <div className="flex">
        <img src={gallery3} className="md:w-full md:h-[50rem] object-cover" alt="team3" />
      </div>
      <div className="md:flex">
        <img src={gallery1} className="md:w-[70%] md:h-[50rem] object-cover" alt="team2" />
        <img src={gallery2} className="md:w-[30%] md:h-[50rem] object-cover" alt="team1" />
      </div>
    </div>
  );
}

;
