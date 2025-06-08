import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import img1 from "../assets/img7.jpg";
import img2 from "../assets/img9.jpg";
import img3 from "../assets/img10.jpg";
import img4 from "../assets/img8.jpg";
import img5 from "../assets/img5.jpg";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide professional song recording, mixing, mastering, music production, remote mastering, and artist management services.",
  },
  {
    question: "Do I need to book in advance?",
    answer:
    "We provide professional song recording, mixing, mastering, music production, remote mastering, and artist management services.",
  },
  {
    question: "Can I record multiple songs in one session?",
    answer:
    "We provide professional song recording, mixing, mastering, music production, remote mastering, and artist management services.",
  },
  {
    question: "Do you provide producers or sound engineers?",
    answer:
    "We provide professional song recording, mixing, mastering, music production, remote mastering, and artist management services.",
  },
  {
    question: "What’s the difference between mixing and mastering?",
    answer:
    "We provide professional song recording, mixing, mastering, music production, remote mastering, and artist management services.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-wrap md:flex-nowrap gap-12 items-start">
      <div className="relative w-full md:w-1/2 h-[600px] md:mt-79">
        <img
          src={img1}
          alt=""
          className="absolute top-0 left-0 w-48 h-48 rounded-md object-cover shadow-md hover:brightness-50"
        />
        <img
          src={img2}
          alt=""
          className="absolute top-32 left-32 w-64 h-80 rounded-md object-cover shadow-md z-20 hover:brightness-50"
        />
        <img
          src={img3}
          alt=""
          className="absolute top-89 left-10 w-32 h-32 rounded-md object-cover shadow-md z-30 hover:brightness-50"
        />
        <img
          src={img4}
          alt=""
          className="absolute  -top-8 left-72 w-48 h-48 rounded-md  object-cover shadow-md z-10 hover:brightness-50"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-16 -mt-8">
        <div className="flex items-center space-x-2 mb-20  -ml-[710px]">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <span className="uppercase text-xl font-medium tracking-wide">FAQ</span>
          <div className="flex-grow h-[0.2px] bg-black ml-4"></div>
        </div>
        <div className="mb-12 -ml-[710px] -mt-8">
          <h2 className="text-6xl font-semibold font-jakarta text-left">Top Questions</h2>
          <div className="flex items-center mt-2">
            <span
              className="font-jakarta text-6xl text-black italic"
            >
              Answers
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-4">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum id, <br />rerum modi atque explicabo natus repudiandae illum aut rem nostrum!
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-t border-gray-400 pt-4 relative">
              <div
                onClick={() => toggle(index)}
                className="cursor-pointer flex justify-between items-center pr-14"
              >
                <h3 className="text-xl font-medium p-3">
                  {index + 1}. {item.question}
                </h3>
                <div className="absolute right-4 flex items-center gap-2">
                  {openIndex === index ? (
                    <div className="bg-white border-2 border-gray-300 w-6 h-6 flex items-center justify-center rounded-full text-[#A1CDE0]">
                      <Minus size={14} />
                    </div>
                  ) : (
                    <div className="bg-[#A1CDE0] w-6 h-6 flex items-center justify-center rounded-full text-white">
                      <Plus size={14} />
                    </div>
                  )}
                </div>
              </div>
              {openIndex === index && item.answer && (
                <p className="mt-3 text-gray-600 max-w-xl ml-4">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
