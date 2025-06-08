import React from 'react';
import HoverSideBar from './HoverSideBar';

function Sidebar({ sections, activeSection, onLinkClick }) {
  return (
    <div className="w-52 flex-shrink-0 sticky top-20 h-max self-start">
      <div className="space-y-4 text-sm uppercase">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={(e) => onLinkClick && onLinkClick(e, section.id)}
            className="cursor-pointer"
          >
            <HoverSideBar
              text={section.label}
              textt={section.label}
              isActive={activeSection === section.id}
              href={`#${section.id}`}
              textColor={
                activeSection === section.id ? 'text-black font-bold' : 'text-gray-500'
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
