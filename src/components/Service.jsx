import React, { useState, useEffect, useRef } from 'react';
import img1 from '../assets/img1.jpg';
import Sidebar from './Sidebar';

const sections = [
  { id: 'production', label: 'Recording services' },
  { id: 'services', label: 'Mixing & Node String' },
  { id: 'locations', label: 'Music Production' },
  { id: 'xrstudio', label: 'Remote Mastering' },
  { id: 'backlot', label: 'Artist Management' },
];

function LocationsPage() {
  const [activeSection, setActiveSection] = useState('locations');
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      if (sectionRefs.current[section.id]) {
        observer.observe(sectionRefs.current[section.id]);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (sectionRefs.current[section.id]) {
          observer.unobserve(sectionRefs.current[section.id]);
        }
      });
    };
  }, []);

  const handleSidebarClick = (e, id) => {
    e.preventDefault();
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const activeNumber = activeIndex !== -1 ? `0${activeIndex + 1}` : '01';

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="flex items-center space-x-2 mb-20">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <span className="uppercase text-xl font-medium tracking-wide">
          Home/ <span className="text-[#717171]">Services</span>
        </span>
        <div className="flex-grow h-[0.2px] bg-black ml-4"></div>
      </div>
      <div className="mb-16">
        <h2 className="text-5xl font-semibold">Got a Sound in</h2>
        <h3 className="text-5xl italic font-light mt-1">Mind?</h3>
        <p className="text-sm text-gray-500 mt-4 mb-32">
          We’re all ears, let’s talk sound. Let’s bring it to life. Get in touch today.
        </p>
      </div>

      {/* Flex container for the page */}
      <div className="flex gap-12">
        {/* Active Number */}
        <div className="text-6xl font-bold sticky top-20 self-start w-[60px] -ml-[100px]">
          {activeNumber}
        </div>

        {/* Sidebar */}
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          onLinkClick={handleSidebarClick}
        />

        {/* Main Content */}
        <div className="flex-1 space-y-32">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="scroll-mt-24 border-b border-gray-300 pb-12 mb-12"
            >
              <h1 className="text-5xl font-medium mb-4">{section.label}</h1>
              <h2 className="text-lg font-light mb-8 text-[#717171]">
                Access all that France has to offer.
              </h2>

              {/* Group for scroll reveal effect */}
              <div className="flex flex-col md:flex-row items-start gap-16">
                {/* Image Reveal from Top on Scroll */}
                <div className="relative overflow-hidden w-full md:w-[700px] max-w-xl h-[500px]">
                  <img
                    src={img1}
                    alt={section.label}
                    className={`absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-1000 ease-in-out ${
                      visibleSections[section.id]
                        ? 'translate-y-0'
                        : '-translate-y-full'
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 text-gray-700 text-sm leading-relaxed space-y-4">
                  <p>
                    We can unlock the most iconic and breathtaking locations across France.
                  </p>
                  <p>
                    From the picturesque streets of Paris, the majestic peaks of the Alps
                    to the stunning diversity of the French coastline, our team ensures
                    seamless access and handles all logistical challenges, allowing you to
                    focus on your creative vision.
                  </p>
                  <p>
                    We're committed to providing a personalized and efficient service that exceeds expectation.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default LocationsPage;
