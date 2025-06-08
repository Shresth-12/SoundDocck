import React from 'react';

export default function ContactAcademy() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 font-jakarta">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6 text-sm text-black mt-24">
          <div className='flex gap-16'>
            <div className="mb-12">
              <h2 className="text-5xl font-semibold font-jakarta">Inside The</h2>
              <h3 className="text-5xl italic font-jakarta font-light mt-1">
                Sound Dockk
              </h3>
              <p className="text-sm text-gray-500 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Rerum modi atque explicabo natus repudiandae illum aut rem nostrum!
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full border border-black px-3 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Gilbert"
                className="w-full border border-black px-3 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 12345 67890"
                className="w-full border border-black px-3 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="john@gmail.com"
                className="w-full border border-black px-3 py-2 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full border border-black px-3 py-2 rounded-md h-24 resize-none"
            ></textarea>
          </div>
          <button
            className="group relative inline-flex items-center gap-2 border px-6 py-2 text-sm font-semibold transition-all hover:text-white hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-[600px] justify-center cursor-pointer rounded-xl"
          >
            <span className="absolute left-0 -z-10 block h-full w-[2px] bg-gray-400 transition-all group-hover:w-full rounded-xl"></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
