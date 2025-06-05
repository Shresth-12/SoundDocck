import React from "react";
import HoverSlideText from "./HoverSlide";
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 text-white uppercase text-sm" style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='150' height='150' fill='none' stroke-width='0.4' stroke='%2318181b' stroke-opacity='0.5'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        backgroundRepeat: "repeat",
      }}>
      <div className="text-black px-3 py-1 font-bold flex items-center gap-2">
      <img src={logo} alt="Logo" className="h-10" />
      </div>
      <div className="flex gap-6">
      {["About", "Service", "Work", "Academy", "Gallery", "Contact"].map(
  (item) => (
    <HoverSlideText text={item} textt={item} />
  )
)}
      </div>
    </div>
  );
}
