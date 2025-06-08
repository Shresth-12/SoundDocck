import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import img1 from '../assets/img7.jpg';
import img2 from '../assets/img7.jpg';
import img3 from '../assets/img7.jpg';
import img4 from '../assets/img7.jpg';

export default function AboutPage() {
  const allImages = [img1, img2, img3, img4];
  const [bigImageIndex, setBigImageIndex] = useState(0);

  const handleNext = () => {
    setBigImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const smallImages = [];
  for (let i = 1; i <= 3; i++) {
    smallImages.push(allImages[(bigImageIndex + i) % allImages.length]);
  }

  return (
    <div className="px-8 py-10 max-w-6xl mx-auto font-sans text-black font-jakarta">
      <div className="flex items-center space-x-2 mb-20 ">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <span className="uppercase text-xl font-medium tracking-wide">
          Home/ <span className="text-[#717171]">About</span>
        </span>
        <div className="flex-grow h-[0.2px] bg-black ml-4"></div>
      </div>

      <h1 className="text-5xl font-bold leading-tight mb-2">
        The Story Behind <br />
        the <em className="italic font-light">Sound</em>
      </h1>
      <p className="text-gray-500 mb-16">How The Sound Dock became a home for music makers.</p>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1 flex justify-center">
          <img
            src={allImages[bigImageIndex]}
            alt="Main"
            className="object-cover transition-transform duration-300 h-[600px] max-w-[500px]"
          />
        </div>

        <div className="flex-1 flex flex-col gap-6 mt-10">
          <div className="flex space-x-4 mb-4 items-center justify-start -ml-[80px]">
  {smallImages.map((imgSrc, index) => (
    <img
      key={index}
      src={imgSrc}
      alt={`img${index}`}
      className="w-55 h-40 object-cover transition-transform duration-300"
    />
  ))}
  <button
    onClick={handleNext}
    className="w-10 h-10 border rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition ml-8"
  >
    <ArrowRight />
  </button>
</div>


          <p className="text-[17px] leading-relaxed  w-[700px]">
            Pizza ipsum dolor meat lovers buffalo. Banana pie wing wing stuffed party and. Olives white pan pepperoni ricotta large. Steak ham style buffalo tomatoes pizza olives anchovies. Bacon roll parmesan burnt thin roll meat anchovies extra. Style platter lasagna olives Philly broccoli lovers green. Peppers ranch rib bell onions. Party spinach lovers cheese roll ricotta. Red white crust Philly sauce pork sausage. Pie mayo fresh dolor wing dolor. Steak bbq bell lovers lovers dolor rib.
          </p>

          <p className="text-[17px] leading-relaxed">
            Garlic black green bell onions tomatoes pizza. Chicago Aussie platter style red. Bbq sausage broccoli large ricotta rib bbq string mayo. Chicken Aussie pizza meat roll black. Tomatoes black stuffed sausage steak personal anchovies. Mouth NY ranch rib beef deep dolor. Red meat lovers party party. Broccoli ranch lot roll Aussie tomatoes.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-sm leading-relaxed text-[17px] w-[1150px]">
        <p>
          Garlic black green bell onions tomatoes pizza. Chicago Aussie platter style red. Bbq sausage broccoli large ricotta rib bbq string mayo. Chicken Aussie pizza meat roll black. Tomatoes black stuffed sausage steak personal anchovies. Mouth NY ranch rib beef deep dolor. Red meat lovers party party. Broccoli ranch lot roll Aussie tomatoes.
        </p>
        <p>
          Garlic black green bell onions tomatoes pizza. Chicago Aussie platter style red. Bbq sausage broccoli large ricotta rib bbq string mayo. Chicken Aussie pizza meat roll black. Tomatoes black stuffed sausage steak personal anchovies. Mouth NY ranch rib beef deep dolor. Red meat lovers party party. Broccoli ranch lot roll Aussie tomatoes.
        </p>
      </div>
    </div>
  );
}
