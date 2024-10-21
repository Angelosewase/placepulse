// src/components/ReviewsCarousel.js
import { useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { reviews } from "@/constants/dummy";
import "@mantine/carousel/styles.css";
import testimonialActiveVector from "@/assets/images/reviewsImage.png";
import Quotes from "@/assets/images/Quotes.png";

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const nextSlide = () => {
    if (currentIndex === reviews.length - 1) {
      setCurrentIndex(0);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative   w-full h-full">
      <img src={testimonialActiveVector} className=" " alt="something cool " />
      <div className="absolute top-0 flex items-center justify-center w-full h-full overflow-hidden">
        <h1 className=" absolute top-24 text-4xl font-extrabold w-full text-center ">
          See what our clients say about us
        </h1>
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center absolute left-1/4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg z-10"
        >
          <TiArrowLeftThick size={24} />
        </button>

        <div
          className="flex transition-transform duration-500 ease-in-out justify-between"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="  flex flex-col items-center p-4 mt-20    w-full"
              style={{ minWidth: "100%" }}
            >
              <div className=" relative flex flex-col w-[40%] bg-white  py-20 px-0  rounded-xl ">
                <img src={Quotes} className="absolute top-10 left-10" />
                <img
                  src={review.image}
                  className="w-24 h-24 rounded-full mx-auto absolute -top-8 right-[45%] shadow-xl "
                  alt={review.name}
                />
                <div className="mt-4 text-center">
                  <p className="   roundend max-w-md mx-auto">
                    {review.review}
                  </p>
                  <h1 className="mt-2 text-lg font-bold">{review.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full flex items-center justify-center absolute right-1/4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg z-10"
        >
          <TiArrowRightThick size={24} />
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
