import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 font-jakarta">
      <div className="flex items-center space-x-2 mb-20">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <span className="uppercase text-xl font-medium tracking-wide">
          Home/ <span className="text-[#717171]">Contact</span>
        </span>
        <div className="flex-grow h-[0.2px] bg-black ml-4"></div>
      </div>
      <div className="mb-16">
        <h2 className="text-5xl font-semibold">Got a Sound in</h2>
        <h3 className="text-5xl italic font-light mt-1">Mind?</h3>
        <p className="text-sm text-gray-500 mt-4">
          We’re all ears, let’s talk sound. Let’s bring it to life. Get in touch today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6 text-sm text-black mt-24">
          <div className="flex flex-col md:flex-row md:space-x-16 md:gap-14">
            <div>
              <h4 className="font-medium mb-1 text-xl">Phone Number</h4>
              <p className='mt-2'>+9876543210</p>
            </div>
            <div>
              <h4 className="font-medium mb-1 text-xl">Gmail</h4>
              <p className='mt-2'>Support@thesounddcock</p>
            </div>
          </div>
          <div className='flex gap-15'>
          <div className='w-48'>
            <h4 className="font-medium mb-1 text-xl">Address</h4>
            <p className='mt-2'>
              Pizza ipsum dolor meat lovers buffalo. Lot green mouth pie deep Philly style meatball.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-1 text-xl">Social</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.073C22 6.477 17.523 2 12 2S2 6.477 2 12.073c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V22c4.781-.75 8.438-4.887 8.438-9.927z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.005.24 2.47.403a4.92 4.92 0 0 1 1.675 1.092 4.92 4.92 0 0 1 1.092 1.675c.163.465.347 1.264.403 2.47.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.005-.403 2.47a4.92 4.92 0 0 1-1.092 1.675 4.92 4.92 0 0 1-1.675 1.092c-.465.163-1.264.347-2.47.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.005-.24-2.47-.403a4.92 4.92 0 0 1-1.675-1.092 4.92 4.92 0 0 1-1.092-1.675c-.163-.465-.347-1.264-.403-2.47C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.24-2.005.403-2.47A4.92 4.92 0 0 1 3.728 3.005 4.92 4.92 0 0 1 5.403 1.913c.465-.163 1.264-.347 2.47-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.548.012-4.796.07-1.03.05-1.59.215-1.96.359a3.093 3.093 0 0 0-1.11.722 3.093 3.093 0 0 0-.722 1.11c-.144.37-.309.93-.359 1.96-.058 1.248-.07 1.626-.07 4.796s.012 3.548.07 4.796c.05 1.03.215 1.59.359 1.96.165.435.395.816.722 1.11.294.327.675.557 1.11.722.37.144.93.309 1.96.359 1.248.058 1.626.07 4.796.07s3.548-.012 4.796-.07c1.03-.05 1.59-.215 1.96-.359a3.093 3.093 0 0 0 1.11-.722 3.093 3.093 0 0 0 .722-1.11c.144-.37.309-.93.359-1.96.058-1.248.07-1.626.07-4.796s-.012-3.548-.07-4.796c-.05-1.03-.215-1.59-.359-1.96a3.093 3.093 0 0 0-.722-1.11 3.093 3.093 0 0 0-1.11-.722c-.37-.144-.93-.309-1.96-.359-1.248-.058-1.626-.07-4.796-.07zm0 3.838a5.999 5.999 0 1 1 0 12.001A5.999 5.999 0 0 1 12 7.839zm0 1.838a4.161 4.161 0 1 0 0 8.322 4.161 4.161 0 0 0 0-8.322zm6.406-.777a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
            </div>
            </div>
          </div>
        </div>
        <form className="space-y-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John Gilbert"
                className="w-full border border-black px-3 py-2 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="JohnGilbert@gmail.com"
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
                Service<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Select the Service"
                className="w-full border border-black px-3 py-2 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Ex: I want to book the studio for song recording."
              className="w-full border border-black px-3 py-2 rounded-md h-24 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-900 hover:text-white transition w-[600px] border border-black"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full h-72 mt-30">
        <iframe
          title="Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.310098872353!2d78.3908295148778!3d17.44008178804359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ddcc3e690b%3A0x7339b5210e7f3286!2sThe%20Sound%20Dockx!5e0!3m2!1sen!2sin!4v1717592552694!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
