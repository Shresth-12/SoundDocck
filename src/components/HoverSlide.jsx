import React from 'react';

const HoverSlideText = ({ text, href = "#",textt }) => {
  return (
    <p className="mt-4 md:mt-0">
      <a
        href={href}
        className="relative inline-block overflow-hidden group font-medium h-[1.5em]"
      >
        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
          {text}
        </span>
        <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
          {textt}
        </span>
      </a>
    </p>
  );
};

export default HoverSlideText;
