/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const Carousel = ({ accommodations }: { accommodations: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === accommodations.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? accommodations.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="carousel">
      {currentIndex !== 0 && (
        <button
          onClick={prevSlide}
          className="carousel-button prev-button w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
        >
          <TiArrowLeftThick />
        </button>
      )}
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${currentIndex * 70}%)` }}
      >
        {accommodations.map((accommodation: any, index: any) => (
          <div key={index} className="carousel-item">
            <img
              src={accommodation.image}
              alt={accommodation.title}
              className="accommodation-image"
            />
            <div className="accommodation-info">
              <h3>{accommodation.title}</h3>
              <p>
                Category: <strong>{accommodation.category}</strong>
              </p>
              <p>{accommodation.location}</p>
              <p>⭐ {accommodation.rating}</p>
            </div>
          </div>
        ))}
      </div>
      {currentIndex + 3 != accommodations.length && (
        <button
          onClick={nextSlide}
          className="carousel-button next-button w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
        >
          <TiArrowRightThick />
        </button>
      )}
    </div>
  );
};

export default Carousel;
