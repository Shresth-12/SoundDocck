import React from "react";

export default function DropdownMenu() {
  return (
    <div className="flex flex-col items-end w-full gap-2 px-6 pt-20 pb-8 bg-[#161616] text-white">
      {["STUDIO", "APPROACH", "PROJECTS", "BLOG", "CONTACT"].map((item, index) => (
        <div key={index} className="overflow-hidden">
          <div className="transition-all duration-500 ease-in-out transform translate-y-0">
            <a
              href={`/${item.toLowerCase()}`}
              className="flex flex-row items-center tracking-tight gap-4 font-medium text-5xl leading-tight hover:opacity-70 transition duration-300"
            >
              {item}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
