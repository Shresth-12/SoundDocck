import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#FFDE59] text-black px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <h1 className="text-[5rem] leading-[4.5rem] md:text-[8rem] md:leading-[7.5rem] font-black">
            SAY<br />HELLO
          </h1>
          <button className="mt-6 md:mt-42 bg-black text-white py-3 px-8 rounded-full font-bold hover:opacity-80 cursor-pointer">
            CONTACT US
          </button>
        </div>

        <hr className="my-10 border-black" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">
          <div>
           
          </div>

          <div>
            <h4 className="font-bold mb-2 md:text-2xl">CONTACT</h4>
            <div className="mt-6">
              <p>
                Macmerry Industrial Estate, EH33 1RD<br />Scotland, UK
              </p>
              <p className="mt-2">
                +44(0)7710923932<br />info@seabassvinyl.com
              </p>
            </div>
          </div>

          <div className='md:ml-14'>
            <h4 className="font-bold mb-2 md:text-2xl">LINKS</h4>
            <ul className="md:mt-6 space-y-1">
              {['SERVICES', 'ABOUT', 'VINYL', 'PRICING', 'CONTACT'].map((text) => (
                <li key={text} className="group w-fit cursor-pointer">
                  <span className="relative after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:mt-1 group-hover:after:w-full">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 md:text-2xl">SOCIAL</h4>
            <ul className="flex flex-col gap-1 md:mt-6">
              {[
                { icon: <FaInstagram />, text: 'INSTAGRAM' },
                { icon: <FaTwitter />, text: 'TWITTER' },
                { icon: <FaFacebookF />, text: 'FACEBOOK' },
              ].map(({ icon, text }) => (
                <li key={text} className="group flex items-center gap-2 w-fit cursor-pointer">
                  {icon}
                  <span className="relative after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:mt-1 group-hover:after:w-full">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 md:text-2xl">NEWSLETTER</h4>
            <div className="flex md:mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 px-4 border border-black rounded-l-full w-full"
              />
             <button className="bg-black text-white px-4 rounded-r-full flex items-center group">
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between text-sm  text-black">
        <p className="mt-4 md:mt-0">
  <a
    href="#"
    className="relative inline-block overflow-hidden group font-medium h-[1.5em]"
  >
    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
      Legal
    </span>
    <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
      Legal
    </span>
  </a>
</p>


<p className="mt-4 md:mt-0">
  <a
    href="#"
    className="relative inline-block overflow-hidden group font-medium h-[1.5em]"
  >
    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
    Sound Crafted with Soul
    </span>
    <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
    Sound Crafted with Soul
    </span>
  </a>
</p>






          <p className="mt-4 md:mt-0">
  <a
    href="#"
    className="relative inline-block overflow-hidden group font-medium h-[1.5em]"
  >
    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
      Built with love By
    </span>
    <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
      Zenith Studio
    </span>
  </a>
</p>







        </div>
      </div>
    </footer>
  );
};

export default Footer;
