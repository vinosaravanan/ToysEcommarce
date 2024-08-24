import React, { useState, useEffect } from "react";

import image1 from "../assets/img/BannerImg/toysbannarimg-1edit.jpg";
import image2 from "../assets/img/BannerImg/toysbannerimg2.jpg";
import image3 from "../assets/img/BannerImg/toysbannerimg-3edit.jpg";
import image4 from "../assets/img/BannerImg/toysbannarimg-4.jpg";

// we can refer images for response design product list and productdetails

const images = [image1, image2, image3, image4];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
       
         
        nextImage()
        // console.log('muvin', currentImage);
    }, 3000);

    return () => clearInterval(interval);

  }, []);
 
  console.log('muvin', currentImage);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const PrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };
                               
  return (
    <div className="relative w-full h-80  overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover" // we can refer images for response design product list //and productdetails
          />
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={PrevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Banner;
