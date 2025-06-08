import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { ArrowRight } from 'lucide-react';

export default function AcademyHero() {
  return (
    <div className="px-8 py-10 max-w-7xl mx-auto font-sans text-black font-jakarta mb-78">
      <div className="flex items-center space-x-2 mb-12">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <span className="uppercase text-xl font-medium tracking-wide">
          Home/ <span className="text-[#717171]">Academy</span>
        </span>
        <div className="flex-grow h-[0.2px] bg-black ml-4"></div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1 mt-48 relative">
          <p className="text-sm text-gray-600 mb-4">
            Learn recording, mixing, mastering & more from professionals.
          </p>

          <h1 className="text-7xl font-[600] leading-tight mb-6 relative"
          >
            <span className='font-medium'  style={{letterSpacing: '3px'  }}>
            Where Future{''}
            </span>
            
            <span
              className="italic font-extralight text-white absolute z-50"
              style={{ fontFamily: 'Lora',right:"60px" }}
            >
              Sound
            </span>{' '}
            <br />
            <span className="italic font-extralight" style={{ fontFamily: 'Lora' }}>
              Engineers
            </span>{' '}
            Are{' '}
            <span
              className="text-white absolute z-50"
              style={{ right:"100px" }}
             
            >
              Born.
            </span>
          </h1>

          <p className="text-[17px] leading-relaxed text-[#3f3f3f] w-[431px]">
            Pizza ipsum dolor meat lovers buffalo. Pizza Philly tossed meatball NY pesto thin parmesan white Chicago.
            Parmesan mushrooms lot pork style string peppers olives wing. Philly ipsum pizza string fresh Philly pepperoni.
            Lasagna NY chicken black sauce bbq deep pesto tomato mouth. Bell cheese tomato string mayo NY olives.
          </p>
        </div>

        <div className="flex-1 relative flex flex-col items-end space-y-4 ml-0 md:-ml-80">
          <div className="flex space-x-4">
            <img src={img1} alt="img1" className="w-[386px] h-[450px] object-cover rounded brightness-70 z-10" />
            <img src={img2} alt="img2" className="w-[342px] h-[408px] object-cover rounded mt-16 z-50" />
          </div>
          <div className="flex justify-center w-full mt-[-100px]">
            <img src={img3} alt="img3" className="w-[439px] h-[280px] object-cover rounded ml-24 z-20" />
          </div>
          <div className="absolute bottom-[80px] left-0 text-sm flex flex-col space-y-1 cursor-pointer hover:underline">
  <span>Contact to know</span>
  <div className="flex items-center space-x">
    <span>more</span>
    <svg
    width={100}
    height={10}
    viewBox="0 0 105 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="0"
      y1="10"
      x2="90"
      y2="10"
      stroke={"black"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <polygon
      points="90,5 105,10 90,15"
      fill={"black"}
    />
  </svg>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
