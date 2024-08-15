// src/components/ReviewsCarousel.js
import { useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { reviews } from "@/constants/dummy";
import testimonialVector from "@/assets/images/test_vector.png";
import testimonialActiveVector from "@/assets/images/test_vector_actice.png";

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length,
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
      <button
        onClick={prevSlide}
        className="w-12 h-12 rounded-full flex items-center justify-center absolute left-1/3 top-1/2 transform -translate-y-1/2 bg-white shadow-lg z-10"
      >
        <TiArrowLeftThick size={24} />
      </button>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 w-1/3 flex flex-col items-center p-4 transition-opacity duration-500 ease-in-out`}
            style={{ minWidth: "33.33%" }}
          >
            {currentIndex === index - 1 ? (
              <img
                src={testimonialActiveVector}
                className="w-[430px] h-[320px]"
                alt="Background"
              />
            ) : (
              <img
                src={testimonialVector}
                className="w-[430px] h-[320px]"
                alt="Background"
              />
            )}
            <div className="w-[70%] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
              <img
                src={review.image}
                className="w-16 h-16 rounded-full mx-auto"
                alt={review.name}
              />
              <div className="mt-4">
                <h1 className="text-lg font-bold">{review.name}</h1>
                <p className="mt-2 text-sm max-w-md">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="w-12 h-12 rounded-full flex items-center justify-center absolute right-1/3 top-1/2 transform -translate-y-1/2 bg-white shadow-lg z-10"
      >
        <TiArrowRightThick size={24} />
      </button>
    </div>
  );
};

export default ReviewsCarousel;
