import React from 'react';

const HoverSideBar = ({ text, textt, isActive, href = "#", textColor = '' }) => {
  return (
    <p className="mt-4 md:mt-0 h-[1.5em]">
      <a
        href={href}
        className={`relative inline-block overflow-hidden font-medium h-[1.5em] ${textColor}`}
      >
        <span
          className={`block transition-transform duration-300 ${
            isActive ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          {text}
        </span>
        <span
          className={`block absolute top-full left-0 transition-transform duration-300 whitespace-nowrap ${
            isActive ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          {textt}
        </span>
      </a>
    </p>
  );
};

export default HoverSideBar;
