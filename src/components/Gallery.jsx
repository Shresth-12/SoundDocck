import React from 'react';
import img1 from "../assets/img11.jpg";
import img2 from "../assets/img12.jpg";
import img3 from "../assets/img13.jpg";
import img4 from "../assets/img14.jpg";
import img5 from "../assets/img15.jpg";
import img6 from "../assets/img16.jpg";
import img7 from "../assets/img17.jpg";
import img8 from "../assets/img18.jpg";
import img9 from "../assets/img19.jpg";
import img10 from "../assets/img20.jpg";
import img11 from "../assets/img21.jpg";
import img12 from "../assets/img22.jpg";
import img13 from "../assets/img23.png";

const images = [
  { src: img1, quote: true },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 , quote: true},
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img10 },
  { src: img12 },
  { src: img12 },
];

// Add custom grid spans per image
const spans = [
  "col-span-2 row-span-2",
  "col-span-0 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex items-center space-x-2 mb-20">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <span className="uppercase text-xl font-medium tracking-wide">
          Home/ <span className="text-[#717171]">Gallery</span>
        </span>
        <div className="flex-grow h-[0.2px] bg-black ml-4"></div>
      </div>

      <div className="mb-12">
        <h2 className="text-5xl font-semibold font-jakarta">Inside The</h2>
        <h3 className="text-5xl italic font-jakarta font-light mt-1">
          Sound Dockk
        </h3>
        <p className="text-sm text-gray-500 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Rerum modi atque explicabo natus repudiandae illum aut rem nostrum!
        </p>
      </div>
      <div className='flex justify-center mt-28'>
      <div className="grid grid-cols-5 grid-rows-5 auto-rows-[150px] gap-3 w-[1064px] h-[1060px]">
        {images.map((item, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-md shadow-md group ${spans[idx % spans.length]}`}
          >
           <img
  src={item.src}
  alt={`Gallery ${idx}`}
  className="w-full h-full object-cover transition duration-300"
/>

{item.quote && (
  <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/100 to-transparent text-white text-md font-light flex items-end justify-center px-3 pb-3 text-center opacity-0 group-hover:opacity-100 transition">
    “Best place to work in Hyderabad very spacious and pleasant place to record mix and master any song”
  </div>
)}


          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
