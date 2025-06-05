import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HoverSlideText from './HoverSlide';

gsap.registerPlugin(ScrollTrigger);

const Footerr = () => {
  const containerRef = useRef(null);
  const letsRef = useRef(null);
  const collaborateRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const lets = letsRef.current;
    const collab = collaborateRef.current;
    const image = imageRef.current;

    if (!container || !lets || !collab || !image) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=150%',
        scrub: true,
        pin: true,
        onUpdate: () => {
          const letsBox = lets.getBoundingClientRect();
          const collabBox = collab.getBoundingClientRect();

          const top = letsBox.bottom;
          const bottom = collabBox.top;
          const gap = Math.max(bottom - top, 10);

          image.style.top = `${top}px`;
          image.style.height = `${gap}px`;
        },
      },
    });

    tl.to(lets, { y: -200, ease: 'none' }, 0)
      .to(collab, { y: 200, ease: 'none' }, 0);

    gsap.fromTo(
      image,
      { opacity: 0 },
      {
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'center center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen bg-[#111] text-white font-sans overflow-hidden"
    >
      {/* Side Labels */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-yellow-400 text-xs">
        <span className="flex items-center gap-1">
          <span className="text-[10px] mb-1">▶</span>
          <HoverSlideText text="PLAY THE REEL" textt="PLAY THE REEL" />
        </span>
      </div>

      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-yellow-400 text-xs">
        <span className="flex items-center gap-2">
          <HoverSlideText text="CONTACT US" textt="CONTACT US" />
          <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block mb-1" />
        </span>
      </div>

      {/* Scroll Animation Section */}
      <div className="flex flex-col items-center justify-center h-full relative z-0">
        <h1
          ref={letsRef}
          className="text-[6vw] font-bold leading-none text-gray-300 m-0"
        >
          LET’S
        </h1>

        {/* Image that grows to fit gap */}
        <div
          ref={imageRef}
          className="absolute left-1/2 transform -translate-x-1/2 z-[-1] opacity-0 overflow-hidden transition-all duration-200 ease-in-out"
        >
          <img
            src="https://images.unsplash.com/photo-1748625131782-c091818a8be0?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Between"
            className="w-auto h-full object-cover rounded-md shadow-lg"
          />
        </div>

        <h1
          ref={collaborateRef}
          className="text-[6vw] font-bold leading-none text-gray-300 m-0"
        >
          COLLABORATE
        </h1>
      </div>

      {/* Footer */}
      <footer className="w-full fixed bottom-0 z-50 px-6 py-4 flex justify-between items-center text-[11px] text-yellow-400 bg-[#111] font-sans tracking-wide">
        <div className="text-left">
          <HoverSlideText text="LEGALS" textt="LEGALS" />
        </div>
        <div className="text-center">
          <HoverSlideText text="Sound Crafted with Soul" textt="Sound Crafted with Soul" />
        </div>
        <div className="text-right">
          <HoverSlideText text="CREDITS" textt="Zenith Studio" />
        </div>
      </footer>
    </div>
  );
};

export default Footerr;
