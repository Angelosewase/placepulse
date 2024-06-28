/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { reviews } from "@/constants/dummy";
import testimonialVector from "@/assets/images/test_vector.png";
type Review = {
  name: string;
  review: string;
  image: string;
  rating: number;
  date: string;
};
const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="">
      {/* {currentIndex !== 0 && (
        <button
          onClick={prevSlide}
          className="carousel-button prev-button w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
        >
          <TiArrowLeftThick />
        </button>
      )} */}
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${currentIndex * 92}%)` }}
      >
        {reviews.map((review: Review, index: number) => {
          return (
            <div key={index} className="relative">
              <img src={testimonialVector} className="w-[350px] h-[280px]" />
              <div className="absolute top-[30%] left-[20%]">
                <img src={review.image} className="" />
                <div>
                  <h1>{review.name}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* {currentIndex + 3 != reviews.length && (
        <button
          onClick={nextSlide}
          className="carousel-button next-button w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
        >
          <TiArrowRightThick />
        </button>
      )} */}
    </div>
  );
};

export default ReviewsCarousel;
