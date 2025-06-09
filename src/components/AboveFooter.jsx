import React from 'react';
import img1 from '../assets/img9.jpg';
import img2 from '../assets/img8.jpg';
import HoverSlideText from './HoverSlide';

export default function AboveFooter() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden font-jakarta">
      <img
        src={img1}
        alt="left"
        className="absolute top-20 left-10 w-52 h-auto object-cover rotate-[-10deg] shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-[-5deg] hover:-translate-y-2"
      />
      <img
        src={img2}
        alt="right"
        className="absolute top-[350px] right-10 w-52 h-auto object-cover rotate-[5deg] shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-[10deg] hover:-translate-y-2"
      />
      <h1 className="text-6xl md:text-7xl font-extrabold text-black text-center leading-tight mb-6">
        Start Your <span className="font-extralight">Sound Journey</span> <br /> with Us Today.
      </h1>
      <p className="-mt-2 text-gray-500 text-center px-4">
        Let’s collaborate and turn your creative spark into a studio-quality track.
      </p>
      <button className="text-black px-6 py-3 rounded-full font-semibold tracking-wide transition mt-10">
        <HoverSlideText text="CONTACT US ●" textt=" CONTACT US ●" />
      </button>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-2xl text-gray-400">+</div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-2xl text-gray-400">+</div>
    </div>
  );
}
