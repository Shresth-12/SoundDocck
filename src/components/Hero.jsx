import React from "react";
import Carousel from "./Carousel";
import HoverSlideText from "./HoverSlide";

export default function Hero() {
  return (
    <div
      className="px-8 relative text-white pb-10 overflow-hidden font-jakarta"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='150' height='150' fill='none' stroke-width='0.4' stroke='%2318181b' stroke-opacity='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,

      }}
      
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {[
          { top: "22%", left: "15%" },
          { top: "22%", left: "85%" },
          { top: "75%", left: "15%" },
          { top: "75%", left: "85%" },
        ].map((pos, idx) => (
          <div
            key={idx}
            className="absolute text-white text-2xl font-light select-none"
            style={{ top: pos.top, left: pos.left, opacity: 1 }}
          >
            +
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full z-10 relative">
        <div className="text-left w-full max-w-[1000px]">
          <h1 className="md:text-[180px] sm:text-8xl font-bold leading-none md:font-light ml-64 tracking-tight">
            THE <br /> SOUND <br /> DOCKK
          </h1>
        </div>
      </div>

      <div className="mt-8 z-10 relative">
        <Carousel />
      </div>

      <div className="flex justify-center w-full mt-10 z-10 relative">
        <div className="text-left w-full max-w-[1000px]">
          <h2 className="md:text-[160px] sm:text-6xl font-bold md:font-light ml-64">
            SOUND <span className="text-yellow-400">&</span> <br /> CREATIVE <br /> DIRECTION
          </h2>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 text-[16px] z-10">
        <HoverSlideText text=" DISCOVER MORE ●" textt=" DISCOVER MORE ●" />
      </div>

      <div className="absolute bottom-8 right-8 w-20 h-20 z-10">
  <div
    className="relative w-full h-full flex items-center justify-center border rounded-full"
    style={{ borderColor: "#565656C4", borderWidth: "1px" }}
  >
    <svg
      viewBox="0 0 100 100"
      className="absolute w-full h-full animate-[spin_10s_linear_infinite]"
    >
      <defs>
        <path
          id="circlePath"
          d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
        />
      </defs>
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        strokeWidth="1"
      />
      <text
        fill="white"
        fontSize="10.8"
        fontWeight="lighter"
        fontFamily="sans-serif"
        letterSpacing="1"
      >
        <textPath href="#circlePath" startOffset="0%">
          ● SCROLL DOWN TO EXPLORE MORE
        </textPath>
      </text>
    </svg>

    <div className="text-white text-xl z-10 font-bold">↓</div>
  </div>
</div>

    </div>
  );
}
