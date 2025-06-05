import React from 'react';
import "../styles/slider.css";
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"

const images = [
  img1,img2,img3,img4,img5,img6, img1,img2,img3,img4,img5,img6, img1,img2,img3,img4,img5,img6, img1,img2,img3,img4,img5,img6, img1,img2,img3,img4,img5,img6
];

function Carousel() {
  const navigate = useNavigate();

  const goToTeamSection = () => {
    navigate("/about#team");
  };

  return (
    <div className="py-4 flex flex-col items-center justify-center relative overflow-hidden bg-transparent">
      <div className="slider">
        <div className="slide-track">
          {images.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
